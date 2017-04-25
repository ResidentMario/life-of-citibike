import { connect } from 'react-redux'
import Visualization from '../components/visualization'

// http://redux.js.org/docs/basics/UsageWithReact.html#implementing-container-components
const mapStateToProps = (state) => state;  // identity transform, for now...

function mapDispatchToProps(dispatch) {
    return {
        stepForward: () => dispatch({type: 'STEP_FORWARD'}),
        stepBackwards: () => dispatch({type: 'STEP_BACKWARDS'})
    };
}

const VisualizationContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Visualization);

export default VisualizationContainer;
