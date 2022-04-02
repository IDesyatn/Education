import React, {Component} from 'react';

import * as convert from './ConvertLengthHelper';
import store from '../Store/reducerLength'
import {addAnswer} from '../Store/actionsTypeLength'

export function ConvertLengthLogic(): void{
    const left = store.getState().left
    const right = store.getState().right
    const userData = store.getState().userData
    let result = 0; 
    
    if(left === 'Mile'){
        switch (right){
            case 'Meter':
                result = convert.mileToMeter(userData);
                break;
            case 'Yard':
                result = convert.mileToYard(userData);
                break;
            case 'Foot':
                result = convert.mileToFoot(userData);
                break;
            case 'Verst':
                result = convert.mileToVerst(userData);
                break;
            default: 
                result = userData;

        }
    }

    else if(left==='Meter'){
        switch (right){
            case 'Mile':
                result = convert.meterToMile(userData);
                break;
            case 'Yard':
                result = convert.meterToYard(userData);
                break;
            case 'Foot':
                result = convert.meterToFoot(userData);
                break;
            case 'Verst':
                result = convert.meterToVerst(userData);
                break;
            default: 
                result = userData;

        }
    }

    else if(left==='Verst'){
        switch (right){
            case 'Mile':
                result = convert.verstToMile(userData);
                break;
            case 'Yard':
                result = convert.verstToYard(userData);
                break;
            case 'Foot':
                result = convert.verstToFoot(userData);
                break;
            case 'Meter':
                result = convert.verstToMeter(userData);
                break;
            default: 
                result = userData;

        }
    }

    else if(left==='Foot'){
        switch (right){
            case 'Mile':
                result = convert.footToMile(userData);
                break;
            case 'Yard':
                result = convert.footToYard(userData);
                break;
            case 'Verst':
                result = convert.footToVerst(userData);
                break;
            case 'Meter':
                result = convert.footToMeter(userData);
                break;
            default: 
                result = userData;

        }
    }

    else if(left==='Yard'){
        switch (right){
            case 'Mile':
                result = convert.yardToMile(userData);
                break;
            case 'Foot':
                result = convert.yardToFoot(userData);
                break;
            case 'Verst':
                result = convert.yardToVerst(userData);
                break;
            case 'Meter':
                result = convert.yardToMeter(userData);
                break;
            default: 
                result = userData; 

        }
    }


    addAnswer(result);
}