// add reducers accordingly
const CounterTypes = {
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT'
}

const initialState = 0

const format = (state = initialState, action) => {
    // write Reducers to handle the actions.
    if (action.type) {
        switch (action.type) {
            case CounterTypes.INCREMENT:
                return state + 1;
            case CounterTypes.DECREMENT:
                return state - 1;
            default:
                return state;
        }
    }
    return 0;

}

export default format