---
title: "RoboMagellan Team WPI"
meta_title: "RoboMagellan Team WPI - Alex Tacescu"
description: "An autonomous robot that competed in the RoboMagellan competition at the 2018 RoboGames in California"
date: 2018-05-01
image: "/images/projects/robomagellan.jpg"
categories: ["Robotics", "Personal Projects"]
tags: ["RoboMagellan", "WPI"]
featured: false
draft: true
---

This robot competed in the RoboMagellan competition at the 2018 RoboGames in California. The robot was designed to autonomously find cones based on approximate GPS coordinates and report them back to a command module.

There were three parts to the robot: the base, the navigation, and the cone finding. For simplicity, the base used was the [Dagu Wild Thumper](https://www.pololu.com/product/1554) with added encoders on each wheel. A [Teensy 3.5](https://www.sparkfun.com/products/14055) (soon-to-be an ESP-32 Thing from Sparkfun) was used as a controller for the motors and the basic sensors. PID and other control loops were running on this microcontroller. Connected via Serial over USB was an [NVidia Jetson TX2](https://developer.nvidia.com/embedded/buy/jetson-tx2), a small but powerful single-board computer. We selected this to run the navigation and cone-finding algorithms. The current robot uses a stereo camera to create a 3D map of its surroundings. It can avoid people and other obstacles while navigating to cones. To find those cones, an artificial intelligence algorithm analyzed incoming pictures and created a waypoint for the robot to go to.
