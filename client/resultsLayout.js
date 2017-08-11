import { Template } from 'meteor/templating'
import { ReactiveVar } from 'meteor/reactive-var'
import Chart from 'chart.js'
import database from '../lib/database'

const util = require('util')

// Survey helper handler to make the survey accessible within the template.
Template.Chart.helpers({
  // Access to the current survey.
  survey: function () {
    return findCurrentSurvey()
  }
})

Template.Chart.onRendered(function() {

  let currentSurvey = findCurrentSurvey()
  let ctx = document.getElementById("myChart")
  let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: currentSurvey.answers,
      datasets: [{
        label: currentSurvey.question,
        data: currentSurvey.results,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    }
  })

  // Enable the tracker to ensure we see the updates.
  // Update necessary data here.
  Tracker.autorun(function(){
    currentSurvey = findCurrentSurvey()
    myChart.data.labels = currentSurvey.answers
    myChart.data.datasets[0].data = currentSurvey.results
    myChart.update()
  })

})
