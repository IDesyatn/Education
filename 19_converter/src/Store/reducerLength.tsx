import { createStore } from 'redux';


const lengthReducer = (state = createInitState(), action:{type:string, payload?:any}) => {
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
            }
        case 'LENGTH_CONVERT_INIT':
            return{
                ...state, 
                url:'/length', 
                userData: 0,
                right: "Meter",
                left: "Meter",
                answer: 0
            }
        case 'CURRENCY_CONVERT_INIT':
            return{
                ...state, 
                url:'/currency', 
                userData: 0,
                right: "UAH",
                left: "UAH",
                answer: 0
                }
        default:
            return state
    }
}


export const store = createStore(lengthReducer, createInitState());

export default store; 



function createInitState(){
    switch(window.location.pathname){
        case '/currency':
            return {
                url:'/currency', 
                userData: 0,
                right: "UAH",
                left: "UAH",
                answer: 0
            }
        case '/length':
            return {
                url:'/length', 
                userData: 0,
                right: "Meter",
                left: "Meter",
                answer: 0
            }
        default: 
            return{
                url:'', 
                userData: 0,
                right: "",
                left: "",
                answer: 0
            }
    }
}
