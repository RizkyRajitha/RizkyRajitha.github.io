---
title : Intro to my home lab setup
slug: intro-to-my-home-lab-setup
publishedDate : "2026-04-08"
description : Quick introduction to my current homelab setup
ogImage: "intro-to-my-home-lab-setup.png"
---

![Cover](./cover.jpg)

<p align="center" style="font-size:12px;">
Photo by <a href="https://unsplash.com/@abbe_sublett?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Abbe Sublett</a> on <a href="https://unsplash.com/photos/low-angle-view-high-rise-buildings-nxZDMUQhN4o?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
</p>

## Hi Everyone,

So it's been a while since I shared anything about my home lab setup. I mentioned it briefly in an earlier post but nothing specific.

It all started around 2023 as a single standalone server running [Ubuntu Server](https://ubuntu.com/server). That setup was working great on its own. Then I got to know about [Proxmox](https://www.proxmox.com/), a hypervisor, it lets you run multiple VMs + container on one physical box. I tried it out and it did work great.

The server itself is pretty modest the one I picked up for about 35k LKR a couple of years back with an Intel Core i5 4th-gen CPU and 8 GB of memory. Even with those specs I was able to run multiple VMs without too many issues.

The biggest pain was disk space. Because of thin provisioning I kept over-committing and suddenly things would get out of hand. It was annoying but totally fixable, and honestly, whats the fun in homelabbing without a good problem to solve?

These days my main server runs everything through [Docker Compose](https://docs.docker.com/compose/) and is bootstrapped with [Ansible](https://www.ansible.com/). It keeps things clean and repeatable, what ansible is best at.

Honorable mentions go to my absolute favorites [Jellyfin](https://jellyfin.org/) media server and [Home Assistant](https://www.home-assistant.io/) honestly one of the best pieces of software Ive ever used. Ive only set up a few automations so far (not many yet… *evil laugh*), but they are small quality of life improvements that you really notice when they stop working.

Then theres my beautiful data-visualization stack [Grafana](https://grafana.com/), [Prometheus](https://prometheus.io/), and [InfluxDB](https://www.influxdata.com/) as the time-series database. I also use [NocoDB](https://nocodb.com/) to store some random data and automations I exported from [Airtable](https://airtable.com/) years ago. For quick little internal UIs that I got bored building myself, [Tooljet](https://www.tooljet.com/) has been a lifesaver.

There goes most of it. Not all those lives on the same box. I do have few servers one main Ubuntu machine handling the some integral stuff and another [Rocky Linux](https://rockylinux.org/) box for rest of the workloads. Also there is a separate postgres database on ubuntu for all the application needs.

Home Assistant gets her own dedicated VM because its just easier for deployment and with [HACS](https://www.hacs.xyz/) integrations and all.

The Home Assistant and monitoring setup deserve their own posts, which I will write. Just not yet.

Anyway, thats pretty much the current state of my partial homelab.

Thanks for reading so far.

### Cheers 🥂, have a nice day.