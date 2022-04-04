import React, {Component} from 'react';

import store from '../Store/reducerLength'
import {addAnswer} from '../Store/actionsTypeLength'
import * as convert from './ConvertCurrencyHelper';


export function ConvertCurrencyLogic(): void{
    const left = store.getState().left
    const right = store.getState().right
    const userData = store.getState().userData
    let result = 0; 

      if(left === 'UAH'){
        switch (right){
            case 'USD':
                result = convert.uahToUsd(userData)
                break;
            case 'EUR':
                result = convert.uahToEur(userData)
                break;
            case 'RUB':
                result = convert.uahToRub(userData)
                break;
            default:
                result = userData;
        }
    }
    
    else if(left === 'USD'){
        switch (right){
            case 'UAH':
                result = convert.usdToUah(userData)
                break;
            case 'EUR':
                result = convert.usdToEur(userData)
                break;
            case 'RUB':
                result = convert.usdToRub(userData)
                break;
            default:
                result = userData;
        }
    }
    
    else if(left === 'EUR'){
        switch (right){
            case 'UAH':
                result = convert.eurToUah(userData)
                break;
            case 'USD':
                result = convert.eurToUsd(userData)
                break;
            case 'RUB':
                result = convert.eurToRub(userData)
                break;
            default:
                result = userData;
        }
    }
    
    else if(left === 'RUB'){
        switch (right){
            case 'UAH':
                result = convert.rubToUah(userData)
                break;
            case 'EUR':
                result = convert.rubToEur(userData)
                break;
            case 'USD':
                result = convert.rubToUsd(userData)
                break;
            default:
                result = userData;
        }
    }

    addAnswer(result);

}