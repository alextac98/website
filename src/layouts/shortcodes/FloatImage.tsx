import React from "react";

interface FloatImageProps {
  src: string;
  alt: string;
  side?: "left" | "right";
  width?: string;
  children: React.ReactNode;
}

const FloatImage = ({
  src,
  alt,
  side = "left",
  width = "50%",
  children,
}: FloatImageProps) => {
  const floatClass =
    side === "left" ? "float-left mr-6 mb-4" : "float-right ml-6 mb-4";

  return (
    <div className="clearfix">
      <img
        src={src}
        alt={alt}
        className={`${floatClass} !mt-0 max-md:w-full max-md:float-none max-md:mx-0 max-md:mb-4 rounded`}
        style={{ width }}
      />
      <div>{children}</div>
    </div>
  );
};

export default FloatImage;
