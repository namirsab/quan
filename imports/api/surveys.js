import { Mongo } from 'meteor/mongo';

const util = require('util')

export const Surveys = new Mongo.Collection('surveys')

// Increment votes depending on the selected answer. Expects an index to update the results array.
// id is always '1' since there is only one survey at all times.
Meteor.methods({
  incrementVotes: function (index) {
    Surveys.update({
      id: 1
    },
    {
      $inc: {
        ['results.' + index]: 1
      }
    }, function(error, affectedDocs) {
      if (error) {
        throw new Meteor.Error(500, error.message);
      } else {
        return "Update Successful";
      }
    })
  }
})
