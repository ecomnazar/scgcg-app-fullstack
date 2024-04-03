import * as sharp from 'sharp';
import * as fs from 'fs-extra';

export const compositeImage = async (fullname: string, userId: string) => {
  const width = 600;
  const height = 600;
  const date = new Date().getTime();
  const svgText = `
    <svg width="${width}" height="${height}">
      <style>
        .title { fill: #5D604B; font-size: 35px}
      </style>
      <text x="45%" y="40%" text-anchor="middle" class="title">${fullname}</text>
    </svg>`;
  const idText = `
    <svg width="${width}" height="${height}">
      <style>
        .title { fill: #5D604B; font-size: 35px}
      </style>
      <text x="45%" y="40%" text-anchor="middle" class="title">${userId}</text>
    </svg>`;

  const folderPath = __dirname + '/processed_images';
  // create folder
  try {
    // Check if the directory exists
    const exists = await fs.pathExists(folderPath);
    if (!exists) {
      // Create the directory if it doesn't exist
      await fs.mkdirp(folderPath);
      console.log(`Directory created: ${folderPath}`);
    } else {
      console.log(`Directory already exists: ${folderPath}`);
    }
  } catch (error) {
    // Handle errors, such as permission issues
    console.error(`Error occurred while creating directory: ${error}`);
    throw error;
  }

  sharp('./certificate.jpg')
    .composite([
      { input: Buffer.from(svgText), left: 180, top: 65 },
      { input: Buffer.from(idText), left: 180, top: 165 },
    ])
    .toFile(__dirname + `/processed_images/${date}.jpg`);
  return __dirname + `/processed_images/${date}.jpg`;
};
