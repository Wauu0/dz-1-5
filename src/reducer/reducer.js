import {DECREMENTBYFIVE, DECREMENT, INCREMENT, INCREMENTBYFIVE} from "../actions/Actions";

const initialState = {
    count:0
}

export const counterReducer= (state= initialState,action)=> {
    switch (action.type){
        case INCREMENT:
            return{
                ...state, count: state.count + 1
            };
        case DECREMENT:
            return {
                ...state, count: state.count > 0 ? state.count -1 : 0
            };
        case INCREMENTBYFIVE:
            return {
                ...state, count: state.count + 5
            };
        case DECREMENTBYFIVE:
            return {
                ...state, count: state.count > 4 ? state.count -5 : 0
            }
        default:
            return state

    }
}
