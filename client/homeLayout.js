import database from '../lib/database'

Template.nextButton.events({
  'click button'(event, instance) {
    FlowRouter.go('/survey')
  }
})
