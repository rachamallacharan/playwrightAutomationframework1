import {loginpage} from './loginpage';
import { addcartpage } from './addcartpage';
import {checkoutpage} from './checkoutpage';

export class POmanager{

    constructor(page){
        this.page = page;
       
    }

    async pageforlogin(){
        return new loginpage(this.page);
    }
 
    async pageforaddcart(){
        return new addcartpage(this.page);
    }

    async productdetails() {
        return new checkoutpage(this.page);
    }
} 