import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createContainer } from 'meteor/react-meteor-data';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Survey from './Survey.jsx';
import Welcome from './Welcome.jsx';
import { Surveys } from '../api/surveys.js';
import { Welcomes } from '../api/welcomes.js';

import {mount} from 'react-mounter';

// App component - represents the whole app
class App extends Component {
}

App = (props) => (
  <div>
    {props.main}
  </div>
);

export default App = createContainer(props => {
  return {
    surveys: Surveys.find({}).fetch()
  };
}, App);
