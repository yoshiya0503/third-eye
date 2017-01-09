/**
* @fileoverview v1
* @name index.js
* @author Yoshiya Ito <myon53@gmail.com>
*/
import Express from 'express';
import Twitter from './twitter';
import Home from './home';

export default class V1 {
  constructor() {
    this.router = new Express.Router();
    this.router.get('/twitter', Twitter.index);
    this.router.get('/home', Home.index);
  }
}
