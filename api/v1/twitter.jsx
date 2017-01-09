/**
* @fileoverview twitter module
* @name twitter.js
* @author Yoshiya Ito <myon53@gmail.com>
*/
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import TwitterLib from '../../lib/twitter';
import TwitterView from '../../views/twitter';

export default class Twitter {

  static async index(req, res) {
    const twitter = new TwitterLib();
    await twitter.fetchTimeline(200 * 16);
    const hist = twitter.makeHistogram();
    res.send(ReactDOMServer.renderToString(<TwitterView histogram={hist} />));
  }
}
