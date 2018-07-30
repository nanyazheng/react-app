import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CountryFlagGuessing from './CountryFlagGuessing';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<CountryFlagGuessing />, document.getElementById('root'));
registerServiceWorker();
