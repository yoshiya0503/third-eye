/**
* @fileoverview twitter view
* @name twitter.jsx
* @author Yoshiya Ito <myon53@gmail.com>
*/
import _ from 'lodash';
import React, { Component } from 'react';
// import { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export default class Twitter extends Component {

  draw() {
    const histogram = this.props.histogram;
    const data = _.map(histogram, (hist) => {
      const histName = _.endsWith(hist.day, '0') ? hist.day : '';
      return {
        name: histName,
        count: hist.count,
      };
    });
    const chart = (
      <LineChart
        width={2000} height={600} data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="count" stroke="#82ca9d" />
      </LineChart>
      );
    return chart;
  }

  render() {
    return (
      <MuiThemeProvider>
        {this.draw()}
      </MuiThemeProvider>
    );
  }
}
