const axios = require('axios')
const base64Img = require('base64-img');
const fs = require('fs')


async function getImage(imgUrl){
  return axios.get(imgUrl, {responseType: 'arraybuffer'})
}

async function saveImg(buffer, fileName){
  fs.writeFile(`${fileName}.jpg`, buffer, (err)=>{})
}

module.exports = {
  "getImage": getImage,
  "saveImg": saveImg
}