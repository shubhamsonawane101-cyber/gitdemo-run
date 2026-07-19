const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  page.on('dialog', async dialog => {
    console.log('DIALOG:', dialog.message());
    await dialog.accept();
  });
  await page.goto('https://www.demoblaze.com/');
  await page.click('#login2');
  await page.fill('#loginusername', 'pavnol');
  await page.fill('#loginpassword', 'test@123');
  await page.click('button:has-text("Log in")');
  await page.waitForTimeout(3000);
  await page.click('a:has-text("Samsung galaxy s6")');
  await page.click('a:has-text("Add to cart")');
  await page.waitForTimeout(5000);
  await browser.close();
})();
