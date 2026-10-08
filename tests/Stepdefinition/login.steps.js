
//import {readFileSync} from 'node:fs';
import { createBdd } from 'playwright-bdd';
import { Pagemanager } from '../PageObjects/Pagemanager.js';
import jsondata from '../testData1.json' with { type: 'json' };

const { Given, When, Then } = createBdd();
let pm;
let login;

//const jsondata = JSON.parse(
 // readFileSync(new URL('../testData1.json', import.meta.url), 'utf8')
//);




Given('User launches application', async ({ page }) => {
  pm = new Pagemanager(page);
  login = pm.signinpage();
  await page.waitForTimeout(3000);
  await login.navigateto(jsondata.url);


});

When('User enters application {string} and {string}', async ({ page }, username, password) => {
  await login.fulluserdetails(username, password);

});

When('click on login button', async ({ page }) => {

  await login.loginclick();

});

Then('user should be navigated to homepage', async ({ page }) => {
  await login.titledisplay();

});
