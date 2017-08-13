import React, { Component } from 'react';
import { Surveys } from '../api/surveys.js';
import PropTypes from 'prop-types';
import { createContainer } from 'meteor/react-meteor-data';
import createFragment from 'react-addons-create-fragment';
import { Mongo } from 'meteor/mongo';

const util = require('util')

// The index of the respective answer within the current survey.
// TODO: This can be used to intercept the usecase in which a user did not select an option, but hit the done button.
let radioSelected = -1;

// Task component - represents a single todo item
class Survey extends Component {

  // Event handler to determine the answer that was selected.
  radioSelected(event) {
    radioSelected = event.target.value
  }

  // Event handler for the done button. This also triggers the update in the database.
  surveyComplete() {
    Meteor.call("incrementVotes", radioSelected, function(error, affectedDocs) {
      if (error) {
        console.log(error.message);
      }
    });
    FlowRouter.go('thanks')
  }

  // Render the survey arraay that comes from the database.
  renderSurveys() {
    return this.props.surveys.map((survey) => (
      <div key={survey._id}>{survey.question}</div>
    ));
  }

  // Render the answers array from within the survey array. Each answer has a radio button.
  renderAnswers() {
    return this.props.surveys.map((survey) => (
      survey.answers.map((answer, index) => (
        <div>
          <label>
            <input key={index} name="answer" type="radio" value={index} onClick={event => this.radioSelected(event)}/>
            {answer}
          </label>
        </div>
      ))
    ));
  }

  // General render method that gets called after the container has been created.
  render() {
    return (
      <div className="container">
        <div>
          <h1>{this.renderSurveys()}</h1>
          <div className="container">
            {this.renderAnswers()}
          </div>
        </div>
        <div>
          <p>Please click done to complete the survey.</p>

          <button className="doneButton" onClick={this.surveyComplete.bind(this)}>
            Done
          </button>
        </div>
      </div>
    );
  }
}

// Prop types to be able to validate the collection from the database.
Survey.propTypes = {
  surveys: PropTypes.array.isRequired
};

// Grant access the the collection wihtin this component.
export default createContainer((props) => {
  return {
    surveys: Surveys.find({}).fetch()
  };
}, Survey);
