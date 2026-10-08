import { createBdd } from 'playwright-bdd';
import { test } from '../Fixtures/fixtures.js';

const { Given, When, Then } = createBdd(test);

Given('User opens application|User launches application', async ({ page }) => {
  await page.goto('/login');
});

When('User inputs applications username of {string} and password of {string}|User enters application {string} and {string}', async ({ page }) => {
  await page.getByPlaceholder('Username').fill(process.env.USERNAME);
  await page.getByPlaceholder('Password').fill(process.env.PASSWORD);
});

When('click on signin button|click on login button', async ({ page }) => {
  await page.locator('#login-button').click();
});

Given('user redirected to homepage', async ({ AddProduct }) => {
  const titlepagerecord = await AddProduct.titlepage();
  console.log(titlepagerecord);
});

When('user added product to cart', async ({ AddProduct }) => {
  await AddProduct.productclick();
});

Then('user clicks on cart icon', async ({ AddProduct }) => {
  await AddProduct.carticonclick();
});
