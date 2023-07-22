import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chartjs-adapter-date-fns';
import 'chartjs-adapter-moment';
import './LineChartComponent.css';
import { format } from 'date-fns';


const LineChartComponent = () => {
  const [chartData, setChartData] = useState(null);

  let data = [
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
              "category": "Utilities",
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
              "category": "Utilities",
              "title": "Internet Bill",
              "description": "Monthly internet bill"
            },
            {
              "date": "2023-06-02T12:00:00Z",
              "amount": -800,
              "category": "Housing",
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
              "category": "Shopping",
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
              "category": "Utilities",
              "title": "Water Bill",
              "description": "Monthly water bill"
            },
            {
              "date": "2023-06-01T12:00:00Z",
              "amount": 1950,
              "category": "Salary",
              "title": "Pay Day",
              "description": "Monthly salary"
            },
            {
              "date": "2023-06-13T12:00:00Z",
              "amount": 430,
              "category": "Taxes",
              "title": "Tax Returns",
              "description": "Tax returns"
            }
          ]
        }
      ]
    }
  ];
  
  

  useEffect(() => {
    if (data && data.length > 0) {
      let transactions = [];
  
      for (let goal of data[0].goals) {
        transactions.push(...goal.transactions);
      }
  
      // Sort transactions by date
      transactions.sort((a, b) => new Date(a.date) - new Date(b.date));
  
      const dates = [];
      const amountsEarned = [];
      const amountsSpent = [];
  
      for (let transaction of transactions) {
        dates.push(new Date(transaction.date).toLocaleDateString());
        if (transaction.amount >= 0) {
          amountsEarned.push(transaction.amount);
          amountsSpent.push(null);
        } else {
          amountsEarned.push(null);
          amountsSpent.push(Math.abs(transaction.amount));
        }
      }
  
      setChartData({
        labels: dates,
        datasets: [
          {
            label: 'Earned',
            data: amountsEarned,
            fill: false,
            backgroundColor: 'rgba(54, 162, 235, 0.25)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
          },
          {
            label: 'Spent',
            data: amountsSpent,
            fill: false,
            backgroundColor: 'rgba(255, 99, 132, 0.25)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
          },
        ],
      });
    }
  }, [data]);

  return (
    <div className='lineChartResult'>
      {chartData && (
        <Bar
          data={chartData}
          options={{
            responsive: true,
            scales: {
              x: {
                type: 'time',
                time: {
                  unit: 'day',
                  tooltipFormat: 'MMMM'
                },
                title: {
                  display: true,
                  text: format(new Date(), 'MMMM') // current month's name
                },
                ticks: {
                  callback: function (value, index, values) {
                    return new Date(value).getDate();
                  }
                }
              },
              y: {
                title: {
                  display: true,
                  text: 'Amount ($)'
                }
              }
            },
          }}
        />
      )}
    </div>
  );
};

export default LineChartComponent;