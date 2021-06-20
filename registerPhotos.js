const fs = require("fs");
const sr = require("seedrandom");
const sizeOf = require("image-size");
const sharp = require("sharp");

const dir = "/gallery";
const dir_4x = dir + "/original";
const dir_3x = dir + "/3x";
const dir_2x = dir + "/2x";
const dir_1x = dir + "/1x";
const srcdir_4x = "public" + dir_4x;
const srcdir_3x = "public" + dir_3x;
const srcdir_2x = "public" + dir_2x;
const srcdir_1x = "public" + dir_1x;

if (fs.existsSync(srcdir_3x)) {
  fs.rmSync(srcdir_3x, { recursive: true });
}
if (fs.existsSync(srcdir_2x)) {
  fs.rmSync(srcdir_2x, { recursive: true });
}
if (fs.existsSync(srcdir_1x)) {
  fs.rmSync(srcdir_1x, { recursive: true });
}
fs.mkdirSync(srcdir_3x);
fs.mkdirSync(srcdir_2x);
fs.mkdirSync(srcdir_1x);

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

const files = fs.readdirSync(srcdir_4x);
shuffle(files);

var stream = fs.createWriteStream("src/components/gallery/photos.js");
stream.write("export const photos = [\n");

for (const file of files) {
  stream.write("{\n");
  const dimensions = sizeOf(srcdir_4x + "/" + file);
  stream.write("src: '" + dir_4x + "/" + file + "',\n");

  stream.write("srcSet: [\n");

  // 1x
  sharp(srcdir_4x + "/" + file)
    .resize(
      Math.ceil(dimensions.width * 0.25),
      Math.ceil(dimensions.height * 0.25)
    )
    .toFile(srcdir_1x + "/" + file, (err, info) => {
      if (err) console.log(err);
      console.log("registered image (1x) " + file);
    });

  // 2x
  sharp(srcdir_4x + "/" + file)
    .resize(
      Math.ceil(dimensions.width * 0.5),
      Math.ceil(dimensions.height * 0.5)
    )
    .toFile(srcdir_2x + "/" + file, (err, info) => {
      if (err) console.log(err);
      console.log("registered image (2x) " + file);
    });

  // 3x
  sharp(srcdir_4x + "/" + file)
    .resize(
      Math.ceil(dimensions.width * 0.75),
      Math.ceil(dimensions.height * 0.75)
    )
    .toFile(srcdir_3x + "/" + file, (err, info) => {
      if (err) console.log(err);
      console.log("registered image (3x) " + file);
    });

  // 1x
  stream.write(
    "'" +
      dir_1x +
      "/" +
      file +
      " " +
      Math.ceil(dimensions.width * 0.25) +
      "w',\n"
  );
  // 2x
  stream.write(
    "'" +
      dir_2x +
      "/" +
      file +
      " " +
      Math.ceil(dimensions.width * 0.5) +
      "w',\n"
  );
  // 3x
  stream.write(
    "'" +
      dir_3x +
      "/" +
      file +
      " " +
      Math.ceil(dimensions.width * 0.75) +
      "w',\n"
  );
  // 4x
  stream.write("'" + dir_4x + "/" + file + " " + dimensions.width + "w'\n");

  stream.write("],\n");

  stream.write(
    "sizes: ['(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw'],\n"
  );

  stream.write("width: " + dimensions.width + ",\n");
  stream.write("height: " + dimensions.height + ",\n");
  stream.write("},\n");
}

stream.write("];");
stream.end();
