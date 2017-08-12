import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Surveys } from '../api/surveys.js';
import { createContainer } from 'meteor/react-meteor-data';

const util = require('util')

// Task component - represents a single todo item
export default class Survey extends Component {

  toThanksPage() {
    FlowRouter.go('thanks')
  }

  // renderSurveys() {
  //   return this.props.survey.map((survey) => (
  //     <Survey key={survey._id} survey={survey} />
  //   ));
  // }

  render() {
    return (
      <div className="container">
        <div>
          <h1>TEST</h1>
          {/*
            <div className="container">
            {this.renderSurveys()}
            </div>
            */}
        </div>
        <div>
          <p>Please click done to complete the survey.</p>

          <button className="doneButton" onClick={this.toThanksPage.bind(this)}>
            Done
          </button>
        </div>
      </div>
    );
  }
}

Survey.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  // survey: PropTypes.object.isRequired,
};
