import { Meteor } from 'meteor/meteor'
import database from '../lib/database'
// import '../imports/api/survey.js'
// import '../imports/api/tasks.js';
import '../imports/api/surveys.js';

const util = require('util')

Meteor.startup(() => {
  // When the server starts create a single survey we can work with. Also ensure the database is running
  // and our collection is created. This is a callback function so error cases can be handled if necessary.
  // createInitialSurvey(function(err, doc) {
    // console.log('database err: ' + err)
    // console.log('database doc: ' + doc)
  // })
})
