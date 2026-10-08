
export class addcartpage{

    constructor(page){
        this.page = page;
        this.products = page.locator(".features_items .product-image-wrapper .single-products");
        this.viewcart = page.locator('u:has-text("View Cart")');
        this.proceedbutton = page.getByText('Proceed To Checkout', { exact: true });
    }

   async selectproducts(product){
    
  const productcount = await this.products.count();

    for(let i=0 ; i<productcount; i++) 
    {
       
       const eachitem = this.products.nth(i);
       const productname =  eachitem.locator("p").nth(1);
       const text = await productname.textContent();
      if(text?.includes(product)) {
        const cartbutton = eachitem.locator("//i[@class='fa fa-shopping-cart']").nth(0);
        await cartbutton.click({ force: true });
        break;

    }
}
   }

async cartaddedpage() {
    await this.viewcart.waitFor();
   await this.viewcart.click({ force: true });
}

async proceeding(){
    await this.proceedbutton.waitFor();
    await this.proceedbutton.click({ force: true })
}


}