import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js';
import './Category.css';

const Category = () => {
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

  let categoryAmounts = transactions.reduce((acc, transaction) => {
    const { category, amount } = transaction;
    if (acc[category]) {
      acc[category] += amount;
    } else {
      acc[category] = amount;
    }
    return acc;
  }, {});

  let colorBorderList = ['rgb(54, 162, 235)', 'rgb(255, 99, 132)', 'rgb(255, 229, 165)', 'rgb(120,198,121)', 'rgb(255,155,99)', 'rgb(70, 189, 198)', 'rgb(171, 48, 196)', 'rgb(255, 0, 255)', 'rgb(0, 123, 255)', 'rgb(0, 191, 165)', 'rgb(255, 223, 0)', 'rgb(147, 112, 219)', 'rgb(255, 182, 193)'];
  let colorList = ['rgba(54, 162, 235, 0.25)', 'rgba(255, 99, 132, 0.25)', 'rgba(255, 229, 165, 0.25)', 'rgba(120, 198, 121, 0.25)', 'rgba(255, 155, 99, 0.25)', 'rgba(70, 189, 198, 0.25)', 'rgba(171, 48, 196, 0.25)', 'rgba(255, 0, 255, 0.25)', 'rgba(0, 123, 255, 0.25)', 'rgba(0, 191, 165, 0.25)', 'rgba(255, 223, 0, 0.25)', 'rgba(147, 112, 219, 0.25)', 'rgba(255, 182, 193, 0.25)'];

  let totalContributions = Math.abs(transactions.reduce((total, transaction) => total + (transaction.amount < 0 ? transaction.amount : 0), 0));

  let sortedCategories = Object.entries(categoryAmounts)
  .filter(([, amount]) => amount < 0) // Include only negative amounts
  .sort((a, b) => Math.abs(b[1]) - Math.abs(a[1])); // Sort by absolute value of amount



  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    // Destroy previous chart instance
    if (chartRef.current?.chart) {
      chartRef.current.chart.destroy();
    }

    // Prepare data for the chart
    // Prepare data for the chart
    const data = {
      labels: sortedCategories.map(([category]) => category),
      datasets: [
        {
          data: sortedCategories.map(([category, amount]) => Math.abs(amount)), // Use Math.abs() to display positive amount
          backgroundColor: colorList.slice(0, sortedCategories.length),
          borderColor: colorBorderList.slice(0, sortedCategories.length),
          borderWidth: 1,
          borderAlign: 'inner',
        },
      ],
    };


    const options = {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: {
            display: false,
          },
        },
    };

    // Create the chart
    chartRef.current.chart = new Chart(ctx, {
      type: 'doughnut',
      data,
      options,
    });
  }, [sortedCategories, colorList]);

  return (
    <div className="categoryOutput">
    <div className="categoryContainer">
        <div className = 'chartContent' id="chartContainer">
            <canvas ref={chartRef} id="transactionChart"/>
        </div>

        <div className='gap'></div>

        <div className = 'categoryContent'>
          {sortedCategories.map(([category, amount], index) => {
          if (amount < 0) {
            return (
              <div className="categoryContainerInner" key={category}>
                <div className="category">
                  <div className="categoryLeft">
                    <div
                      className="percentageIcon"
                      style={{
                      background: colorList[index % colorList.length],
                      boxShadow: "inset 0 0 0 1px " + colorBorderList[index % colorList.length],
                    }}> 
                      {(Math.abs(amount) * 100 / totalContributions).toFixed(1)}% 
                    </div>
                <span>{category}: </span>
              </div>
              <span>{Math.abs(amount)}$</span> 
            </div>
            
            {/* <div className='categoryGap'>gap</div> */}
          </div>
              );
            }
            return null;
          })}

          

        </div>
    </div>
</div>
  );
};

export default Category;