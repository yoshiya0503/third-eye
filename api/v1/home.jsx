/**
* @fileoverview home
* @name home.js
* @author Yoshiya Ito <myon53@gmail.com>
*/
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import HomeView from '../../views/home';

export default class Home {

  static async index(req, res) {
    res.send(ReactDOMServer.renderToString(<HomeView />));
  }
}
