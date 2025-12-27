---
title: "SmallKat MQP"
meta_title: "SmallKat MQP - Alex Tacescu"
description: "A quadrupedal robotic platform to help research and design new gaits, test sensors, and teach engineering students"
date: 2019-04-19
image: "/images/projects/smallkat.jpg"
categories: ["Robotics", "Personal Projects"]
tags: ["SmallKat MQP", "Major Project", "WPI"]
featured: true
draft: false
---

The SmallKat MQP is providing a quadrupedal robotic platform to help research and design new gaits, test sensors, and teach engineering students. Current options limit small companies, universities, and hobbyists due to their complexity, large size, and immense cost. SmallKat is a low-cost robotic platform with customizability and adaptability in mind.

## Overview

To allow for a multitude of gait designs, SmallKat is designed with 4-DoF legs controlled by powerful custom servo motors, 9-DoF IMUs, and custom microcontrollers. The body is constructed using additive manufacturing with PLA plastics, and even has a continuum tail for added body control. The higher-level controller runs on a single-board computer for added performance when computing kinematics and dynamics, and controlling different gaits.

## Mechanical Design

- **4-DoF Legs** powered by JX HV-5932MG for adaptability & maneuverability
  - Low cost ($30), high torque (32kg-cm stall), & simple communication system
  - Other options considered: Dynamixel AX-12a & XH430

- **Continuum Tail**: 20 links, controlled by 4 braided fishing lines
  - 4 Maxon motors control the movement of the tail by tightening or loosening the string
  - 2 motors control the first half of the tail, other 2 motors control the second half

- **Polyurethane Feet** add an increased coefficient of friction with the ground
  - Feet have integrated pressure sensors for force measurements
  - 3D printed molds created to attach polyurethane to the feet

## Electronics

Custom Microelectronics designed for this project:
- Motor Controller
- Custom foot sensors
- Charger
- Motherboard
- Tail Driver and Controller
- IMU

**Communication Stack:**
- Receives updates wirelessly
- Calculates IK of the robot
- Updates joint angles
- Returns joint angles, IMU data, foot sensor data, and battery voltage

## Software

- Raspberry Pi 3 B+ connected to the microcontroller via HID over USB
- Bowler Studio & Bowler Kernel for development environment & simulation
- Bowler Kernel: underlying kernel, runs headless on the Raspberry Pi 3
- Forward kinematics & some dynamics are integrated in Bowler Studio
- Developed inverse kinematics software for position control using Geometric approach
- Basic Walking Gait with a Central Pattern Generator (CPG) for trajectory generation
- Dynamic walking gait by calculating the Wide Stability Margin and a CPG for trajectory generation

## Future Work

Future revisions of SmallKat could look to advance the basic gaits that were developed and add new sensors like a 3D camera.

## Resources

- [SmallKat on GitHub](https://github.com/alextac98)