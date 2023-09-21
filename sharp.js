const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const target = path.resolve(__dirname, 'src/public/images/heros');
const destination = path.resolve(__dirname, 'src/public/images/hero-image');

if (!fs.existsSync(destination)) {
  fs.mkdirSync(destination);
}

fs.readdirSync(target)
    .forEach((image) => {
    // resize images with width 800px, with prefix -large.jpg
      sharp(`${target}/${image}`)
          .resize(800)
          .toFile(path.resolve(
              __dirname,
              `${destination}/${image.split('.').slice(0, -1).join('.')}-large.jpg`,
          ));

      // resize images with width 480px, with prefix -small.jpg
      sharp(`${target}/${image}`)
          .resize(480)
          .toFile(path.resolve(
              __dirname,
              `${destination}/${image.split('.').slice(0, -1).join('.')}-small.jpg`,
          ));
    });
