import React, {Component} from 'react';

import '../../Pages/styles/styles.css';

import store from '../../../Store/reducerLength'

type Props = {};
type State ={
    answer:number
}

export class RightField extends React.Component<Props, State> {


    constructor(props:Props){
        super(props);
        store.subscribe(() => {    
            this.setState({answer: store.getState().answer});
        });

        this.state = {
            answer: store.getState().answer
        };
    }

    render(){
        return (
            <div className='right'>
                <input className="right__answer input_field" type="text"value={this.state.answer} disabled/>
            </div>
        )
    }
}