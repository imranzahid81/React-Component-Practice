import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainHeader from './header';
import MainBody from './body';
import MainFooter from './footer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<div><MainHeader /><MainBody /><MainFooter /></div>, document.getElementById('root'));
registerServiceWorker();
