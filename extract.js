let path = require("path");

let extractFilePath = (url)=>{
  let fileName = (url.length > 1) ? url.substring(1) : "index.html";
  let filePath = path.resolve(__dirname, "app", fileName);
  return filePath;
}

exports.extractor = extractFilePath;
