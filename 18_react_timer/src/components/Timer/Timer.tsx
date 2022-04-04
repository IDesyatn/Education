import React, { useState, useContext, Component } from "react";
import PropTypes from "prop-types";
import { type } from "@testing-library/user-event/dist/type";
//import { clearInterval } from "timers";

/*type Props = {}*/;

type Props =  {};

type State ={
    time:number,
    inputTime:number,
    isActive:boolean
};


export class Timer extends Component<Props, State>{
    interval: any;

    constructor(props:Props| Readonly<Props>){
        super(props); 

        this.state ={
            isActive: false,
            inputTime:0,
            time:0,
        }
        this.interval =null
    }

    handleValueInput = (e:any):void=>{
        this.setState(()=>({inputTime:e.target.value}))    
    }


    setTimer=():void=>{  
        if(this.state.inputTime>0 && !this.state.isActive){
            this.setState(()=>({time:this.state.inputTime}))
        }
    }

    startTimer=():void=>{  
        if(this.state.time>0 && !this.state.isActive){
            this.setState(()=>({isActive:true}))
            this.interval = setInterval(this.runTimer, 1000)
        }
    }

    stopTimer=():void=>{
        this.setState(()=>({isActive:false}))
        clearInterval(this.interval);
    }
    

    resetTimer=():void=>{
        this.setState(()=>({time:0, isActive:false}));
        clearInterval(this.interval);
    }

    runTimer=():void=>{
        let seconds = this.state.time; 
        seconds--; 
        if(seconds===0){
            clearInterval(this.interval); 
            this.setState({
                isActive:false 
            })
        }
        this.setState(({
            time:seconds
        }
        ))
    }

    formatTime = (time:any) => (time < 10 ? `0${time}` : time);

    getTimeInMin = () =>{
        const time = this.state.time;
        let hours = Math.floor(time / 60 / 60);
        let minutes = Math.floor((time / 60) % 60);
        let seconds = time % 60;
    
        seconds = this.formatTime(seconds);
        minutes = this.formatTime(minutes);
        hours = this.formatTime(hours);
    
        return `${hours}:${minutes}:${seconds}`;
    }
    
    render(){
        return(
            <div className="">
                <div>
                <input type="number" onChange={this.handleValueInput} placeholder ='write time in seconds'/>
                </div>
                <div>
                    <p>Time: {this.getTimeInMin()}</p>
                </div>
                <button onClick={this.setTimer}>Set</button>
                <button onClick={this.stopTimer}>Stop</button>
                <button onClick={this.startTimer}>Start</button>
                <button onClick={this.resetTimer}>Reset</button>


            </div>
        )
    }

}