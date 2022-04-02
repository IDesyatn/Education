import React, {Component} from 'react';

import '../../Pages/styles/styles.css';

import store from '../../../Store/reducerLength'
import {addSelectRight} from '../../../Store/actionsTypeLength'


type Props = {};

export class UnitRightCurrency extends Component<Props> {
    
    constructor(props:Props){
        super(props);
        store.subscribe(() => {    
            this.setState({right: store.getState().right});
        });
        this.state = {
            right: store.getState().right
        };
    }

    handleRight(e:any){
       // addSelectRight(e.target.value);
    }

    render(){
        console.log(store.getState())
        return (
            <select onChange={this.handleRight} className='unitLeft' defaultValue={'UAH'}>
                <option value="UAH" >UAH</option>
                <option value="EUR" >EUR</option>
                <option value="USD">USD</option>
                <option value="RUB">RUB</option>
            </select>
        )
    }
}