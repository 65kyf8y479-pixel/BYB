const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', err => console.error('PAGE ERROR on', page.url(), ':', err.stack || err.message));
  
  const routes = ['/', '/design', '/dashboard', '/checkout', '/blueprint'];
  for (const route of routes) {
      console.log("Visiting", route);
      try {
        await page.goto(`http://localhost:3000${route}`, { waitUntil: 'load', timeout: 5000 });
        // wait a little bit for React to render
        await new Promise(r => setTimeout(r, 1000));
      } catch(e) {
        console.error("error going to", route, e.message);
      }
  }
  await browser.close();
  console.log("Done checking routes.");
})();
