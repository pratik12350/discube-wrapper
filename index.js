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

//YOUTUBE VIDEO FINDER

module.exports.videoFinder = async function ytVideoFinderEndpoint(query) {
  if(!query) throw new Error("Query Not Provided!")
  let jsonFetch = await fetch(`https://discube.gq/youtube?name=${encodeURIComponent(query)}`)
  let jsonData = await jsonFetch.json();

  return jsonData.video_url;
}