import database from '../lib/database'

const util = require('util')

Template.editButton.events({
  'click button'(event, instance) {

    let answers         = []
    let question        = document.querySelector('#question').value
    let allAnswers      = document.querySelectorAll('input:not(#question)')
    let filteredAnswers = []
    let results         = []

    // Get values from all answers input fileds and filter only valid ones.
    getValues(allAnswers, function(err, arr) {
      if(err) console.log('getValues err' + err)
      filterArray(answers)
    })

    // Retrieve all values from the input fileds.
    function getValues(allAnswers, callback) { // 1. Why callback
      answers = Object.keys(allAnswers).map(function(index) {
        if (allAnswers[index].value.length !== 0) {
          results.push(0)
          return allAnswers[index].value
        }
      })
      callback(null, answers)
    }

    // Input validation. Allow only values that are defined.
    function filterArray(answers){
      filteredAnswers = answers.filter(isNotUndefined)
      function isNotUndefined(value) {
        if (value !== undefined) {
          return value
        }
      }
    }

    // Prepare object for handover.
    let survey = {}
    survey.question = question
    survey.answers = filteredAnswers
    survey.results = results

    // Call Meteor method to update the database.
    Meteor.call('update', {survey: survey})
  }
})

Template.editor.helpers({
  // Function to display the current survey in the editor.
  survey: function() {
    return findCurrentSurvey()
  },
  // Add function to show the index of each answer properly.
  add: function(a, b) {
    return a + b
  }
})
