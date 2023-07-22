import React from 'react';
import './Transactions.css';
import billsIcon from '../../images/bills_icon.PNG';
import charityIcon from '../../images/charity_icon.PNG';
import clothingIcon from '../../images/clothing_icon.PNG';
import diningIcon from '../../images/dining_icon.PNG';
import educationIcon from '../../images/education_icon.PNG';
import entertainmentIcon from '../../images/entertainment_icon.PNG';
import groceriesIcon from '../../images/groceries_icon.PNG';
import healthIcon from '../../images/health_icon.PNG';
import insuranceIcon from '../../images/insurance_icon.PNG';
import investmentIcon from '../../images/investment_icon.PNG';
import otherIcon from '../../images/other_icon.PNG';
import physicalFitnessIcon from '../../images/physical_fitness_icon.PNG';
import rentIcon from '../../images/rent_icon.PNG';
import salaryIcon from '../../images/salary_icon.PNG';
import savingsIcon from '../../images/savings_icon.PNG';
import spentIcon from '../../images/spent_icon.PNG';
import travelIcon from '../../images/travel_icon.PNG';
import transportationIcon from '../../images/transportation_icon.PNG';
import walletIcon from '../../images/wallet_icon.PNG';

const Transactions = () => {
  const icons = {
    'Bills': billsIcon,
    'Charity': charityIcon,
    'Clothing': clothingIcon,
    'Dining': diningIcon,
    'Education': educationIcon,
    'Entertainment': entertainmentIcon,
    'Groceries': groceriesIcon,
    'Health': healthIcon,
    'Insurance': insuranceIcon,
    'Investment': investmentIcon,
    'Other': otherIcon,
    'Physical Fitness': physicalFitnessIcon,
    'Rent': rentIcon,
    'Income': salaryIcon,
    'Savings': savingsIcon,
    'Spent': spentIcon,
    'Travel': travelIcon,
    'Transportation': transportationIcon,
    'Wallet': walletIcon
};

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
    
      let transactions = dat[0].goals[0].transactions;
      
    // Sort the transactions by date in descending order.
    transactions.sort((a, b) => new Date(b.date) - new Date(a.date));

    // Parse and format the date strings.
    transactions.forEach(transaction => {
        let date = new Date(transaction.date);
        transaction.date = date.toISOString().split('T')[0];
    });

    return (
      <div className="output">
          <div className="transactions">
              {transactions.map(transaction => (
                  <div className="transaction">
                      <div className="leftSideContent">
                          <div className="icon">
                              <img className = 'innerIcon' src={icons[transaction.category]} alt={transaction.category} />
                          </div>
                          <div className="info">
                              <label className="title">{transaction.title}</label>
                              <label className="date">{transaction.date}</label>
                          </div>
                      </div>
                      <div className="rightSideContent">
                          <label className="cost" style={{color: transaction.amount < 0 ? 'rgb(255, 99, 132)' : 'rgb(120,198,121)'}}>
                              {transaction.amount > 0 ? `+${transaction.amount}` : transaction.amount}
                          </label>
                      </div>
                  </div>
              ))}
          </div>
      </div>
    )
}

export default Transactions