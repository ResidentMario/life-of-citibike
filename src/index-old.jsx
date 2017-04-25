// Globals imported from the window.
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import vizApp from './reducers';
import reducer from './reducers';

let store = createStore(reducer);

// Core functions.
const core = require('./core.js');

class Visualization extends React.Component {
    render() {
        return (<Provider store={store}>
            {"HELLO WORLD"}
        </Provider>);
    }
}

// class Scrollbar extends React.Component {
//     render() {
//         return (<div className="scroll-bar" style={{width: this.props.percent + "%"}}></div>);
//     }
// }

window.ReactDOM.render(<Visualization />, document.getElementById('visualization-container'));
