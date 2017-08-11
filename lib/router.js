FlowRouter.route('/', {
  name: 'home',
  action: function() {
    BlazeLayout.render('homeLayout')
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
    BlazeLayout.render('surveyLayout', {main: 'survey'})
  }
})

FlowRouter.route('/thanks', {
  name: 'thanks',
  action: function() {
    BlazeLayout.render('thanksLayout')
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
