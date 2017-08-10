const Survey = new Mongo.Collection('surveys')

createInitialSurvey = function(callback) {
  Survey.update({ 'id': 1 },
  {
    $set:
    { question: 'What price would be appropriate?', answers: [1.99, 4.99, 9.99] },
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
