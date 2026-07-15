const { chromium } = require("playwright");

(async () => {

  const browser = await chromium.launch({
    headless: true
  });

  const page = await browser.newPage();

  await page.goto(
    "https://www.goindigo.in/careers/hiringevents/inflightservicesevents.html",
    {
      waitUntil: "domcontentloaded",
      timeout: 60000
    }
  );

  // Wait for JavaScript-rendered content
  await page.waitForTimeout(8000);

  const text = await page.locator("body").innerText();

  console.log(text);

  await browser.close();

})();
