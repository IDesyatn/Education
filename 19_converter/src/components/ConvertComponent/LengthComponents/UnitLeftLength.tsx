import React, {Component} from 'react';

import '../../Pages/styles/styles.css';

import {addSelectLeft} from '../../../Store/actionsTypeLength'
import store from '../../../Store/reducerLength'
type Props = {};

export class UnitLeftLength extends Component<Props> {
    
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
            <select onChange={this.handleLeft} className='select_unit' defaultValue={'Meter'}>
                <option value="Meter" >Meter</option>
                <option value="Verst" >Verst</option>
                <option value="Mile">Mile</option>
                <option value="Foot">Foot</option>
                <option value="Yard">Yard</option>
            </select>
        )
    }
}
