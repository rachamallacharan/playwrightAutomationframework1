import { test, expect } from '@playwright/test';

test.skip('handle page',async({page})=>{
    await page.goto('https://www.flipkart.com/');
     await page.waitForURL('https://www.flipkart.com/');
   await page.locator("span[role='button']").click();
   const element = await page.locator("//a[text()='Login']");
   await element.hover();
   await page.waitForTimeout(10000);
  await page.getByText('Fashion', { exact: true }).click();
  await page.getByText('Shirts',{ exact: true }).click();



});

test.skip('handle dresses',async({page})=>{
 await page.goto('https://www.flipkart.com/');
     await page.waitForURL('https://www.flipkart.com/');
   await page.locator("span[role='button']").click();
   const element = await page.locator("//a[text()='Login']");
   await element.hover();
   await page.waitForTimeout(10000);
   
    
});