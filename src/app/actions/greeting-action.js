import { RECEIVE_GREETING, TOGGLE_GREETING } from "../reducers/greeting-reducer.js";
import getMessage from "../services/message.js";

export const setGreeting = (greeting) => ({
    type: RECEIVE_GREETING,
    greeting
});

export const toggleGreeting = () => ({
    type: TOGGLE_GREETING,
});

export const init = () => (dispatch) => (
    getMessage()
        .then(data => dispatch(setGreeting(data.message)))
);