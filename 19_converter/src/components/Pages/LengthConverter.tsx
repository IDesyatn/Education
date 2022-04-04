import React from 'react';
import { LeftField } from '../ConvertComponent/GeneralComponents/LeftField';
import { RightField } from '../ConvertComponent/GeneralComponents/RightField';
import { ConfirmButton } from '../ConvertComponent/GeneralComponents/ConfirmButton';
import { UnitLeftLength } from '../ConvertComponent/LengthComponents/UnitLeftLength';
import { UnitRightLength } from '../ConvertComponent/LengthComponents/UnitRightLength';

export default function LengthConverter(){
    return <div className="container">
    <h2 className="title">Length converter </h2>
    <div className="panel">
                  <LeftField/>
                  <RightField/>
                </div>
                <div className='select_block'>
                    <UnitLeftLength />
                    <UnitRightLength /> 
                </div>
              <ConfirmButton/>

  </div>
}