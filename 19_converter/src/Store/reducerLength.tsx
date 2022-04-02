import { Action, createStore } from 'redux';



const initState = {
    userData: 0,
    right: "Meter",
    left: "Meter",
    answer: 0
}


const lengthReducer = (state = initState, action:{type:string, payload?:any}) => {
    switch(action.type){
        case 'LEFT':
            return {
                ...state,
                left: action.payload
            }
        case 'RIGHT':
            return {
                ...state,
                right: action.payload
            }
        case 'USER_LENGTH':
            return {
                ...state,
                userData: action.payload
            }
        case 'ANSWER':
            return {
                ...state,
                answer: action.payload
            };
        default:
            return state
    }
}


export const store = createStore(lengthReducer, initState);

export default store; 

