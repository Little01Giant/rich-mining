
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = 'public/images';
const imagesToResize = ['hero-truck.jpg', 'mining-site.jpg'];

async function resizeImages() {
    for (const image of imagesToResize) {
        const inputPath = path.join(imagesDir, image);
        const tempPath = path.join(imagesDir, `temp-${image}`);

        try {
            console.log(`Resizing ${image}...`);
            await sharp(inputPath)
                .resize({ width: 1920, withoutEnlargement: true })
                .jpeg({ quality: 80, mozjpeg: true })
                .toFile(tempPath);

            // Replace original with resized
            fs.unlinkSync(inputPath);
            fs.renameSync(tempPath, inputPath);

            console.log(`Successfully resized ${image}`);
        } catch (error) {
            console.error(`Error resizing ${image}:`, error);
            if (fs.existsSync(tempPath)) {
                fs.unlinkSync(tempPath);
            }
        }
    }
}

resizeImages();
