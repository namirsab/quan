import database from '../lib/database'

Template.doneButton.events({
  'click button'(event, instance) {
    console.log('Clicked my nextButton')
    FlowRouter.go('/thanks')
  }
})

Template.survey.helpers({
    item: function () {
        return findCurrentSurvey()
    }
})
