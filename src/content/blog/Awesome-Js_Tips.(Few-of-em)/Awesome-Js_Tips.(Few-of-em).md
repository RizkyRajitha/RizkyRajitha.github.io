---
title: Awesome Js Tips.(Few of em )
slug: Awesome-Js_Tips.(Few-of-em)
publishedDate: "2019-11-26"
ogImage: "Awesome-Js_Tips.(Few-of-em).png"
description: Quick dive into two super-handy JavaScript features most devs overlook. Promise.all() for firing off multiple async tasks at once (perfect for bulk S3 uploads) and for...of loops that actually let you break early unlike forEach.
---

## Hi everyone ,

---

In this post, I'll walk you through with some awesome javascript features, that are super important in many situations.
these are fairly popular but many of us don't use them.so I will give some examples where they come in handy

## So Let's get started.

### Promise.all()

Promise.all is a very handy function when you want to make many promises and then resolve them all at once.
for example, let's say that you get 10 files from frontend and you need to upload those 10 files to an aws s3 bucket.
what you can do is make an array and push all the upload promises to that array. then call `Promise.all()` function with that promise array as the input parameter.
then it will dispatch all the promises at once and after all the promises are fulfilled it will resolve an array of objects with the fulfilled individual promises.

```js
var files = req.files;
var promisarr = [];//initialize promises array
function multiplefiles3(resobj) {
  console.log(resobj.originalname);
  var params = {
    Bucket: "******",
    Key: resobj.originalname,
    Body: resobj.buffer
  };
  return s3bucket.upload(params).promise();
}

var uploadsize = 0;
files.map(file => {
  uploadsize = uploadsize + file.size;
  promisarr.push(multiplefiles3(file));//push individual promises to that array , i'll refer them as child promises
});

Promise.all(promisarr)//evoke Promise.all() function , i'll refer this as parent promise 
  .then(result => {
      //this result is a array of objects from the fulfiled promise
  })
  .catch(err => console.log(err));//if any of those promises get reject this whole promise will be rejected

```


<span style="font-size:1.2rem ; color:#ff5420;">
keep in mind that this is all of it or none at all.
So even if one of the child promises got rejected, we will get the whole thing (parent promise) rejected.
</span>


### for (let item of array)

This is also another useful way of iterating through an array.But why we have `array.forEach()` right. But the thing is you cannot use `break` statements inside `array.forEach()` so, let's say after meeting a specific condition your `forEach` loop needs to stop. But you can't do it in `forEach` loop. That's where our friend `for (let item of array)` comes. This does exactly what `array.forEach()` do, but we get the option to `break` the `forloop` anytime we want in any breakpoint.
Of course, you can use a regular for loop for this. But this is a pretty clean way to get the job done  

```js
var arr1 = [1, 2, 3, 4];
var arr2 = [7, 8, 9, 1];

loop1: for (let element1 of arr1) {//define a breakpoint
  for (let element2 of arr2) {
    console.log(element1, " ", element2);

    if (element1 === element2) {
      console.log("duplicate numbers");
      break loop1;//if a specific condition is met , break the loop
    }
  }
}
```


#### So, did i miss anything 👀,You can leave a comment and i'll include your awesome tips in this article.And i will keep this post updated with my findings.

## Cheers 🥂 , Have a Nice day.
