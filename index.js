const fetch = require("node-fetch");
const baseURL = "https://discube.gq"

//MEME

module.exports = async function meme() {
  let meme = `${baseURL}/meme`;
  return meme;
}

