import { dev } from 'astro';
async function start() {
  console.log("Starting Astro programmatically...");
  const devServer = await dev({
    root: '.',
  });
  console.log("Astro dev server started programmatically.");
}
start().catch(err => {
  console.error(err);
  process.exit(1);
});
