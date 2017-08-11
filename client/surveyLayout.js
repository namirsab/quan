import { Template } from 'meteor/templating'
import database from '../lib/database'

const util = require('util')

// Survey helper handler to make the survey accessible within the template.
Template.survey.helpers({
  // Access to the current survey.
  survey: function () {
    return findCurrentSurvey()
  }
})

// Event handler for the surveyLayout.
// The selected answer is fetched and the survey is being updated in the database.
Template.surveyLayout.events({
  // Button click event handler.
  'click button': function(event, template) {
    // To prevent the form from being submitted.
    event.preventDefault()
    // Current survey object so we don't need to fetch it from the form itself.
    let currentSurvey = findCurrentSurvey()

    // Which button was selected? The id should be enough to add it to the results list of the survey object.
    let radioButton = template.find('input:radio:checked')
    let radioButtonId = $(radioButton).attr('id')
    // Increment the results list depending on the selected radio button.
    currentSurvey.results[radioButtonId]++
    // Update the survey with the current relsult.
    Meteor.call('update', {survey: currentSurvey})
    // Redirect to thanks page.
    FlowRouter.go('/thanks')
  }
})
