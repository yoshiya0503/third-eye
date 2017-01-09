/**
* @fileoverview app
* @name app.js
* @author Yoshiya Ito <myon53@gmail.com>
*/
import Express from 'express';
import API from './api';

const app = new Express();
const api = new API();

// TODO set middlewares
app.use(Express.static('public'));
app.use('/api', api.restful());
app.listen(3000);
