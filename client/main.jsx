import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import App from '../imports/ui/App.jsx';
import Survey from '../imports/ui/Survey.jsx';
import Welcome from '../imports/ui/Welcome.jsx';
import { Surveys } from '../imports/api/surveys.js';
// import { Welcomes } from '../imports/api/welcomes.js';

Meteor.startup(() => {
  render(<App />, document.getElementById('render-target'));
})
