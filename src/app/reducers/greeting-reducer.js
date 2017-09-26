export const RECEIVE_GREETING = "RECEIVE_GREETING";
export const TOGGLE_GREETING = "TOGGLE_GREETING";

const greetingReducer = (state={greeting: "", visible: true}, action) => {
    switch (action.type) {
        case RECEIVE_GREETING:
            return {...state, greeting: action.greeting};
        case TOGGLE_GREETING:
            return {...state, visible: !state.visible};
        default:
            return state;
    }
}

export default greetingReducer;