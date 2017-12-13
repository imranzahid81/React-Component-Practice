import React, { Component } from 'react';
import './index.css';
import HeaderA from'./components/header/header-1';
import HeaderB from'./components/header/header-2';
import HeaderC from'./components/header/header-3';

const style1 = {
  border:'4px solid green',
};

class MainHeader extends Component {
  render() {
    const style1 = {
      border:'4px solid green',
    };
    return (
      <div>

        <p id="headerComp">
        <h1>This is Head Component</h1>
        <HeaderA />
        <HeaderB />
        <HeaderC />
        </p>

      </div>
    );
  }
}

export default MainHeader;
