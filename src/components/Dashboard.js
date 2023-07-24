import React from 'react'
import './Dashboard.css';
// import styles from './Dashboard.module.css';
import Transactions from './Dashboard/Transactions.js';
import Goals from './Dashboard/Goals.js';
import Category from './Dashboard/Category.js';
import Budget from './Budget.js'
import Saved from './Saved.js';
import Remaining from './Remaining.js';
import BudgetBar from './Dashboard/BudgetBar.js';
import LineChartComponent, { MyChart } from './Dashboard/LineChartComponent.js';
import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


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
                <button className = 'button buttonThree' onClick={navigateToExpenseTracker}>EXPENSE TRACKER</button>
                <button className = 'button buttonTwo' onClick={navigateToBudgetTracker}>BUDGET TRACKER</button>
                <hr class = 'dividerTwo'/>
                <button className = 'button buttonOne' onClick={navigateToFinancialGoals}>FINANCIAL GOALS</button>
                <button className = 'button buttonTwo' onClick={navigateToOption5}>OPTION FIVE</button>
                <button className = 'button buttonThree' onClick={navigateToFinancialHistory}>FINANCIAL HISTORY</button>
            </div>
        </div>

        <div className = 'cardsOuter'>
            <div className = 'cardsInner'>
                <div className = 'left'>
                    <div className = 'top'>
                        <div className = 'card card1'><div className = 'cardInner'>
                            <Remaining></Remaining>
                        </div></div>
                        <div className = 'card card2'><div className = 'cardInner'>
                            <Saved></Saved>
                        </div></div>
                        <div className = 'card card3'><div className = 'cardInner'>
                            <Budget></Budget>
                        </div></div>
                    </div>
                    <div className = 'middle'>
                        <div className = 'card card4'><div className = 'cardInner'>
                            <LineChartComponent></LineChartComponent>
                        </div></div>
                        <div className = 'card card5'><div className = 'cardInner'>
                            <Category></Category>
                        </div></div>
                    </div>
                    <div className = 'bottom'>
                        <div className = 'card card6'><div className = 'cardInner'>
                            <BudgetBar></BudgetBar>
                        </div></div>
                        <div className = 'card card7'><div className = 'cardInner'>
                            <Goals></Goals>
                        </div></div>
                    </div>
                </div>

                <div className = 'right'>
                    <div className = 'card card8'><div className = 'cardInner'>
                        <Transactions></Transactions>
                    </div></div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default HomePage