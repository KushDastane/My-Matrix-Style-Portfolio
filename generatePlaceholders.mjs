import fs from "fs";
import path from "path";
import lqip from "lqip-modern";

const inputDir = process.argv[2]; //path of input image
const outputFile = process.argv[3]; //destination where i wanna save blur img

if (!inputDir || !outputFile) {
  console.log("Invalid arguments");
  process.exit(1);
}

const imgDir = path.resolve(inputDir); //absolute path of input image
const outFile = path.resolve(outputFile); //absolute path of output blur img

const files = fs.readdirSync(imgDir); //Array of non-recursively read files in folder
const result = {}; //empty object

for (const file of files) {
  const filepath = path.join(imgDir, file);
  if (!/\.(jpe?g|png|webp)$/i.test(file)) continue;

  const { metadata, content } = await lqip(filepath);

  const blurBase64 = content.toString("base64");

  result[file] = {
    width: metadata.width,
    height: metadata.height,
    blurDataURL: `data:image/${path
      .extname(file)
      .slice(1)};base64,${blurBase64}`,
  };
}

fs.writeFileSync(outFile, JSON.stringify(result, null, 2));
console.log(`Blur placeholders generated at ${outFile}`);
