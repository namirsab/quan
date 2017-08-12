import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';
import App from '../imports/ui/App.jsx';
import Welcome from '../imports/ui/Welcome.jsx';
import Survey from '../imports/ui/Survey.jsx';
import Thanks from '../imports/ui/Thanks.jsx';
import Surveys from '../imports/api/surveys.js';

FlowRouter.route('/', {
  name: 'home',
  action: function() {
    // BlazeLayout.render('homeLayout')
    mount(App, {
      main: <Welcome />,
    });
  }
})

FlowRouter.route('/test', {
  name: 'test',
  action: function() {
    BlazeLayout.render('homeLayout', {main: 'Test'})
  }
})

FlowRouter.route('/survey', {
  name: 'survey',
  action: function() {
    // BlazeLayout.render('surveyLayout', {main: 'survey'})
    mount(App, {
      main: <Survey />, content: Surveys
    });
  }
})

FlowRouter.route('/thanks', {
  name: 'thanks',
  action: function() {
    // BlazeLayout.render('thanksLayout')
    mount(App, {
      main: <Thanks />,
    });
  }
})

FlowRouter.route('/editor', {
  name: 'editor',
  action: function() {
    BlazeLayout.render('editor')
  }
})

FlowRouter.route('/results', {
  name: 'results',
  action: function() {
    Meteor.defer(function(){
      BlazeLayout.render('resultsLayout', {main: 'survey'})
    })
  }
})
