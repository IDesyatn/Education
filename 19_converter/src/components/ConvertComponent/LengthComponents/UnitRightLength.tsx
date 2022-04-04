import React, {Component} from 'react';

import store from '../../../Store/reducerLength'
import {addSelectRight} from '../../../Store/actionsTypeLength'

import '../../Pages/styles/styles.css';

type Props = {};

export class UnitRightLength extends Component<Props> {
    
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
        addSelectRight(e.target.value);
    }

    render(){
        return (
            <select onChange={this.handleRight} className='select_unit' defaultValue={'Meter'}>
                <option value="Meter" >Meter</option>
                <option value="Verst" >Verst</option>
                <option value="Mile">Mile</option>
                <option value="Foot">Foot</option>
                <option value="Yard">Yard</option>
            </select>
        )
    }
}