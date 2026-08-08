import puppeteer from 'puppeteer-core';
import { mkdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outputDir = join(__dirname, '..', 'src', 'assets', 'screenshots');

const projects = [
  { slug: 'educacore', url: 'https://educacion.lexicorelabssystem.cl/' },
  { slug: 'inventacore', url: 'https://inventario.lexicorelabssystem.cl/' },
  { slug: 'inventacore-subsecretaria-ninez', url: 'https://www.inventacoresubsecretariadelaninez.cl/' },
  { slug: 'andacollo-te-encanta', url: 'https://andacolloteencanta.cl/' },
  { slug: 'ama-maule', url: 'https://amamaule.cl/' },
  { slug: 'escuela-standard-temuco', url: 'https://www.standard-temuco.cl/' },
  { slug: 'lpnso', url: 'https://lpnso.cl/' },
  { slug: 'portones-castro', url: 'https://portones-castro-landing.vercel.app/' },
];

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function capture() {
  await mkdir(outputDir, { recursive: true });

  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });

    for (const project of projects) {
      try {
        console.log(`Capturing ${project.slug}...`);
        await page.goto(project.url, { waitUntil: 'networkidle2', timeout: 30000 });
        await new Promise((resolve) => setTimeout(resolve, 1500));

        const outputPath = join(outputDir, `${project.slug}.jpg`);
        await page.screenshot({ path: outputPath, type: 'jpeg', quality: 85, fullPage: false });
        console.log(`  Saved ${outputPath}`);
      } catch (error) {
        console.error(`  Failed to capture ${project.slug}:`, error.message);
      }
    }
  } finally {
    await browser.close();
  }
}

capture().catch((error) => {
  console.error(error);
  process.exit(1);
});
