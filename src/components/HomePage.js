import React from 'react'
import './HomePage.css';

function HomePage() {
  return (
    <div>
        <div className = 'header'></div>

        <div className = 'body'>
            <div className = 'menu'>
                <div className = 'menuContent'>
                    <div className = 'userInfo'>
                        <div className = "userID">TM</div>
                        <div className = "username">Taisia Mertz</div>
                    </div>

                    <hr class="line1"/> 
                    <div className = "dashboard">Dashboard</div>
                    <div className = "option1">Option 2</div>
                    <div className = "option2">Option 3</div>
                    <hr class="line2"/> 
                    <div className = "option4">Option 4</div>
                    <div className = "option5">Option 5</div>
                    <div className = "option6">Option 6</div>
                </div>
            </div>

            <div className = 'content'>
                <div className = 'subContent1'>
                    <div className = 'card1'>
                        <div className = 'icon1'></div>
                    </div>
                    <div className = 'card2'>
                        <div className = 'icon1'></div>
                    </div>
                    <div className = 'card3'>
                        <div className = 'icon1'></div>
                    </div>
                </div>

                <div className = 'subContent2'>
                    <div className = 'subContent2_1'>
                        <div className = 'subContent2_1_1'>
                            <div className = 'card1'></div>
                            <div className = 'card2'></div>
                        </div>

                        <div className = 'subContent2_1_2'>
                            <div className = 'card1'></div>
                            <div className = 'card2'></div>
                        </div>
                    </div>

                    <div className = 'subContent2_2'>
                        <div className = 'card1'></div>
                        <div className = 'card2'></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomePage