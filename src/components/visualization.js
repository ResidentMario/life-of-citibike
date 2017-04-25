import React from 'react';
import Scrollbar from '../components/scrollbar';
import NYCMap from '../components/map';


export default class Visualization extends React.Component {
    constructor() {
        super();
        this.handleScroll = this.handleScroll.bind(this);
    }

    handleScroll(e) {
        if (e.deltaY > 0) {
            console.log("YO");
            this.props.stepForward();  // stepForward inherited from VisualizationContainer
        } else {
            console.log("DAWG");
            this.props.stepBackwards();  // stepBackwards inherited from VisualizationContainer
        }
    }

    render() {
        console.log(this.props);

        return (
            <div className="visualization-content-frame" onWheel={this.handleScroll}>
                {[
                    <NYCMap key={1}/>,
                    // <div key={1}>"HELLO WORLD"</div>,
                    <Scrollbar percent={this.props.ticks} key={3}/>
                ]}
            </div>
        );
    }
}