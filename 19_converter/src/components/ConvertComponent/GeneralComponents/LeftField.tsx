import React, {Component} from 'react';

import '../../Pages/styles/styles.css';

import {addUserLength} from '../../../Store/actionsTypeLength'
import store from '../../../Store/reducerLength'

type Props = {};

export class LeftField extends Component<Props>{

    constructor(props:Props){
        super(props);
        store.subscribe(() => {    
            this.setState({userData: store.getState().userData});
        });

        this.state = {
            userData: store.getState().userData
        };
    }

    handleValue(e:any){
        addUserLength(e.target.value)
    }

    render(){
        return (
            <div className="left">
                <input type="number" onChange={this.handleValue} className="left__input" placeholder="enter your length here"/>
            </div>
        )
    }
}