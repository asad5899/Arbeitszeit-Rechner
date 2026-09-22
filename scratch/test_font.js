import sharp from 'sharp';

async function run() {
  const svg = `
    <svg width="600" height="200" xmlns="http://www.w3.org/2000/svg">
      <rect width="600" height="200" fill="#ffffff" />
      <text x="30" y="50" font-family="system-ui, sans-serif" font-size="24">system-ui: Das ist ein Test für Arbeitszeit</text>
      <text x="30" y="100" font-family="Arial, sans-serif" font-size="24">Arial: Das ist ein Test für Arbeitszeit</text>
      <text x="30" y="150" font-family="'Segoe UI', Arial, sans-serif" font-size="24">Segoe UI: Das ist ein Test für Arbeitszeit</text>
    </svg>
  `;
  await sharp(Buffer.from(svg)).png().toFile('scratch/test_font.png');
  console.log('Saved scratch/test_font.png');
}
run();
