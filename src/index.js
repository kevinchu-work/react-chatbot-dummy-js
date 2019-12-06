import React        from 'react';
import ReactDOM     from 'react-dom';

import App              from './App';
// import Header           from './Components/Header/Header';
// import SubTitle         from './Components/SubTitle';
// import DialogWrapper    from './Components/Main/DialogWrapper';
// import AssistantBar     from './Components/AssistantBar';
// import InputBar         from './Components/InputBar';

import './index.scss';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('app'));

// ReactDOM.render(<Header />, document.getElementById('header'));
// ReactDOM.render(<SubTitle />, document.getElementById('subtitle'));
// ReactDOM.render(<DialogWrapper />, document.getElementById('root'));
// ReactDOM.render(<AssistantBar />, document.getElementById('assistantBar'));
// ReactDOM.render(<InputBar />, document.getElementById('userTalk'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
