import React, { useState } from 'react';
import './BudgetTracker.css';
import { useNavigate } from 'react-router-dom';
import Budget from './Budget.js'
import Saved from './Saved.js';
import Remaining from './Remaining.js';  
import TransactionForm from './BudgetTracker/TransactionForm.js'

function HomePage() {

  let dat = [
    {
      "_id": "646e6c6650231b509dad0ee6",
      "username": "user1",
      "email": "user1@example.com",
      "password": "hashedPassword",
      "goals": [
        {
          "name": "New Phone",
          "target": 1000,
          "contributions": [
            {
              "date": "2023-06-01T12:00:00Z",
              "amount": -30
            }
          ],
          "transactions": [
            {
              "date": "2023-06-01T12:00:00Z",
              "amount": -200,
              "category": "Groceries",
              "title": "Grocery Store",
              "description": "Groceries for the week"
            },
            {
              "date": "2023-06-03T12:00:00Z",
              "amount": -45,
              "category": "Bills",
              "title": "Electricity Bill",
              "description": "Monthly electricity bill"
            },
            {
              "date": "2023-06-05T12:00:00Z",
              "amount": -30,
              "category": "Transportation",
              "title": "Fuel",
              "description": "Fueling the car"
            },
            {
              "date": "2023-06-07T12:00:00Z",
              "amount": -60,
              "category": "Dining",
              "title": "Restaurant",
              "description": "Dinner at a restaurant"
            },
            {
              "date": "2023-06-09T12:00:00Z",
              "amount": -30,
              "category": "Bills",
              "title": "Internet Bill",
              "description": "Monthly internet bill"
            },
            {
              "date": "2023-06-02T12:00:00Z",
              "amount": -800,
              "category": "Rent",
              "title": "Rent",
              "description": "Monthly rent payment"
            },
            {
              "date": "2023-06-13T12:00:00Z",
              "amount": -100,
              "category": "Health",
              "title": "Pharmacy",
              "description": "Medicine and health products"
            },
            {
              "date": "2023-06-15T12:00:00Z",
              "amount": -50,
              "category": "Entertainment",
              "title": "Movies",
              "description": "Movie tickets and snacks"
            },
            {
              "date": "2023-06-17T12:00:00Z",
              "amount": -150,
              "category": "Clothing",
              "title": "Clothing",
              "description": "Bought new clothes"
            },
            {
              "date": "2023-06-19T12:00:00Z",
              "amount": -70,
              "category": "Transportation",
              "title": "Public Transport",
              "description": "Public transport card top-up"
            },
            {
              "date": "2023-06-21T12:00:00Z",
              "amount": -40,
              "category": "Entertainment",
              "title": "Book Purchase",
              "description": "Bought new books"
            },
            {
              "date": "2023-06-23T12:00:00Z",
              "amount": -120,
              "category": "Health",
              "title": "Gym Membership",
              "description": "Monthly gym membership fee"
            },
            {
              "date": "2023-06-25T12:00:00Z",
              "amount": -60,
              "category": "Dining",
              "title": "Dinner Date",
              "description": "Dinner at a restaurant"
            },
            {
              "date": "2023-06-27T12:00:00Z",
              "amount": -50,
              "category": "Bills",
              "title": "Water Bill",
              "description": "Monthly water bill"
            },
            {
              "date": "2023-06-01T12:00:00Z",
              "amount": 1950,
              "category": "Income",
              "title": "Pay Day",
              "description": "Monthly salary"
            },
            {
              "date": "2023-06-13T12:00:00Z",
              "amount": 430,
              "category": "Income",
              "title": "Tax Returns",
              "description": "Tax returns"
            },
            {
              "date": "2023-06-29T12:00:00Z",
              "amount": 550,
              "category": "Income",
              "title": "Bonus",
              "description": "Bonus"
            }
          ]
        }
      ]
    }
  ];

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

    const cancelTransaction = () => {
      console.log("canceled");
      setDisplayComponent(prev => !prev);
      setdisplayNewComponentButton(true);
    };

    const handleFormSubmit = (formData) => {
      console.log('Form data submitted:', formData);
      setdisplayNewComponentButton(true);

      // Create a new transaction object from the form data
      const newTransaction = {
        title: formData.title,
        category: formData.category,
        description: formData.description,
        date: formData.date,
        amount: formData.amount,
      };

      // Update the transactions list by adding the new transaction
      const updatedTransactions = [...transactions, newTransaction];

      // Sort the updated transactions by date in descending order
      updatedTransactions.sort((a, b) => new Date(b.date) - new Date(a.date));

      // Update the state with the new transactions list and selected transaction
      setTransactions(updatedTransactions);
      setSelectedTransaction(newTransaction);

      // Toggle the display of the component and the new component button
      setDisplayComponent(prev => !prev);
      setdisplayNewComponentButton(true);
    };

    const [displayComponent, setDisplayComponent] = useState(false);
    const [displayNewComponentButton, setdisplayNewComponentButton] = useState(true);

    const NewTransaction = () => <div className="rightBudget" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <TransactionForm cancelNewTrans = {cancelTransaction} onSubmit={handleFormSubmit}  />
    </div>;

    const newTransClick = () => {
      setDisplayComponent(prev => !prev);
      setdisplayNewComponentButton(false);
    };


    const [transactions, setTransactions] = useState(dat[0].goals[0].transactions);
      
    // Sort the transactions by date in descending order.
    transactions.sort((a, b) => new Date(b.date) - new Date(a.date));

    const [selectedTransaction, setSelectedTransaction] = useState(transactions[0]);
    const [selectedTransactionIndex, setSelectedTransactionIndex] = useState(0);

    const date = new Date(selectedTransaction.date);

    const options = { month: 'short' };
    const month = new Intl.DateTimeFormat('en-US', options).format(date); // "Jun"
    const day = date.getDate(); // 1
    const year = date.getFullYear();

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

        <div className = 'cardsOuterBudget'>
            <div className='innerTopBudget'>
              <div className = 'topBudget'>
                <div className = 'card card1Budget'><div className = 'cardInner'>
                  <Remaining></Remaining>
                </div></div>
                <div className = 'card card2Budget'><div className = 'cardInner'>
                  <Saved></Saved>
                </div></div>
                <div className = 'card card3Budget'><div className = 'cardInner'>
                  <Budget></Budget>
                </div></div>
              </div>
            </div>
              <div className = 'bottomBudget'>
                <div className = 'leftBudget'>
                  <div className = 'newTransaction'>
                    <div className='newTransactionInner'>
                      <div className = 'addTransactionLabel'>TRANSACTION</div>
                      {displayNewComponentButton && (
                        <button className='addTransaction' onClick={newTransClick}>+</button>
                      )}
                    </div>
                  </div>
                  <div className = 'leftBudgetInner'>
                      {transactions.map((transaction, index) => (
                        <div className='transactionSelection' onClick={() => {
                          setSelectedTransaction(transaction);
                          setSelectedTransactionIndex(index);
                        }}
                        style={
                          index === selectedTransactionIndex
                            ? { boxShadow: "inset 0 0 0 0.5px #83D4FF", backgroundColor: "#212332", borderRadius: "15px"}
                            : {}
                        }>
                          <div className='transactionSelectionInner'>
                              <div className='stripe'>
                                  <div className='stripeInner'></div>
                              </div>
                              <div className='selectionContent'>
                                  <div className='selectionTitle'>{transaction.title.toUpperCase()}</div>
                                  <div className='selectionCategory'>{transaction.category.toUpperCase()}</div>
                              </div>
                              <div className='selectionAmount'>
                                <div className={`selectionAmount ${parseFloat(transaction.amount) > 0 ? 'positive' : 'negative'}`}>
                                    {parseFloat(transaction.amount) > 0 ? `+ $${transaction.amount}` : `- $${Math.abs(transaction.amount)}`}
                                </div>
                              </div>
                          </div>
                      </div>
                  ))}
                  </div>

                </div>
                {displayComponent ? <NewTransaction /> : 
                <div className = 'rightBudget'>
                <div className='transactionBlock'>
                    <div className='transactionBlockInner'>
                        {selectedTransaction ? (
                            <>
                                <div className='stripeIndicator'>
                                    <div className='stripeIndicatorInner'></div>
                                </div>
                                <div className='transactionDetails'>
                                    <div className='transactionTitle'>{selectedTransaction.title.toUpperCase()}</div>
                                    <div className='transactionCategory'>{selectedTransaction.category.toUpperCase()}</div>
                                </div>
                                <div className='transactionAmountWrapper'>
                                  <div className={`transactionAmountValue ${parseFloat(selectedTransaction.amount) > 0 ? 'positive' : 'negative'}`}>
                                      {parseFloat(selectedTransaction.amount) > 0 ? `+ $${selectedTransaction.amount}` : `- $${Math.abs(selectedTransaction.amount)}`}
                                  </div>
                                </div>
                            </>
                        ) : (
                            <div>Select a transaction...</div>
                        )}
                    </div>
                </div>
                  <div className = 'transactionSelectionContent'>
                  <div className='transactionSelectionContentInner'>
                  <div className="transactionInfoLabelContainer">
                    <div className="dateLabel">DATE</div>
                    <div className="descriptionLabel">GENERAL DESCRIPTION</div>
                    <div className="amountLabel">AMOUNT</div>
                  </div>
                  {selectedTransaction ? (
                    <div className='transactionInfoContent'>
                      <div className="dateContent">
                      <div className="dateFormat">
                          <div className='month'>{month.toUpperCase()}</div>
                          <div className='day'>{day}</div>
                          <div className='year'>{year}</div>
                      </div>
                      </div>
                      <div className="descriptionContent">
                        <div className='titleInfo' style={{ textTransform: 'uppercase' }}>
                          {selectedTransaction.title}
                        </div>
                        <div className='descriptionInfo'>
                          {selectedTransaction.description}
                        </div>
                        </div>
                        <div className={`amountContent ${parseFloat(selectedTransaction.amount) > 0 ? 'positive' : 'negative'}`}>
                          {parseFloat(selectedTransaction.amount) > 0 ? `+ $${selectedTransaction.amount}` : `- $${Math.abs(selectedTransaction.amount)}`}
                        </div>
                    </div>
                  ) : (
                    <div className='transactionInfoContent'>
                      <label className="dateContent">DATE HERE</label>
                      <label className="descriptionContent">GENERAL DESCRIPTION HERE</label>
                      <label className="amountContent">AMOUNT HERE</label>
                      </div>
                  )}
                </div>
                
                

                  </div>
                </div>}
                
              </div>
        </div>
    </div>
</div>
  )
}

export default HomePage