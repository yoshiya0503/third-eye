/**
* @fileoverview twitter
* @name twitter.js
* @author Yoshiya Ito <myon53@gmail.com>
*/
import _ from 'lodash';
import Twit from 'twit';
import moment from 'moment';
import config from '../config';

export default class Twitter {
  constructor() {
    this.client = new Twit(config.TWITTER_CONFIG);
  }

  /**
   * fetch twitter timeline asyncronoucely(recursive)
   * @method fetchTimeline
   * @param {Number} all tweets count
   * @return {Array} tweets
   */
  async fetchTimeline(max_count, max_id) {
    if ((max_count) <= 0) {
      return [];
    }
    const tweets = await this.client.get(
      'statuses/user_timeline', { screen_name: 'numa08', count: config.TWITTER_CONFIG.count, max_id: max_id }
    );
    const lastTweet = _.last(tweets.data);
    if (_.isEmpty(lastTweet)) {
      console.log(tweets);
    }
    const last_id = lastTweet.id;
    return _.concat(tweets.data, await this.fetchTimeline(max_count - config.TWITTER_CONFIG.count, last_id));
  }

  /**
   * @method makeHistogram
   * @param {Array} tweets
   * @return {Object}
   */
  makeHistogram(tweets) {
    return _.chain(tweets).countBy((tweet) => {
      const date = _.split(tweet.created_at, ' ');
      return _.last(date) + config.MONTH2NUM[date[1]] + date[2];
    }).map((count, day) => {
      return {
        day: _.toInteger(day),
        count: count
      };
    }).sortBy((v) => {
      return v.day;
    }).value();
  }
};
