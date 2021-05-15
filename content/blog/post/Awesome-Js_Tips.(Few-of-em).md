---
title: Awesome Js Tips.(Few of em )
id: 5ddd5b35e8da2700179c3d4e
date: "2019-11-26T17:04:53.713Z"
ogimage: "Awesome-Js_Tips.(Few-of-em).png"
---

## Hi everyone ,

---

<span style="font-size:1.28rem;">
In this post, I'll walk you through with some awesome javascript features, that are super important in many situations.
these are fairly popular but many of us don't use them.so I will give some examples where they come in handy

## So Let's get started.

1. Promise.all()
   <br/>
   Promise.all is a very handy function when you want to make many promises and then resolve them all at once.
   for example, let's say that you get 10 files from frontend and you need to upload those 10 files to an aws s3 bucket.
   what you can do is make an array and push all the upload promises to that array. then call `Promise.all()` function with that promise array as the input parameter.
   then it will dispatch all the promises at once and after all the promises are fulfilled it will resolve an array of objects with the fulfilled individual promises.
   `gist:RizkyRajitha/721ce1f1e8f6ed0a9f368c3de821a3da`
   <span style="font-size:1.6rem ; color:red;">
   keep in mind that this is all of it or none at all.
   So even if one of the child promises got rejected, we will get the whole thing (parent promise) rejected.
   </span>

---

1. for (let item of array)
   <br/>
   This is also another useful way of iterating through an array.But why we have `array.forEach()` right. But the thing is you cannot use `break` statements inside `array.forEach()` so, let's say after meeting a specific condition your `forEach` loop needs to stop. But you can't do it in `forEach` loop. That's where our friend `for (let item of array)` comes. This does exactly what `array.forEach()` do, but we get the option to `break` the `forloop` anytime we want in any breakpoint.
   Of course, you can use a regular for loop for this. But this is a pretty clean way to get the job done  
   `gist:RizkyRajitha/ef461d86fc6116f066fa694d2af5bf08`

</span>

## So, did i miss anything 👀,You can leave a comment and i'll include your awesome tips in this article.And i will keep this post updated with my findings.

## Cheers 🥂 , Have a Nice day.
