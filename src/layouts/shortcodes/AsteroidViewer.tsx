import React, { useEffect, useRef, useState } from "react";

// Asteroid 33662 Tacescu orbital elements from JPL SBDB API
const TACESCU = {
  epoch: 2461000.5,
  a: 2.45,
  e: 0.106,
  i: 7.05,
  om: 144,
  w: 145,
  ma: 272,
};

const TIME_SPEEDS = [
  { label: "1 Day", value: 1 },
  { label: "1 Week", value: 7 },
  { label: "1 Month", value: 30 },
  { label: "1 Year", value: 365 },
];

// Planet colors (standard astronomical colors)
const PLANET_COLORS: Record<string, number> = {
  Sun: 0xffff00,
  Mercury: 0xb5b5b5,
  Venus: 0xffd700,
  Earth: 0x6b93d6,
  Mars: 0xc1440e,
  Jupiter: 0xd8ca9d,
  Saturn: 0xead6b8,
  Uranus: 0xd1e7e7,
  Neptune: 0x5b5ddf,
  Pluto: 0x9ca6b7,
  Asteroid: 0xffffff,
};

// Oversized radii for visibility (in AU, not to scale)
const PLANET_RADII: Record<string, number> = {
  Sun: 0.15,
  Mercury: 0.03,
  Venus: 0.04,
  Earth: 0.045,
  Mars: 0.035,
  Jupiter: 0.08,
  Saturn: 0.07,
  Uranus: 0.055,
  Neptune: 0.055,
  Pluto: 0.025,
  Asteroid: 0.03,
};

