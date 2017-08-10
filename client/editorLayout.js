import database from '../lib/database'

Template.nextButton.events({
  'click button'(event, instance) {
    console.log('Clicked my nextButton')
    FlowRouter.go('/survey')
  }
})

Template.editor.helpers({
    item: function () {
        return findCurrentSurvey()
    }
})
