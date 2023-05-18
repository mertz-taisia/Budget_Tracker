import React from 'react'
import './Homepage.css';

function HomePage() {
  return (
    <div>
        <div className = 'header'></div>

        <div className = 'body'>
            <div className = 'sideBar'>
                <div className = 'userInfo'>
                    <div className = 'userIcon'>TM</div>

                    <div className = 'userText'>
                        <div className = 'username'>Taisia Mertz</div>
                        <div className = 'userStatus'>
                            <div className = 'statusIcon'></div>
                            <div className = 'statusText'>Online</div>
                        </div>
                    </div>
                </div>

                    <hr class = 'dividerOne'/>
                    
                    <div className = 'buttons'>
                        <button className = 'button buttonOne'>Dashboard</button>
                        <button className = 'button buttonTwo'>Option Two</button>
                        <button className = 'button buttonThree'>Option Three</button>
                        <hr class = 'dividerTwo'/>
                        <button className = 'button buttonOne'>Option Four</button>
                        <button className = 'button buttonTwo'>Option Five</button>
                        <button className = 'button buttonThree'>Option Six</button>
                    </div>
            </div>

            <div className = 'cards'>
                <div className = 'left'>
                    <div className = 'top'>
                        <div className = 'card card1'></div>
                        <div className = 'card card2'></div>
                        <div className = 'card card3'></div>
                    </div>
                    <div className = 'middle'>
                        <div className = 'card card4'></div>
                        <div className = 'card card5'></div>
                    </div>
                    <div className = 'bottom'>
                        <div className = 'card card6'></div>
                        <div className = 'card card7'></div>
                    </div>
                </div>
                <div className = 'right'>
                    <div className = 'card card8'></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomePage