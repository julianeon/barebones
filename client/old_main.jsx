import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import {Router, Route} from 'react-router';

import App from './App.jsx';
import Mapp from './Mapp.jsx';
import Header from './Header.jsx';

Meteor.startup(() => {
  render(<Header />, document.getElementById('headbar'));
  render(<App />, document.getElementById('containerize'));
  render(<Mapp />, document.getElementById('otherdiv'));
});
