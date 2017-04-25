export const STEP_FORWARD = 'STEP_FORWARD';
export const STEP_BACKWARDS = 'STEP_BACKWARDS';

export const stepForward = (previousTicks) => ({
    type: STEP_FORWARD,
    previousTicks
});

export const stepBackwards = (previousTicks) => ({
    type: STEP_BACKWARDS,
    previousTicks
});