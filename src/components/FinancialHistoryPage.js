import React from 'react'
import './Dashboard.css';
import { useNavigate } from 'react-router-dom';
import workInProgress from '../images/work_in_progress_icon.PNG';


function HomePage() {

    const navigate = useNavigate();

    const navigateToDashboard = () => {
      navigate('/dashboard');
    };

    const navigateToBudgetTracker = () => {
        navigate('/budget-tracker');
    };

    const navigateToExpenseTracker = () => {
      navigate('/expense-tracker');
    };

    const navigateToFinancialGoals = () => {
      navigate('/financial-goals');
    };

    const navigateToOption5 = () => {
      navigate('/option-5');
    };

    const navigateToFinancialHistory = () => {
      navigate('/financial-history');
    };

  return (
    <div className = 'homepageOutput'>
        <div className = 'header'>here</div>

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
                <button className = 'button buttonOne' onClick={navigateToDashboard}>DASHBOARD</button>
                <button className = 'button buttonTwo' onClick={navigateToBudgetTracker}>BUDGET TRACKER</button>
                <button className = 'button buttonThree' onClick={navigateToExpenseTracker}>EXPENSE TRACKER</button>
                <hr class = 'dividerTwo'/>
                <button className = 'button buttonOne' onClick={navigateToFinancialGoals}>FINANCIAL GOALS</button>
                <button className = 'button buttonTwo' onClick={navigateToOption5}>OPTION FIVE</button>
                <button className = 'button buttonThree' onClick={navigateToFinancialHistory}>FINANCIAL HISTORY</button>
            </div>
        </div>

        <div className = 'cardsOuter'>
            <div className = 'cardsInner'>
              <img
                  className="workInProgress"
                  style={{ width: '15%' }} 
                  src={workInProgress}
                  alt="workInProgress Icon"
                />
            </div>
        </div>
    </div>
</div>
  )
}

export default HomePage