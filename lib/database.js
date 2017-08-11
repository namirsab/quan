const Survey = new Mongo.Collection('surveys')
const util = require('util')

// Rules to allow client side database functionality.
Survey.allow({
  update: function(survey) {
    return true
  }
})

Meteor.methods({
  update: function(survey) {
    update(survey)
  }
})

createInitialSurvey = function(callback) {
  Survey.update({ 'id': 1 },
  {
    $set:
    {
      question: 'What price would be appropriate?',
      answers: [1.99, 4.99, 9.99],
      results: [0, 0, 0]
    },
  },
  {
    upsert: true
  },
  function(err, doc) {
    if(err) callback(err, null)
    callback(null, doc)
  })
}

findCurrentSurvey = function() {
  return Survey.findOne({ 'id': 1 })
}

update = function(data) {
  // Add the result list here because the client does not know about it in this context.
  data.survey.results = data.survey.results
  // data.survey.answers.map(function(key, index) { data.survey.results.push(0) })
  Survey.update({ 'id': 1 },
  {
    $set:
    { question: data.survey.question, answers: data.survey.answers, results: data.survey.results },
  },
  {
    upsert: true
  },
  function(err, doc) {
    if(err) {
      console.log('update error: ' + err)
    }
    if(doc === 1) {
      console.log('Update successful!')
    }
  })
}
