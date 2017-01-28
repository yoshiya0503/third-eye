/**
* @fileoverview twitter
* @name twitter.js
* @author Yoshiya Ito <myon53@gmail.com>
*/
import _ from 'lodash';
import Twit from 'twit';
import config from '../config';

export default class Twitter {

  constructor() {
    console.log(config);
    this.client = new Twit(config.TWITTER_CONFIG);
    this.tweets = [];
  }

  /**
   * fetch twitter timeline asyncronoucely(recursive)
   * @method fetchTimeline
   * @param {Number} all tweets count
   * @return {Array} tweets
   */
  async fetchTimeline(maxCount, maxId) {
    if ((maxCount) <= 0) {
      return;
    }
    const tweets = await this.client.get(
      'statuses/user_timeline', { screen_name: '', count: config.TWITTER_CONFIG.count, max_id: maxId },
    );
    const lastTweet = _.last(tweets.data);
    if (_.isEmpty(lastTweet)) {
      return;
    }
    const lastId = lastTweet.id;
    const nextCount = maxCount - config.TWITTER_CONFIG.count;
    this.tweets = _.concat(tweets.data, await this.fetchTimeline(nextCount, lastId));
  }

  /**
   * @method makeHistogram
   * @param {Array} tweets
   * @return {Object}
   */
  makeHistogram() {
    return _.chain(this.tweets)
      .countBy((tweet) => {
        const date = _.split(tweet.created_at, ' ');
        return _.last(date) + config.MONTH2NUM[date[1]] + date[2];
      })
      .map((count, day) => ({ day: _.toInteger(day), count }))
      .sortBy(v => (v.day))
      .value();
  }
}
