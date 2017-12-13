import React, { Component } from 'react';
import './index.css';
import FooterA from'./components/footer/footer-1';
import FooterB from'./components/footer/footer-2';
import FooterC from'./components/footer/footer-3';

class MainFooter extends Component {
  render() {
    return (
      <div>

        <p id="footerComp">
        <h1>This is Footer Component</h1>
        <FooterA />
        <FooterB />
        <FooterC />
        </p>

      </div>
    );
  }
}

export default MainFooter;
