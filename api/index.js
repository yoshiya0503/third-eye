/**
* @fileoverview router
* @name index.js
* @author Yoshiya Ito <myon53@gmail.com>
*/

import Express from 'express';
import V1 from './v1';

export default class API {
  constructor() {
    this.router = new Express.Router();
    const v1 = new V1();
    this.router.use('/v1', v1.router);
  }

  restful() {
    return this.router;
  }
}
