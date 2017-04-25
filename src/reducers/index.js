/*
The Redux reducer that handles generating the next state based on the previous state.
*/

const core = require('../core.js');
// const moment = require('moment');

export default function reducer(previousState, action) {
    let previousTicks = previousState.ticks;
    let nextTicks = null;

    switch (action.type) {
        case 'STEP_FORWARD':
            nextTicks = core.step_forward(previousTicks);

            if (!(nextTicks > previousTicks)) { return previousState }

            return {
                'display': 'stations_on_date',
                'stations': core.get_stations_on_date(action.date),
                'trips': null,
                'tripsets': null,
                'ticks': nextTicks
            };
        case 'STEP_BACKWARDS':
            nextTicks = core.step_backwards(previousTicks);

            if (!(nextTicks < previousTicks)) { return previousState }

            return {
                'display': 'stations_on_date',
                'stations': core.get_stations_on_date(action.date),
                'trips': null,
                'tripsets': null,
                'ticks': nextTicks
            };
        default:
            return previousState;
    }
}