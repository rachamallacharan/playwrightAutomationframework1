export class checkoutpage {

    constructor(page){
        this.page = page;
        this.productadded = this.locator("//a[@href='/product_details/1']");
        this.price = this .locator("//p[@class='cart_total_price']");
        this.proceedtocheckout = page.getByText('Proceed To Checkout', { exact: true });

    }
    async detailspage(){
       
        const productadded = this.productadded.textcontent();
        console.log(productadded);

        const pricetext = this.price.textcontent();
        console.log(pricetext);

        this.proceedtocheckout.click();







    }

}
