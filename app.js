/**
* @fileoverview app
* @name app.js
* @author Yoshiya Ito <myon53@gmail.com>
*/
import injectTapEventPlugin from 'react-tap-event-plugin';
import Express from 'express';
import API from './api';

injectTapEventPlugin();

const app = new Express();
const api = new API();

global.navigator = { userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.82 Safari/537.36' };
// TODO set middlewares
app.use(Express.static('public'));
app.use('/api', api.restful());
app.use('/', async (req, res) => (res.redirect('/api/v1/home')));
app.listen(3000);
