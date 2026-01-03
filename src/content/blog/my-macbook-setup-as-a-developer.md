---
title: "My Macbook Setup – As a Software Developer"
meta_title: "My Macbook Setup - Alex Tacescu"
description: "A comprehensive guide to my development setup on macOS, including applications, tools, and must-have settings"
date: 2025-07-11
# image: "/images/blog/macbook-setup.jpg"
author: "Alex Tacescu"
categories: ["Software"]
tags: ["MacOS", "Development", "Tools"]
draft: false
---

As a software developer, having a well-configured development environment is crucial for productivity and efficiency. Over the years, I've refined my Macbook setup to include a selection of applications, tools, and settings that enhance my workflow. Since my friends and co-workers keep asking how I set everything up, I've decided to document it here for easy reference.

## Applications

### Raycast

I'm a big supporter of keeping my hands on my keyboard as much as possible, and a proper launcher goes a big way into doing that. The first time I used Spotlight on a Mac, it opened my eyes to a new world of launching apps, where I previously had everything on my desktop. Now, whether I use MacOS, Windows, or my favorite flavor of Linux, I always look to set up something like Spotlight to launch applications.

However, Spotlight left a lot to be desired. That's where Raycast comes it: the all-powerful MacOS launcher that has so many features I don't know what to do with them. Raycast probably deserves it's own blogpost, but for now it remains my go-to absolute first thing I always need to set up as soon as I possibly can when I get a new Mac. And from the looks of it, Marques from MKBHD, Theo from T3.gg, and the likes agree.

[https://www.raycast.com](https://www.raycast.com)

### Homebrew

Not sure if this needs any introduction, but it's one of the first thing I always look to install when getting a new Macbook. It's the package manager that Apple never built, and is incredibly useful in all sorts of things.

[https://brew.sh](https://brew.sh)

### Browser of Choice: Zen Browser

I really just want two things out of my browser: vertical tabs and for it to be a browser. It feels like these days, so many browsers are just pushing you to use or do non-browser things such as use their AI tool or their web3 wallet. Zen Browser is just a breath of fresh air. Not only are they simple and don't force you into tools that you don't want to use, but they are innovating on functionality that genuinely improve your web browsing experience! Things like `cmd+shift+c` to copy the URL or `option/alt + click` to open things in a temporary window make my experience much better.

[https://zen-browser.app/](https://github.com/zen-browser/desktop/discussions/3397)

Honorary mention goes to Helium Browser, which is looking like the chrome alternative to Zen. It's still in early development, but looks promising, and I'm using it as my web development browser for the Chrome dev tools. [https://helium.computer/](https://helium.computer/)

### Editor of Choice: Zed + VS Code

I actually flop back and forth between two main code editors, depending on the project and exactly what I'm working on. I am tending to migrate more towards Zed these days, but occasionally I'll open up VS Code for something here and there.

I don't think VS Code needs any introduction, but it is the most popular choice of any editor these days. [https://code.visualstudio.com/](https://code.visualstudio.com/)

Zed is a new player on the block, and it really feels like they're rethinking what a code editor should be. It's ridiculously fast, and makes VS Code feel like I'm walking through mud. I've also been recently playing around with some of their AI features, but it's too early to tell. I'll update the post in the future. [https://zed.dev/](https://zed.dev/)

### Terminal App of Choice: Ghostty

Ghostty is just a fast terminal emulator. Similarly to Zen, it aims to be fast and stable. There are some really nice things about it and some pain points (especially when sshing into other devices). At the very least, it has good tmux support and is much more configurable than the stock terminal app.

[https://ghostty.org](https://ghostty.org)

### OrbStack

I heard about OrbStack from Theo (from T3.gg) initially. As a massive user of Docker in everything I work in, the base Docker Desktop for Mac is probably one of the worst integrations (even in Windows). I've had nothing but issues, have to install/uninstall it constantly because of the MacOS security detections, and it just is slow. When I heard about OrbStack, it seemed to be the solution for me, and boy did it become it! I also absolutely love that it also includes the ability to work with VMs, which I do on occasion. Definite recommendation from me!

[https://orbstack.dev](https://orbstack.dev)

### Alt-Tab

Let's be honest, the default Cmd+Tab function is awful in MacOS. It just sucks, and the biggest reason why is that you can't really switch between two instances of the same application! Alt-Tab is an open-source application that lets you regain control over your Cmd+Tab keybinding.

[https://alt-tab-macos.netlify.app/](https://alt-tab-macos.netlify.app/)

### Rectangle (Pro)

Window management is always tough, especially on big screens. Since I often plug my Mac into a big monitor, I also like to have shortcuts to put apps in specific locations. Rectangle allows me to do that and more! It's not as good as Windows's option in Powertoys, but it's good enough!

[https://rectangleapp.com](https://rectangleapp.com)

### Hidden

Macs love their menu bar items. This tool hides the unimportant ones when you don't need them to declutter your top right of your screen.

[https://github.com/dwarvesf/hidden](https://github.com/dwarvesf/hidden)

## Must-have Settings

This is as much for me to remember what I care about as it is for anyone reading this, but here are a few settings I always need to remember to change:

### Battery Percentage Indicator

Wild that this isn't turned on by default, but I always want to know what my battery percentage is at a glance!

### Lock Screen with Cmd + L

I come from a Windows background, as I'm sure most of us have. Cmd+L for locking your device just makes sense, rather than some dance of Cmd+Shift+Q or whatever it actually is. Here is a handy short Medium article for a reminder on how to set it up:

[https://achekulaev.medium.com/lock-screen-with-cmd-l-l-global-hotkey-on-macos-high-sierra-3c596b76026a](https://achekulaev.medium.com/lock-screen-with-cmd-l-l-global-hotkey-on-macos-high-sierra-3c596b76026a)

### Minimize Key Repeat Delay

As a vim flow user, I really rely on the ability to just hold a key and have it be repeated quickly. Therefore, under the `Keyboard` section of the Settings, I have `Key repeat rate` set to maximum `Fast` and `Delay until repeat` set to maximum `Short`.
