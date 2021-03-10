const fs = require("fs")
const path = require("path")
const axios = require("axios")

const filePrefix = "./content/blog/"

const blogNumber = 6
axios
  .get("https://blogrizky.herokuapp.com/api/getposts")
  .then(blogData => {
    console.log(blogData.data[blogNumber].url)

    axios
      .get(blogData.data[blogNumber].url)
      .then(blogPostStr => {
        let fileStr = String(blogPostStr.data)

        console.log(fileStr)

        let re = /!\[[^\]]*\]\((.*?)\s*("(?:.*[^"])")?\s*\)/g

        let reSrc = /src\s*=\s*"(.+?)"/g

        let regexout2 = fileStr.match(reSrc)

        let urlArr = []

        while ((match = reSrc.exec(fileStr))) {
          console.log(match.index + " " + reSrc.lastIndex)

          console.log(reSrc)

          let temp = {
            url: fileStr.slice(match.index + 5, reSrc.lastIndex - 1),
            startIndex: match.index,
            endIndex: reSrc.lastIndex,
          }
          console.log(temp)
          urlArr.push(temp)
        }
        console.log(regexout2)
        console.log(match)
        console.log(urlArr)
        console.log(urlArr.length)
        fs.mkdirSync(filePrefix + blogData.data[blogNumber]._id)
        if (urlArr.length) {
          console.log(urlArr[0].url.split("/").reverse()[0])

          let promiseArr = []
          let newImgName = []
          urlArr.forEach(element => {
            let newName = element.url.split("/").reverse()[0]
            promiseArr.push(
              downloadImage(
                element.url,
                `${filePrefix}${blogData.data[blogNumber]._id}/` + newName
              )
            )
            newImgName.push(newName)
            // promiseArr.push(
            //   axios({
            //     method: "get",
            //     url: element.url,
            //     responseType: "stream",
            //   })
            // )
          })

          Promise.all(promiseArr)
            .then(result => {
              console.log(result)
              // result.forEach(element => {
              //   let newName = urlArr[i].url.split("/").reverse()[0]
              //   newImgName.push(newName)
              //   element.data.pipe(
              //     fs.createWriteStream(
              //       `${filePrefix}${blogData.data[blogNumber]._id}/` + newName
              //     )
              //   )
              //   i = i + 1
              // })

              let j = 0
              urlArr.forEach(imgs => {
                fileStr = fileStr.replace(imgs.url, newImgName[j])
                j = j + 1
              })
              //  description : "Hello World${blogData.data[blogNumber].description}"
              var blogPostHeader = `---
    title : ${blogData.data[blogNumber].title}
    id : ${blogData.data[blogNumber]._id}
    date : "${blogData.data[blogNumber].date}"
---\n`

              fs.writeFileSync(
                `${filePrefix}${blogData.data[blogNumber]._id}/index.md`,
                blogPostHeader + fileStr
              )
              console.log("donezo")
            })
            .catch(err => {
              console.log(err)
            })
        } else {
          console.log("no url found")
          var blogPostHeader = `---
          title : ${blogData.data[blogNumber].title}
          id : ${blogData.data[blogNumber]._id}
          date : "${blogData.data[blogNumber].date}"
---\n`

          fs.writeFileSync(
            `${filePrefix}${blogData.data[blogNumber]._id}/index.md`,
            blogPostHeader + fileStr
          )
          console.log("donezo")
        }
      })
      .catch(err => {
        console.log(err)
      })
  })
  .catch(err => {
    console.log(err)
  })
async function downloadImage(url, path) {
  //const url = 'https://unsplash.com/photos/AaEQmoufHLk/download?force=true'
  //const path = Path.resolve(__dirname, 'images', 'code.jpg')
  const writer = fs.createWriteStream(path)

  const response = await axios({
    url,
    method: "GET",
    responseType: "stream",
  })

  response.data.pipe(writer)

  return new Promise((resolve, reject) => {
    writer.on("finish", resolve)
    writer.on("error", reject)
  })
}

// let file = fs.readFileSync("./test.md");

// let fileStr = String(file);

// // console.log(fileStr);

// let re = /!\[[^\]]*\]\((.*?)\s*("(?:.*[^"])")?\s*\)/g;

// let reSrc = /src\s*=\s*"(.+?)"/g;

// let regexout2 = fileStr.match(reSrc);

// let urlArr = [];

// while ((match = reSrc.exec(fileStr))) {
//   console.log(match.index + " " + reSrc.lastIndex);

//   console.log(reSrc);

//   let temp = {
//     url: fileStr.slice(match.index + 5, reSrc.lastIndex - 1),
//     startIndex: match.index,
//     endIndex: reSrc.lastIndex,
//   };
//   console.log(temp);
//   urlArr.push(temp);
// }
// console.log(regexout2);
// console.log(match);
// console.log(urlArr);

// console.log(urlArr[0].url.split("/").reverse()[0]);

// let promiseArr = [];

// urlArr.forEach((element) => {
//   promiseArr.push(
//     axios({
//       method: "get",
//       url: element.url,
//       responseType: "stream",
//     })
//   );
// });

// let newImgName = [];

// Promise.all(promiseArr)
//   .then((result) => {
//     let i = 0;
//     result.forEach((element) => {
//       let newName = urlArr[i].url.split("/").reverse()[0];
//       newImgName.push(newName);
//       element.data.pipe(fs.createWriteStream("./" + newName));
//       i = i + 1;
//     });

//     let j = 0;
//     urlArr.forEach((imgs) => {
//       fileStr = fileStr.replace(imgs.url, newImgName[j]);
//       j = j + 1;
//     });

//     fs.writeFileSync("./test1.md", fileStr);
//     console.log("donezo");
//   })
//   .catch((err) => {
//     console.log(err);
//   });
