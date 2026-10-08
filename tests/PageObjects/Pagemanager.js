import { login } from './login.js';

export class Pagemanager {

  constructor(page) {
    this.page = page;

  }

  signinpage() {

    return new login(this.page);
  }










}