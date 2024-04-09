import * as sharp from 'sharp';
import * as fs from 'fs-extra';

export const compositeImage = async (fullname: string, userId: string) => {
  const width = 3200;
  const height = 600;
  const date = new Date().getTime();
  const currentDate = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const dateStringWithMonthName = currentDate.toLocaleString(
    'default',
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    options,
  );
  const svgText = `
    <svg width="${width}" height="${height}">
      <style>
        .title { fill: #9553FF; font-size: 185px;}
      </style>
      <text x="45%" y="40%" text-anchor="middle" class="title">${fullname}</text>
    </svg>`;
  const idText = `
    <svg width="${width}" height="${height}">
      <style>
        .title { fill: #5D604B; font-size: 48px}
      </style>
      <text x="45%" y="40%" text-anchor="middle" class="title">${`Certificate serial number: undp-SCGCG-${userId}`}</text>
    </svg>`;
  const timeText = `
    <svg width="${width}" height="${height}">
      <style>
        .title { fill: #9553FF; font-size: 85px; font-style: italic}
      </style>
      <text x="45%" y="40%" text-anchor="middle" class="title">${dateStringWithMonthName}</text>
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
      { input: Buffer.from(svgText), left: 360, top: 895 },
      { input: Buffer.from(idText), left: 285, top: 2085 },
      { input: Buffer.from(timeText), left: 295, top: 1740 },
    ])
    .toFile(__dirname + `/processed_images/${date}.jpg`);
  return __dirname + `/processed_images/${date}.jpg`;
};
