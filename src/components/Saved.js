import React from 'react'
import './Saved.css';
import savedIcon from '../images/saved_icon.PNG';

function Saved() {
    let saved = 350;

  return (
    <div className='parentOutput'>
        <div className = 'savedOutput'>
            <div className = 'savedIcon'>
              <img className = 'savedImageInput' src={savedIcon} alt='Saved Icon'/>
            </div>
            <div className = 'savedContent'>
                <label className='savedInput'>${saved}</label>
                <label className='savedLabel'>SAVED THIS MONTH</label>
            </div>
        </div>
    </div>
  )
}

export default Saved