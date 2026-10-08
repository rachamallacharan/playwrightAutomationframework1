
export class addproducttoCart{

     

     constructor(page) {
        this.page = page;
        this.productselect = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')
        this.carticon = page.locator(".shopping_cart_link");

     }

     async titlepage(){
    const titlepagerecord = await this.page.title();
        return titlepagerecord;

     }
     async productclick() {
        await this.productselect.click();
     }

     async carticonclick(){
       await this.carticon.click();
     }
}