import React, { Component } from 'react';

// Task component - represents a single todo item
export default class Thanks extends Component {

  toSurveyPage() {
    FlowRouter.go('survey')
    // this.context.router.push('/survey')
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
