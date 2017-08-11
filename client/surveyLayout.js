import { Template } from 'meteor/templating'
import database from '../lib/database'

const util = require('util')

Template.survey.helpers({
    survey: function () {
        return findCurrentSurvey()
    }
})

Template.surveyLayout.events({
  'click button': function(event, template) {
    console.log('survey: ' + util.inspect(findCurrentSurvey()))
    let currentSurvey = findCurrentSurvey()

    let radioButton = template.find('input:radio:checked')
    console.log('id: ' + $(radioButtonId).attr('id'))
    let radioButtonId = $(radioButton).attr('id')
    currentSurvey.results[radioButtonId]++

    console.log('current Survey: ' + util.inspect(currentSurvey))

    Meteor.call('update', {survey: currentSurvey})
    // FlowRouter.go('/thanks')
  }
})
