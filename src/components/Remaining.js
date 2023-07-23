import React from 'react';
import './Remaining.css';
import spentIcon from '../images/spent_icon.PNG';

function Remaining() {
  let remaining = 700;

  return (
    <div className='parentOutput'>
      <div className='remainingOutput'>
        <div className='remainingIcon'>
          <img className = 'remainingImageInput' src={spentIcon} alt='Spent Icon'/>
        </div>
        <div className='remainingContent'>
          <label className='remainingInput'>${remaining}</label>
          <label className='remainingLabel'>REMAINING BUDGET</label>
        </div>
      </div>
    </div>
  );
}

export default Remaining;
