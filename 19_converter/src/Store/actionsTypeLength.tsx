import { store } from "./reducerLength";


export function addUserLength(value:number){
    store.dispatch({
        type: "USER_LENGTH", 
        payload: value
    })
} 

export function addSelectLeft(value:string){
    store.dispatch({
        type: 'LEFT', 
        payload: value
    })
} 

export function addSelectRight(value:string){
    store.dispatch({
        type: 'RIGHT', 
        payload: value
    })
} 

export function addAnswer(value:number){
    store.dispatch({
        type: 'ANSWER',
        payload: value
    })
} 