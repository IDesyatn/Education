import React, {Component} from 'react';

export const uahToEur = (uah:number) =>{
    return uah * 0.0309
}

export const uahToUsd = (uah:number) =>{
    return uah * 0.0342
}

export const uahToRub = (uah:number) =>{
    return uah * 2.84
}

export const eurToUah = (eur:number) =>{
    return eur * 32.3
}

export const eurToUsd = (eur:number) =>{
    return eur * 1.11
}

export const eurToRub = (eur:number) =>{
    return eur * 91.82
}

export const usdToUah = (usd:number) =>{
    return usd * 29.25
}

export const usdToEur = (usd:number) =>{
    return usd * 0.9
}

export const usdToRub = (usd:number) =>{
    return usd * 83.09
}

export const rubToUah = (rub:number) =>{
    return rub * 0.352
}

export const rubToEur = (rub:number) =>{
    return rub * 0.01089
}

export const rubToUsd = (rub:number) =>{
    return rub * 0.01204
}