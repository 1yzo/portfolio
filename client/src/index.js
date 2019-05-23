import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import 'normalize.css/normalize.css';
import './styles/base.css';
import App from './components/App';


const jsx = <App />;

ReactDOM.render(jsx, document.getElementById('root'));
registerServiceWorker();
