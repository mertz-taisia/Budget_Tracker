import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard.js';
import BudgetTrackerPage from './components/BudgetTrackerPage.js';
import ExpenseTrackerPage from './components/ExpenseTrackerPage.js';


import FinancialGoalsPage from './components/FinancialGoalsPage.js';
import Option5Page from './components/Option5Page.js';
import FinancialHistoryPage from './components/FinancialHistoryPage.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/budget-tracker" element={<BudgetTrackerPage />} />
        <Route path="/expense-tracker" element={<ExpenseTrackerPage />} />
        
        <Route path="/financial-goals" element={<FinancialGoalsPage />} />
        <Route path="/option-5" element={<Option5Page />} />
        <Route path="/financial-history" element={<FinancialHistoryPage />} />

        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
