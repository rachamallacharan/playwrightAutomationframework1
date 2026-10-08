import { expect as pwExpect } from '@playwright/test';
import { test as base } from 'playwright-bdd';
import { addproducttoCart } from '../PageObjects/addproducttoCart.js';

export const test = base.extend({
  AddProduct: async ({ page }, use) => {
    const product = new addproducttoCart(page);
    await use(product);
  }
});

export const expect = pwExpect;
