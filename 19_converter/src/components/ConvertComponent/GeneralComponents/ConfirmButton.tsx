import React , {Component} from 'react';

import '../../Pages/styles/styles.css';

import {addAnswer} from '../../../Store/actionsTypeLength'
import {ConvertLengthLogic} from '../../../ConverLogic/ConvertLengthLogic'
import {ConvertCurrencyLogic} from '../../../ConverLogic/ConvertCurrencyLogic'
import store from '../../../Store/reducerLength'


type Props = {};

export class ConfirmButton extends Component<Props>{


    constructor(props:Props){
        super(props);
        this.state = {};
    }

    hendleConverte(){
        switch(store.getState().url){
            case '/length':
                ConvertLengthLogic()
                break;
            case '/currency':
                ConvertCurrencyLogic()
                break; 
            default:
                console.log('Something wrong...')
        }
    }

    render(){
        return (
            <button onClick={this.hendleConverte} className="btnConvert">Convert</button>
        )
    }
}