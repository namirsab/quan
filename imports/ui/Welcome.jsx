import React, { Component } from 'react';

// Task component - represents a single todo item
export default class Welcome extends Component {

  toSurveyPage() {
    FlowRouter.go('survey')
    // this.context.router.push('/survey')
  }

  render() {
    return (
      <div className="container">
        <div>
          <h1>Welcome!</h1>
        </div>
        <div>
          <p>Please click next to start the survey.</p>

          <button className="nextButton" onClick={this.toSurveyPage.bind(this)}>
            Next
          </button>
        </div>
      </div>
    );
  }
}
