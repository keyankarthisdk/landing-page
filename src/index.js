import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header.js'
import App from './App';
import * as serviceWorker from './serviceWorker';
import Carousel2 from './Carousal2.js'
import './custom1.css'
ReactDOM.render(<Header />,document.getElementById('root') );
ReactDOM.render(<App />,document.getElementById('body') );
ReactDOM.render(<Carousel2 className="new" />,document.getElementById('body1') );


serviceWorker.unregister();
