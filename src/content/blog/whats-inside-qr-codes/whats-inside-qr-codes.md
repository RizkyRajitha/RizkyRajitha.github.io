---
title: what's inside QR codes
publishedDate: "2020-03-22"
slug: whats-inside-qr-codes
description: Curious what’s really hidden inside a ShareMe QR code? I decoded one and found Base64 JSON containing phone model, MAC address, private IP, and port.
ogImage: "whats-inside-qr-codes.png"
featured: true
---

![Cover](./cover.jpg)

<p align="center" style="font-size:12px;">
 Photo by <a href="https://unsplash.com/@alesnesetril?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ales Nesetril</a> on <a href="https://unsplash.com/photos/gray-and-black-laptop-computer-on-surface-Im7lZjxeLhg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
</p>

## Hi everyone,

so recently I used [ShareMe](https://play.google.com/store/apps/details?id=com.xiaomi.midrop&hl=en) app to share some files with my friends, and there we have to read a QR code and it connects to send files.

so i was curious that what was in that QR code. it should be some information about the device so it can be recognized in the network.

![](./1_gabmcw.jpg)


To find out what is in it, I used a QR code scanner and decode it. and this is what I got.


![](./1_2_d6xbbz.jpg)


hmmm, this looks like total gibberish but,
it could make some sense when we look in a different perspective.
is this could be a base64 encoded string.

Hmmmmmmmmmmmmmmm.....👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀

so I used a base64 decoder to decode and look at what's inside. I mean this is trial and error, it may or may not be decoded but I tried it anyway, and this is the result.


![](./23_LI_ei7qbp.jpg)


here is a stringified JSON payload (i think🙄).

it decoded like a charm and it got the information about my phone model, some kind of a id and some codes that I don't understand and here also some gibberish so, what do we do to gibberish.. we put it to the base 64 decoder ain't eh? 😁😁😁

well, it will not work always but this time it did.


![](./65_LI_2_hy6qny.jpg)


here we can see some useful information such as my mac address and some flags I assume.


![](./33_lcyf91.png)


and in this payload, there goes my private IP address and I assume `8181` might be the port of this application.

so what can we get from this.well basically nothing important but staying curious will always lead us to find new problems so we can tackle with em.


![](./230925670045202_vtogrw.gif)


I tried Whatsapp QR but it didn't give me any results worth sharing but if I found something new, yall will be the first to know.

### Thanks for reading folks I'm out 🙌.
