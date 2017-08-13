import React, { Component } from 'react';

// Thank you component.
export default class Thanks extends Component {

  toSurveyPage() {
    FlowRouter.go('survey')
  }

  render() {
    return (
      <div className="container">
        <div>
          <h1>Thanks for participating!</h1>
        </div>
      </div>
    );
  }
}
