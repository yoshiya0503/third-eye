/**
* @fileoverview twitter module
* @name twitter.js
* @author Yoshiya Ito <myon53@gmail.com>
*/

import _ from 'lodash';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import TwitterLib from '../../lib/twitter';
import TwitterView from '../../views/twitter';

export default class Twitter {

  static async index(req, res) {
    const twitter = new TwitterLib();
    const result = await twitter.fetchTimeline(200 * 16);
    const hist = twitter.makeHistogram(result);
    res.send(ReactDOMServer.renderToString(<TwitterView histogram={hist} />));
  }

  static async show(req, res) {
  }

  static async create(req, res) {
  }

  static async update(req, res) {
  }

  static async destroy(req, res) {
  }
}
