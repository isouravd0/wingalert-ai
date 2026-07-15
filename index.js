const { chromium } = require("playwright");

(async () => {

  const browser = await chromium.launch({
    headless: true
  });

  const page = await browser.newPage();

  await page.goto(
    "https://www.goindigo.in/careers/hiringevents/inflightservicesevents.html",
    {
      waitUntil: "networkidle",
      timeout: 60000
    }
  );

  console.log("Title:");
  console.log(await page.title());

  console.log("URL:");
  console.log(page.url());

  await browser.close();

})();