export default function AsteroidViewer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const simRef = useRef<any>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [speed, setSpeed] = useState(7);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [dateInput, setDateInput] = useState("");
  const [distances, setDistances] = useState({ earth: 0, sun: 0 });
  const [showScrollHint, setShowScrollHint] = useState(false);
  const [simReady, setSimReady] = useState(false);
  const animationRef = useRef<number | null>(null);
  const scrollHintTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    let isMounted = true;
    let distanceInterval: number | null = null;

    const initSpacekit = async () => {
      const Spacekit = await import("spacekit.js");

      if (!isMounted || !containerRef.current) return;

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const sim = new (Spacekit as any).Simulation(containerRef.current, {
        basePath: "https://typpo.github.io/spacekit/src",
        startDate: new Date(),
        startPaused: true, // We control time manually
        camera: {
          initialPosition: [0, -5, 2.5],
        },
        debug: {
          showStats: false,
        },
      });

      simRef.current = sim;

      // Sun - stationary at center
      sim.createSphere("Sun", {
        position: [0, 0, 0],
        radius: PLANET_RADII.Sun,
        color: PLANET_COLORS.Sun,
        labelText: "Sun",
      });

      // Inner planets with spheres
      sim.createSphere("Mercury", {
        ephem: Spacekit.EphemPresets.MERCURY,
        radius: PLANET_RADII.Mercury,
        color: PLANET_COLORS.Mercury,
        labelText: "Mercury",
      });
      sim.createSphere("Venus", {
        ephem: Spacekit.EphemPresets.VENUS,
        radius: PLANET_RADII.Venus,
        color: PLANET_COLORS.Venus,
        labelText: "Venus",
      });
      const earth = sim.createSphere("Earth", {
        ephem: Spacekit.EphemPresets.EARTH,
        radius: PLANET_RADII.Earth,
        color: PLANET_COLORS.Earth,
        labelText: "Earth",
      });
      sim.createSphere("Mars", {
        ephem: Spacekit.EphemPresets.MARS,
        radius: PLANET_RADII.Mars,
        color: PLANET_COLORS.Mars,
        labelText: "Mars",
      });

      // Outer planets with spheres
      sim.createSphere("Jupiter", {
        ephem: Spacekit.EphemPresets.JUPITER,
        radius: PLANET_RADII.Jupiter,
        color: PLANET_COLORS.Jupiter,
        labelText: "Jupiter",
      });
      sim.createSphere("Saturn", {
        ephem: Spacekit.EphemPresets.SATURN,
        radius: PLANET_RADII.Saturn,
        color: PLANET_COLORS.Saturn,
        labelText: "Saturn",
      });
      sim.createSphere("Uranus", {
        ephem: Spacekit.EphemPresets.URANUS,
        radius: PLANET_RADII.Uranus,
        color: PLANET_COLORS.Uranus,
        labelText: "Uranus",
      });
      sim.createSphere("Neptune", {
        ephem: Spacekit.EphemPresets.NEPTUNE,
        radius: PLANET_RADII.Neptune,
        color: PLANET_COLORS.Neptune,
        labelText: "Neptune",
      });
      sim.createSphere("Pluto", {
        ephem: Spacekit.EphemPresets.PLUTO,
        radius: PLANET_RADII.Pluto,
        color: PLANET_COLORS.Pluto,
        labelText: "Pluto",
      });

      // Asteroid 33662 Tacescu
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const asteroidEphem = new (Spacekit as any).Ephem(TACESCU, "deg");
      const asteroid = sim.createSphere("33662 Tacescu", {
        ephem: asteroidEphem,
        radius: PLANET_RADII.Asteroid,
        color: PLANET_COLORS.Asteroid,
        labelText: "33662 Tacescu",
      });

      // Add ecliptic drop lines to show inclination
      const orbit = asteroid.getOrbit();
      if (orbit) {
        const eclipticLines = orbit.getLinesToEcliptic();
        sim.getScene().add(eclipticLines);
      }

      // Update distances periodically
      const updateDistances = () => {
        if (!isMounted) return;
        try {
          const now = sim.getDate();
          const asteroidPos = asteroid.getPosition(now);
          const earthPos = earth.getPosition(now);
          const sunDist = Math.sqrt(
            asteroidPos[0] ** 2 + asteroidPos[1] ** 2 + asteroidPos[2] ** 2,
          );
          const earthDist = Math.sqrt(
            (asteroidPos[0] - earthPos[0]) ** 2 +
              (asteroidPos[1] - earthPos[1]) ** 2 +
              (asteroidPos[2] - earthPos[2]) ** 2,
          );
          setDistances({ earth: earthDist, sun: sunDist });
          setCurrentDate(now);
        } catch {
          // Positions not ready yet
        }
      };

      distanceInterval = window.setInterval(updateDistances, 1000);
      updateDistances();

      // Mark simulation as ready to trigger animation
      if (isMounted) {
        setSimReady(true);
      }
    };

    initSpacekit();

    return () => {
      isMounted = false;
      if (distanceInterval) {
        clearInterval(distanceInterval);
      }
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Animation loop for time controls
  useEffect(() => {
    if (!isPlaying || !simReady || !simRef.current) return;

    let lastTime = 0;

    const animate = (currentTime: number) => {
      const sim = simRef.current;
      if (!sim) return;

      if (lastTime === 0) {
        lastTime = currentTime;
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      const deltaMs = currentTime - lastTime;
      lastTime = currentTime;

      // Days per second equals the speed value (1 day/sec for speed=1, 7 days/sec for speed=7, etc.)
      const daysPerSecond = speed;
      const daysToAdvance = (deltaMs / 1000) * daysPerSecond;

      const currentJd = sim.getJd();
      sim.setJd(currentJd + daysToAdvance);
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPlaying, speed, simReady]);

  // Handle scroll wheel - require Ctrl key for zooming
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      if (!e.ctrlKey) {
        // Show hint when scrolling without Ctrl
        setShowScrollHint(true);

        // Clear existing timeout
        if (scrollHintTimeoutRef.current) {
          clearTimeout(scrollHintTimeoutRef.current);
        }

        // Hide hint after 2 seconds
        scrollHintTimeoutRef.current = window.setTimeout(() => {
          setShowScrollHint(false);
        }, 2000);

        // Stop event from reaching spacekit so it doesn't zoom
        e.stopPropagation();
        // Don't prevent default - allow page scroll
        return;
      }

      // Ctrl is pressed - handle zoom manually with reversed direction
      e.preventDefault();
      e.stopPropagation();

      const sim = simRef.current;
      if (!sim) return;

      // Get the camera and manually adjust zoom with reversed direction
      const camera = sim.getViewer()?.camera;
      if (camera) {
        // Reverse the delta: positive deltaY (scroll down) = zoom in, negative = zoom out
        const zoomFactor = e.deltaY > 0 ? 0.9 : 1.1;
        camera.position.multiplyScalar(zoomFactor);
      }
    };

    // Use capture phase to intercept before spacekit's Three.js controls
    container.addEventListener("wheel", handleWheel, {
      passive: false,
      capture: true,
    });

    return () => {
      container.removeEventListener("wheel", handleWheel, { capture: true });
      if (scrollHintTimeoutRef.current) {
        clearTimeout(scrollHintTimeoutRef.current);
      }
    };
  }, []);

  const handleStep = (direction: number) => {
    if (!simRef.current) return;
    const sim = simRef.current;
    sim.setJd(sim.getJd() + direction * speed);
  };

  const handleDateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!simRef.current || !dateInput) return;
    const date = new Date(dateInput);
    if (!isNaN(date.getTime())) {
      simRef.current.setDate(date);
      setDateInput("");
    }
  };

  const formatDate = (date: Date) => {
    return date.toISOString().split("T")[0];
  };

  return (
    <div
      className="relative w-full overflow-hidden rounded-lg"
      style={{ height: "500px" }}
    >
      <div
        ref={containerRef}
        className="h-full w-full"
        style={{ touchAction: "none" }}
      />

      {/* Time Controls */}
      <div className="absolute right-2 top-2 flex flex-col gap-1">
        <div className="flex gap-1">
          <button
            onClick={() => handleStep(-10)}
            className="rounded bg-gray-800/80 px-2 py-1 text-white hover:bg-gray-700"
            title="Rewind"
          >
            ⏪
          </button>
          <button
            onClick={() => handleStep(-1)}
            className="rounded bg-gray-800/80 px-2 py-1 text-white hover:bg-gray-700"
            title="Step back"
          >
            ⏮
          </button>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="rounded bg-gray-800/80 px-2 py-1 text-white hover:bg-gray-700"
            title={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? "⏸" : "▶"}
          </button>
          <button
            onClick={() => handleStep(1)}
            className="rounded bg-gray-800/80 px-2 py-1 text-white hover:bg-gray-700"
            title="Step forward"
          >
            ⏭
          </button>
          <button
            onClick={() => handleStep(10)}
            className="rounded bg-gray-800/80 px-2 py-1 text-white hover:bg-gray-700"
            title="Fast forward"
          >
            ⏩
          </button>
        </div>
        <select
          value={speed}
          onChange={(e) => setSpeed(Number(e.target.value))}
          className="rounded bg-gray-800/80 px-2 py-1 text-sm text-white"
        >
          {TIME_SPEEDS.map((s) => (
            <option key={s.value} value={s.value}>
              {s.label}
            </option>
          ))}
        </select>
        <form onSubmit={handleDateSubmit} className="flex gap-1">
          <input
            type="text"
            value={dateInput}
            onChange={(e) => setDateInput(e.target.value)}
            placeholder="YYYY-MM-DD"
            className="w-24 rounded bg-gray-800/80 px-2 py-1 text-xs text-white placeholder-gray-400"
          />
          <button
            type="submit"
            className="rounded bg-gray-800/80 px-2 py-1 text-xs text-white hover:bg-gray-700"
          >
            Go
          </button>
        </form>
      </div>

      {/* Info Overlay */}
      <div className="absolute bottom-2 left-2 rounded bg-black/60 p-2 text-sm text-white">
        <div className="font-bold">33662 Tacescu</div>
        <div>Earth Distance: {distances.earth.toFixed(3)} AU</div>
        <div>Sun Distance: {distances.sun.toFixed(3)} AU</div>
        <div>{formatDate(currentDate)} UTC</div>
      </div>

      {/* Scroll Hint */}
      {showScrollHint && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="rounded bg-black/80 px-4 py-2 text-sm text-white">
            Press Ctrl + scroll to zoom
          </div>
        </div>
      )}
    </div>
  );
}
