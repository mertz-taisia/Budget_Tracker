import React from 'react';
import './BudgetBar.css';

const BudgetBars = () => {
    const totalSpent = 1300;
    const totalSaved = 450;
    const totalNecessaryExpenses = 200;

    const totalBudget = 2000;
    const totalSavedBudget = 550;
    const totalNecbudget = 900;

    const remainingBudget = totalBudget - totalSpent;
    const remainingSavings = totalSavedBudget - totalSaved;
    const remainingNecExpenses = totalNecbudget - totalNecessaryExpenses;
    
    

  const barStyles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      width: '100%',
      height: '100%',
    },
    barContainer: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      marginBottom: '0.5vh',
    },
    barLabel: {
      alignSelf: 'flex-start',
      color: 'aliceblue',
      fontSize: '0.65em',
      marginBottom: '0.25vh',
    },
    bar: {
      width: '100%',
      height: '20px',
    },
    budgetBar: {
        background: `linear-gradient(to right, rgba(54, 162, 235, 0.25) ${totalSpent / totalBudget * 100}%, #212332 0%)`,
        border: `0.5px solid rgba(54, 162, 235, 0.75)`,
    },
    savingsBar: {
        background: `linear-gradient(to right, rgba(255, 99, 132, 0.25) ${totalSaved / totalSavedBudget * 100}%, #212332 0%)`,
        border: `0.5px solid rgba(255, 99, 132, 0.75)`,
    },
    expensesBar: {
        background: `linear-gradient(to right, rgba(255, 229, 165, 0.25) ${totalNecessaryExpenses / totalNecbudget * 100}%, #212332 0%)`,
        border: `0.5px solid rgba(255, 229, 165, 0.6)`,
    },
    labels: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
      marginTop: '2px',
    },
    label: {
      color: 'grey',
      fontSize: '0.5em',
    },
  };

  return (
    <div className='budgetBarsOut'>
      <div className='innerBarsContainer'>
        <div className='bars' style={barStyles.container}>
          <div style={barStyles.barContainer}>
            <span style={barStyles.barLabel}>SPENT</span>
            <div style={{ ...barStyles.bar, ...barStyles.budgetBar }} />
            <div style={barStyles.labels}>
              <span style={barStyles.label}>{totalSpent}</span>
              <span style={barStyles.label}>{remainingBudget}</span>
            </div>
          </div>
          <div style={barStyles.barContainer}>
            <span style={barStyles.barLabel}>SAVED</span>
            <div style={{ ...barStyles.bar, ...barStyles.savingsBar }} />
            <div style={barStyles.labels}>
              <span style={barStyles.label}>{totalSaved}</span>
              <span style={barStyles.label}>{remainingSavings}</span>
            </div>
          </div>
          <div style={barStyles.barContainer}>
            <span style={barStyles.barLabel}>NECESSARY EXPENSES</span>
            <div style={{ ...barStyles.bar, ...barStyles.expensesBar }} />
            <div style={barStyles.labels}>
              <span style={barStyles.label}>{totalNecessaryExpenses}</span>
              <span style={barStyles.label}>{remainingNecExpenses}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};  

export default BudgetBars;
