import React from 'react';
import { LeftField } from '../ConvertComponent/GeneralComponents/LeftField';
import { RightField } from '../ConvertComponent/GeneralComponents/RightField';
import { ConfirmButton } from '../ConvertComponent/GeneralComponents/ConfirmButton';
import { UnitLeftLength } from '../ConvertComponent/LengthComponents/UnitLeftLength';
import { UnitRightLength } from '../ConvertComponent/LengthComponents/UnitRightLength';

export default function LengthConverter(){
    return <div className="container">
    <h2 className="title">Converter length</h2>
              <div className="panel">
                  <LeftField/>
                  <UnitLeftLength />
                  <RightField/>
                  <UnitRightLength /> 
              </div>
              <ConfirmButton/>

  </div>
}