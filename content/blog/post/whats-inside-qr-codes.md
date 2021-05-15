---
title: what's inside QR codes
id: 5e778f9c61c45300170c04a9
date: "2020-03-22T16:17:32.442Z"
ogimage: "whats-inside-qr-codes.png"
---

## Hi everyone ,

---

<span style="font-size:1.28rem;">

so recently I used [ShareMe](https://play.google.com/store/apps/details?id=com.xiaomi.midrop&hl=en) app to share some files with my friends, and there we have to read a QR code and it connects to send files.

so i was curious that what was in that QR code. it should be some information about the device so it can be recognized in the network.

---

<img src="1_gabmcw.jpg" alt="create new bot" style="width:100%;"/>

---

To find out what is in it, I used a QR code scanner and decode it. and this is what I got.

---

<img src="1_2_d6xbbz.jpg" alt="create new bot" style="width:100%;"/>

---

hmmm, this looks like total gibberish but,
it could make some sense when we look in a different perspective.
is this could be a base64 encoded string.

Hmmmmmmmmmmmmmmm.....👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀

so I used a base64 decoder to decode and look at what's inside. I mean this is trial and error, it may or may not be decoded but I tried it anyway, and this is the result.

---

<img src="23_LI_ei7qbp.jpg" alt="create new bot" style="width:100%;"/>

---

here is a stringified JSON payload (i think🙄).

it decoded like a charm and it got the information about my phone model, some kind of a id and some codes that I don't understand and here also some gibberish so, what do we do to gibrish.. we put the to base 64 decodes ain't eh? 😁😁😁

well, it will not work always but this time it did.

---

<img src="65_LI_2_hy6qny.jpg" alt="create new bot" style="width:100%;"/>

---

here we can see some useful information such as my mac address and some flags I assume.

---

<img src="33_lcyf91.png" alt="create new bot" style="width:100%;"/>

---

and in this payload, there goes my private IP address and I assume `8181` might be the port of this application.

so what can we get from this.well basically nothing important but staying curious will always lead us to find new problems so we can tackel with em.

---

<img src="230925670045202_vtogrw.gif" alt="create new bot" style="width:100%;"/>

---

I tried Whatsapp QR but it didn't give me any results worth sharing but if I found something new, yall will be the first to know.
<br/><br/><br/>
Thanks for reading folks I'm out 🙌.

</span>
