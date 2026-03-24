---
title: Heroku Gotchas, Before you deploy
slug: Heroku-Gotchas-Before-you-deploy
publishedDate: "2019-11-10T17:13:22.756Z"
description: Few things you need to know before pushing to Heroku. Free dynos that sleep after 30 minutes, ephemeral filesystem, and why you should never trust local storage.
ogImage: "Heroku-Gotchas-Before-you-deploy.png"
---

![Cover](./cover.jpg)

<p align="center" style="font-size:12px;">
Photo by <a href="https://unsplash.com/@bruno_kelzer?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Bruno Kelzer</a> on <a href="https://unsplash.com/photos/closed-elevator-dendZhhfkTc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
</p>

## Hi everyone ,

I'm pretty sure that you have heard about ,
[Heroku](https://www.heroku.com/) .
if not don't worry ,i got you covered. Heroku is a popular cloud PaaS(Platform as a service), which deliver awesome cloud solutions. Sounds cool right .


![Heroku logo](7jqmr55jkd2uk4ztitem.png)


## So let's get start 🤗 ,

## but wait ✋, before you go and deploy your awesome apps in Heroku, you need to keep in mind few things.

## what exactly is a heroku dyno?


usually when you host a web app in heroku , your app will run on a Heroku dyno.
dyno is a fancy name for container , where our app live but what is a container ? Hmmmmmmmmm.... that's a good question .

"A container is a standard unit of software that packages up code and all its dependencies so the application runs quickly and reliably from one computing environment to another" -- [ docker resources ](https://www.docker.com/resources/what-container)

Just think of it as a virtual machine, that it's only job is to run our application, but very fast and efficient than a virtual machine. Also containers share much more resources than a virtual machine.

So when you deploy your web app, Heroku will create a container and the it will copy all your code-base to that container, and then install all necessary dependencies, and run your application.

Container's need their own article, because it is a huge topic. So i will not going to touch it now. But feel free to research on containers because it is a trending, and very very interesting topic.

### let's start with gotchas👇



1. Heroku **"free tier"** dynos(now you have a little idea about it) are going to sleep state, in 30 minutes of inactivity.
   inactivity meaning that, if your app doesn't get any traffic in 30 minutes, it will go to a sleep state. After that next request will take some time (usually around 5-20 seconds based on the application) to respond to that request because your application have to change state from sleep to active, but after that everything will function normally until the next restart.  
   There are some ways to prevent this sleep.
   one way is, using [uptime robot](https://uptimerobot.com/) to send requests periodically so your dyno won't sleep. But keep in mind that heroku **"Free tier "** gives you 550 free hours per month, so you might run out of free hours. --[heroku blog](https://devcenter.heroku.com/changelog-items/907) .
   But you can bump up to 1000 free hours, by adding a credit card . Meaning that you can run a single app 24/7 for ever 😍.

2. Heroku dynos have a ephemeral filesystem, meaning that "any changes to the filesystem whilst the dyno is running only last until that dyno is shut down or restarted. Each dyno boots with a clean copy of the filesystem from the most recent deploy" -- [ Heroku resources ](https://help.heroku.com/K1PPS2WM/why-are-my-file-uploads-missing-deleted) .
   This basically says in plain English is that, if you save files to your servers file system , and directly serve files from that directory, the moment your dyno gets restarted, you'll loose those files.
   for example, let's say that you save users profile picture in `/assests/profilepictures` directory. This will not work as expected , after a server restart , and will throw errors because required files are missing.
   A simple example of above situation in a code snippet in NodeJs.
   `app.use("/static", express.static("./assets/profilepictures"));`
   So what should you do to keep a persistent file storage.
   What i recommend and doing is , using a static file storage service like [AWS S3](https://aws.amazon.com/s3/) or [Cloudinary](https://cloudinary.com/) to manage all the static assets. This will make your web app more flexible and resilient to change in the future because the static assets are isolated from your app environment.

#### Fact : Did you knew that Heroku is build on top of AWS 🔥.


#### So, did I miss anything, You can leave a comment and I'll include in this article? And I will update this article frequently with new gotchas, so keep in touch 😉.


## Cheers 🥂 , Have a Nice day.
