import React, {Component} from 'react';

export const meterToMile = (meter:number) => {
    return meter*0.00062137
}

export const meterToYard = (meter:number) => {
    return meter*1.0936
}

export const meterToFoot = (meter:number) => {
    return meter*3.2808
}

export const meterToVerst = (meter:number) => {
    return meter/1067 
}


export const verstToMeter = (verst:number) => {
    return verst*1067 
}

export const verstToMile = (verst:number) => {
    return verst*0.6629
}

export const verstToFoot = (verst:number) => {
    return verst*3500
}

export const verstToYard = (verst:number) => {
    return verst*1167
}


export const mileToMeter = (mile:number) => {
    return mile/0.00062137
}

export const mileToVerst = (mile:number) => {
    return mile/0.6629
}

export const mileToFoot = (mile:number) => {
    return mile * 5280;
}

export const mileToYard = (mile:number) => {
    return mile * 1760;
}

export const footToMeter = (foot:number) => {
    return foot/3.2808
}

export const footToVerst = (foot:number) => {
    return foot/3500
}

export const footToMile = (foot:number) => {
    return foot * 0.00018939; 
}

export const footToYard = (foot:number) => {
    return foot * 0.33333;
}

export const yardToMeter = (yard:number) => {
    return yard/1.0936
}

export const yardToVerst = (yard:number) => {
    return yard/1167
}

export const yardToMile = (yard:number) => {
    return yard * 0.00056818;
}

export const yardToFoot = (yard:number) => {
    return yard * 3;
}
