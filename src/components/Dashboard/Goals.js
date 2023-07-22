import React from "react";
import { useState } from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';
import './Goals.css';


Chart.register(...registerables);

const Goals = () => {
  // Your JSON data
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
              "date": "2023-05-01T12:00:00Z",
              "amount": 30
            }, 
            {
              "date": "2023-05-07T12:00:00Z",
              "amount": 70
            }, 
            {
              "date": "2023-05-19T12:00:00Z",
              "amount": 20
            },
            {
              "date": "2023-05-20T12:00:00Z",
              "amount": 10
            },
            {
              "date": "2023-05-21T12:00:00Z",
              "amount": 50
            },
            {
              "date": "2023-05-23T12:00:00Z",
              "amount": 100
            },
            {
              "date": "2023-05-24T12:00:00Z",
              "amount": 200
            },
            {
              "date": "2023-05-25T12:00:00Z",
              "amount": 100
            }
          ]
        },
        {
          "name": "New Car",
          "target": 10000,
          "contributions": [ 
            {
              "date": "2023-05-01T12:00:00Z",
              "amount": 3000
            }, 
            {
              "date": "2023-05-07T12:00:00Z",
              "amount": 700
            }, 
            {
              "date": "2023-05-19T12:00:00Z",
              "amount": 50
            },
            {
              "date": "2023-05-20T12:00:00Z",
              "amount": 10
            }
          ]
        },
        {
          "name": "New Shoes",
          "target": 10,
          "contributions": [ 
            {
              "date": "2023-05-10T12:00:00Z",
              "amount": 3
            }, 
            {
              "date": "2023-05-17T12:00:00Z",
              "amount": 1
            }, 
            {
              "date": "2023-05-19T12:00:00Z",
              "amount": 4
            },
            {
              "date": "2023-05-20T12:00:00Z",
              "amount": 2
            }
          ]
        }
      ]
    }
  ];

  const [goalIndex, setGoalIndex] = useState(0);

  const handleClickDown = () => {
    setGoalIndex(prevGoalIndex => (prevGoalIndex + 1) % dat[0].goals.length);
  };

  const handleClickUp = () => {
    setGoalIndex(prevGoalIndex => {
        if(prevGoalIndex === 0) {
            return dat[0].goals.length - 1;
        } else {
            return prevGoalIndex - 1;
        }
    });
};

  // Extract contributions
  let contributions = dat[0].goals[goalIndex].contributions;
  let goal = dat[0].goals[goalIndex].target;
  const goalName = dat[0].goals[goalIndex].name;

  let totalContribution = contributions.reduce((acc, curr) => acc + curr.amount, 0);
  const percent = (100*totalContribution)/goal;

  // Get the first date from the contributions
  let firstDate = new Date(contributions[0].date);
  console.log(firstDate.toISOString());

  // Create a dates array filled with every date from the first contribution to the current date
  let currentDate = new Date();
  let datesArray = [];
  // Inside the loop for creating the datesArray
  for (let date = new Date(firstDate); date <= currentDate; date.setDate(date.getDate() + 1)) {
    let newDate = new Date(date);
    let formattedDate = `${newDate.getMonth() + 1}/${newDate.getDate()}/${newDate.getFullYear()}`;
    datesArray.push(newDate);
  }

  // Convert your contributions array to a dictionary for easier access
  let contributionsDict = {};
  for (let contribution of contributions) {
    let dateKey = new Date(contribution.date).toLocaleDateString();
    let contributionAmount = contribution.amount;
    if (contributionsDict[dateKey]) {
      contributionsDict[dateKey] += contribution.amount;
    } else {
      contributionsDict[dateKey] = contribution.amount;
    }
  }

  // Now fill your x_values and y_values arrays using the datesArray and contributionsDict
  let x_values = datesArray.map(date => {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return `${date.getDate()}`;
  });
  let y_values = datesArray.map(date => {
    let contributionAmount = contributionsDict[date.toLocaleDateString()] || 0;
    return contributionAmount;
  });

  const barData = {
    labels: x_values,
    datasets: [
      {
        label: 'Contribution',
        data: y_values,
        borderColor: 'rgb(120,198,121)',
        backgroundColor: 'rgba(120,198,121,0.25)',
        borderWidth: 1,
        borderRadius: 5,
        borderSkipped: false,
      }
    ]
  };

  const doughnutData = {
  labels: ['Goal Reached', 'Remaining Goal'],
  datasets: [
    {
      data: [totalContribution, goal - totalContribution],
      backgroundColor: [
        'rgba(120,198,121,0.25)',
        'rgba(0, 0, 0, 0.1)',
      ],
      borderColor: [
        'rgba(120,198,121,1)',
        'rgba(255, 255, 255, 0.1)',
      ],
      borderWidth: 1,
      borderAlign: 'inner',
    }
  ]
  };

  const bOptions = {
    aspectRatio: 1.9,
    scales: {
      x:{
        ticks: {
          font: {
            size: 10
          }
        }
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    };

  const dOptions = {
  plugins: {
    legend: {
      display: false,
    },
  },
  };

  return (
    <div className="output">
      <div className="goalContainer">
        <div className="leftSideContent">
          <div className="doughnutChartContainerStyle">
            <Doughnut data={doughnutData} options={dOptions} />
            <label className="percentLabel">{percent}%</label>
            <label className="fractionLabel">{totalContribution}/{goal}</label>
          </div>
        </div>
        <div className="rightSideContent">
          <div className="goalNav">
              <href a="" className="goalLink">{goalName}</href>
              <div className="goalNavArrows">
                <button className="iterateDown" onClick={handleClickDown}><i class="arrow down"></i></button>
                <button className="iterateUp" onClick={handleClickUp}><i class="arrow up"></i></button>
              </div>
            </div>
          <div className="barChartContainerStyle">
            <Bar data={barData} options={bOptions} />
          </div>
        </div>      
      </div>
    </div>
  );

};

export default Goals
