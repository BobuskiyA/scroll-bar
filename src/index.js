import React from 'react';
import ReactDOM from 'react-dom';
import App from './scroll/ScrollableContainer.jsx';
import registerServiceWorker from './registerServiceWorker';
import './styles.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
