/*
The Redux reducer that handles generating the next state based on the previous state.
*/

const core = require('../core.js');
// const moment = require('moment');

export default function reducer(previousState, action) {
    let previousTick = previousState.tick;
    let nextTick = null;

    switch (action.type) {
        case 'STEP_FORWARD':
            nextTick = core.step_forward(previousTick);

            if (!(nextTick > previousTick)) {
                return previousState
            } else {
                return core.get_state_at_tick(nextTick);
            }
        case 'STEP_BACKWARDS':
            nextTick = core.step_backwards(previousTick);

            if (!(nextTick < previousTick)) {
                return previousState;
            } else {
                return core.get_state_at_tick(nextTick);
            }
        default:
            return previousState;
    }
}