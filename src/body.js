import React, { Component } from 'react';
import './index.css';
import BodyA from'./components/body/body-1';
import BodyB from'./components/body/body-2';
import BodyC from'./components/body/body-3';

class MainBody extends Component {
  render() {
    return (
      <div>

        <p id="bodyComp">
        <h1>This is Body Component</h1>
        <BodyA />
        <BodyB />
        <BodyC />
        </p>

      </div>
    );
  }
}

export default MainBody;
