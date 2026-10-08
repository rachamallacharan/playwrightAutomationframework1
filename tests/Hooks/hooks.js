import { createBdd } from 'playwright-bdd';
import { test } from '../Fixtures/fixtures.js';

const { Before, After } = createBdd(test);

Before(async({page})=>{

    await page.context().clearCookies();


});

After(async ({ page, $testInfo }) => {

    if ($testInfo.status !== $testInfo.expectedStatus) {

        await page.screenshot({
            path: `screenshots/${$testInfo.title}.png`,
            fullPage: true
      });
    }
    


});

