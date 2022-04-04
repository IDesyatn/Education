import React, {Component} from 'react';

import '../../Pages/styles/styles.css';

import {addSelectLeft} from '../../../Store/actionsTypeLength'
import store from '../../../Store/reducerLength'
type Props = {};

export class UnitLeftCurrency extends Component<Props> {
    
    constructor(props:Props){
        super(props);
        store.subscribe(() => {    
            this.setState({left: store.getState().left});
        });

        this.state = {
            left: store.getState().left
        };
        
    }

    handleLeft(e:any){
        addSelectLeft(e.target.value);
    }

    render(){
        return (
            <select onChange={this.handleLeft} className='select_unit' defaultValue={'UAH'}>
                <option value="UAH" >UAH</option>
                <option value="EUR" >EUR</option>
                <option value="USD">USD</option>
                <option value="RUB">RUB</option>
            </select>
        )
    }
}