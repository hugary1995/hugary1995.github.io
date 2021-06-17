const fs = require("fs");
const sr = require("seedrandom");
const sizeOf = require("image-size");
const dir = "/gallery";
const srcdir = "public" + dir;

function shuffle(array) {
  var currentIndex = array.length,
    randomIndex;

  var myrng = sr("seed");

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(myrng() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

const files = fs.readdirSync(srcdir);
shuffle(files);

var stream = fs.createWriteStream("src/components/gallery/photos.js");
stream.write("export const photos = [\n");

for (const file of files) {
  const dimensions = sizeOf(srcdir + "/" + file);
  stream.write("{\n");
  stream.write("src: '" + dir + "/" + file + "',\n");
  stream.write("width: " + dimensions.width + ",\n");
  stream.write("height: " + dimensions.height + "\n");
  stream.write("},\n");
}

stream.write("];");
stream.end();
