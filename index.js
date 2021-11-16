const fetch = require("node-fetch");
const baseURL = "https://discube.gq"

//MEME

module.exports.meme = async function meme() {
  let meme = `${baseURL}/meme`;
  return meme;
}

//SCREENSHOT 

module.exports.screenshot = async function screenshot(url) {
  if(!url) throw new TypeError("Url Is Not Provided!")
  let ss = `${baseURL}/screenshot?url=${encodeURIComponent(url)}`
  return ss;
}