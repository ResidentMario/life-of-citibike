import React from 'react';

export default class Scrollbar extends React.PureComponent {
    render() {
        return (<div className="scroll-bar" style={{width: this.props.percent + "%"}}></div>);
    }
}