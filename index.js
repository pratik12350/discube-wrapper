const fetch = require("node-fetch");
const baseURL = "https://discube.gq"

//MEME

module.exports.meme = async function meme() {
  let meme = `${baseURL}/meme`;
  return meme;
}

