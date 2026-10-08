import { test, expect } from '@playwright/test';
import {POmanager} from '../../pageobjects/POmanager.js';

const url = 'https://automationexercise.com/login';

test.skip('handle page',async({page})=>{
    await page.goto(url);
   await page.getByText('Signup / Login', { exact: true }).click();
   const pomanager = new POmanager(page);
   const loginpage = await pomanager.pageforlogin();
   await loginpage.enterUserandPassword('charanroyaleee@gmail.com' , 'Charan@205');
   const cartpage = await pomanager.pageforaddcart();
   await cartpage.selectproducts('Lace Top For Women');
   await cartpage.cartaddedpage();
   const checkoutpage = pomanager.productdetails();
   await page.waitForTimeout(5000);
   await checkoutpage.detailspage();


   

})
