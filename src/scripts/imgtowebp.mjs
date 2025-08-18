import { error } from "console";
import fs from "fs";
import path from "path";
import sharp from "sharp";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const targetDir = process.argv[2];

if (!targetDir) {
  console.log("Uh-oh! Folder doesnt exist.");
  process.exit(1);
}

const fullPath = path.resolve(process.cwd(), targetDir); //This is absolute path

if (!fs.existsSync(fullPath)) {
  process.exit(1);
}

fs.readdirSync(fullPath).forEach((file) => {
  const ext = path.extname(file).toLowerCase();
  const basename = path.basename(file, ext);

  if ([".jpg", ".jpeg", ".png"].includes(ext)) {
    const inputPath = path.join(fullPath, file);
    const outputPath = path.join(fullPath, `${basename}.webp`);

    sharp(inputPath)
      .webp({ quality: 90 })
      .toFile(outputPath)
      .then(() => {
        console.log(`CONVERTED ${file}->${basename}.webp`);
      })
      .catch((error) => {
        console.log(`Error converting ${file}:`, error);
      });
  }
});
