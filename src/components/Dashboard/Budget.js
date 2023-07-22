import React from 'react'
import './Budget.css';
import budgetIcon from '../../images/budget_icon.PNG';


function Budget() {
    let budget = 2000;

  return (
    <div className='parentOutput'>
        <div className = 'budgetOutput'>
            <div className = 'budgetIcon'>
              <img className = 'budgetImageInput' src={budgetIcon} alt='Budget Icon'/>
            </div>
            <div className = 'budgetContent'>
                <label className='budgetInput'>${budget}</label>
                <label className='budgetLabel'>MONTHLY BUDGET</label>
            </div>
        </div>
    </div>
  )
}

export default Budget