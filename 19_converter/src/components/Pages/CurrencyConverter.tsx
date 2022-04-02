import React from 'react';
import { UnitLeftCurrency } from '../ConvertComponent/CurrencyComponents/UnitLeftCurrency';
import { UnitRightCurrency } from '../ConvertComponent/CurrencyComponents/UnitRigthCurrency';
import { ConfirmButton } from '../ConvertComponent/GeneralComponents/ConfirmButton';
import { LeftField } from '../ConvertComponent/GeneralComponents/LeftField';
import { RightField } from '../ConvertComponent/GeneralComponents/RightField';

export default function LengthConverter(){
    return <div className="container">
    <h2 className="title">Currency corverter</h2>
              <div className="panel">
                  <LeftField/>
                  <UnitLeftCurrency />
                  <RightField/>
                  <UnitRightCurrency /> 
              </div>
              <ConfirmButton/>

  </div>
}