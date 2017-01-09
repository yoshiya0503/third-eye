/**
* @fileoverview v1
* @name index.js
* @author Yoshiya Ito <myon53@gmail.com>
*/

import Express from 'express';
import Twitter from './twitter';
import _ from 'lodash';
import co from 'co';

export default class V1 {
  constructor() {
    this.router = new Express.Router();
    this.router.get('/twitter', Twitter.index);
    this.router.get('/twitter/:id', Twitter.show);
    this.router.post('/twitter', Twitter.create);
    this.router.put('/twitter/:id', Twitter.update);
    this.router.delete('/twitter/:id', Twitter.destroy);
  }
}
