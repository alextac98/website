---
title: "Making .desktop Files for Linux"
meta_title: "Making .desktop Files for Linux - Alex Tacescu"
description: "A quick guide on creating custom .desktop files to add programs to your Linux launcher"
date: 2020-06-10
# image: "/images/blog/linux-desktop.jpg"
author: "Alex Tacescu"
categories: ["Software"]
tags: ["Linux", "Ubuntu"]
draft: false
---

Here's a quick explanation on a tool I've been recently using more and more. As a Linux user, you will often run into scripts or programs that don't come packaged to be installed. Although this totally fine, often times it means that I can't launch the script with my favorite launcher, Albert!

In this case there are two main methods I have found to make custom `.desktop` files. For the following examples, I will be using the following `.desktop` file for Anaconda Navigator.

```ini
[Desktop Entry]
Name=Anaconda-Navigator
Exec=/home/alex/anaconda3/bin/anaconda-navigator
Terminal=false
Type=Application
Icon=/home/alex/anaconda3/lib/python3.7/site-packages/anaconda_navigator/static/images/anaconda-icon-256x256.png
Categories=Development;
Keywords=python;python3;anaconda;navigator;conda;
Comment=Anaconda GUI Navigator for Python 3
```

## Recommended: Using Desktop-File Tool

This tool is simple to use, and also allows you to put the `.desktop` file anywhere on your computer. Wherever that file is, simply change the directory to that file. Then run the following command, replacing the name of the `.desktop` file you just made:

```bash
sudo desktop-file-install anaconda.desktop
```

It may take a few seconds (20 – 40) to populate in your launcher, whether that is the standard Gnome search or a system like Albert. I will usually put this desktop file in the same location that the program files are to make it easy to find if I ever need to edit it. For example, for the case of Anaconda, the program files are found under `~/anaconda3/` so I will put the `.desktop` file there.

## Alternative: Place Files In .local Folder

An alternative to the above solution is to place the `.desktop` file under `~/.local/share/applications/` folder. This will be automatically be searched by the launchers when searching for a program, however I have had to restart Albert occasionally when it doesn't find the program.

## Other Resources

If you would like to learn more about `.desktop` files, the ArchLinux wiki has a great article. You can find out more about it here: [https://wiki.archlinux.org/index.php/desktop_entries](https://wiki.archlinux.org/index.php/desktop_entries)
