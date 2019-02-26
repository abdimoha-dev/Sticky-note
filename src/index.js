import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Comps from './Comps'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />
, document.getElementById('root'));

ReactDOM.render(<div className="board">
    <Comps>my comment</Comps>
    <Comps>your comment</Comps>
    <Comps>our comment</Comps>
</div> 
    , document.getElementById('comp'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
