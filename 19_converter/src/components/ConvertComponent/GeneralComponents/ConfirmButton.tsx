import React , {Component} from 'react';

import '../../Pages/styles/styles.css';

import {addAnswer} from '../../../Store/actionsTypeLength'
import {ConvertLengthLogic} from '../../../ConverLogic/ConvertLengthLogic'

type Props = {};

export class ConfirmButton extends Component<Props>{

    constructor(props:Props){
        super(props);
        this.state = {};
    }

    hendleConverte(){
        ConvertLengthLogic()
    }

    render(){
        return (
            <button onClick={this.hendleConverte} className="btnConvert">Convert</button>
        )
    }
}