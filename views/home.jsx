/**
* @fileoverview home
* @name home.jsx
* @author Yoshiya Ito <myon53@gmail.com>
*/
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

const style = {
  height: 400,
  width: 400,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

export default class Home extends Component {

  makeHome() {
    const True = true;
    const ref = 'http://localhost:3000/api/v1/twitter';
    return (
      <Paper style={style}>
        <p>Input Target Twitter User</p>
        <TextField
          id="name"
          floatingLabelText="Screen Name"
          floatingLabelFixed={True}
          onChange={this.change}
        /><br />
        <TextField
          id="count"
          floatingLabelText="Tweet Count"
          floatingLabelFixed={True}
        /><br />
        <FlatButton label="Go!" href={ref} />
      </Paper>
    );
  }

  render() {
    return (<MuiThemeProvider>
      {this.makeHome()}
    </MuiThemeProvider>
    );
  }
}
