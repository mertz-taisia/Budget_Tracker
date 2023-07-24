import React, { useState, useEffect } from 'react';
import './TransactionForm.css';

const TransactionForm = ({ onSubmit, cancelNewTrans }) => {
  const today = new Date().toISOString().split('T')[0]; 

  const [formData, setFormData] = useState({
    title: '',
    category: '',
    type: '',
    description: '',
    date: today, 
    amount: null,
  });

  useEffect(() => {
    // Function to get the user's local timezone offset in minutes
    function getTimezoneOffset() {
      const now = new Date();
      return now.getTimezoneOffset();
    }

    // Function to calculate the date based on the user's local timezone
    function getLocalDate() {
      const now = new Date();
      const offsetInMinutes = getTimezoneOffset();
      return new Date(now.getTime() - offsetInMinutes * 60 * 1000).toISOString().split('T')[0];
    }

    // Set the initial value of the date field to the user's local date
    setFormData((prevFormData) => ({
      ...prevFormData,
      date: getLocalDate(),
    }));
  }, []);

  const cancelTransaction = () => {
    cancelNewTrans();
  };

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
    
      // If the type is "Expense", swap the sign of the amount value
      const modifiedAmount = formData.type === 'Expense' ? -formData.amount : formData.amount;

      console.log(formData.type)
    
      // Prepare the data to be submitted without the "type" field
      const dataToSubmit = {
        title: formData.title,
        category: formData.category,
        description: formData.description,
        date: formData.date,
        amount: modifiedAmount,
      };
    
      // Call the onSubmit function with the data to be submitted
      onSubmit(dataToSubmit);
    
      // Clear the form data after submission
      setFormData({
        title: '',
        category: '',
        type: '', // You may want to reset the "type" field as well
        description: '',
        date: today, 
        amount: null,
      });
    };
    

  return (
    <form className='newTransactionOutput' onSubmit={handleSubmit}>
      <div className='newTransactionOutputTop'>
        <button className = 'cancelTransaction' onClick={cancelTransaction}>✕</button>
        <button type="submit" className = 'confirmTransaction'>✓</button>
      </div>
      <div className='newTransactionOutputBottom'>
        <div className = 'transForm' style={{ marginTop: '2vh'}}>
          <label>Title</label>
          <input type="text"
            name="title"
            className='titleInput'
            style={{ marginBottom: '2vh'}}
            value={formData.title}
            onChange={handleInputChange}
            required
          />
          <div className='categoryAndType' style={{ marginBottom: '2vh'}}>
            <div className='categoryDivider'>
              <label>Category</label>
              <select name="category"
                className='categoryInput'
                value={formData.category}
                onChange={handleInputChange}
                required
              >
                <option value="">Select a category</option>
                <option value="Category 1">Category 1</option>
                <option value="Category 2">Category 2</option>
                <option value="Category 3">Category 3</option>
              </select>
            </div>
            <div className='typeDivider' style={{marginLeft: '1vw'}}>
              <label>Type</label>
              <select name="type"
                className='typeInput'
                value={formData.type}
                onChange={handleInputChange}
                required
              >
                <option value="">Select a transaction type</option>
                <option value="Expense">Expense</option>
                <option value="Earning">Earning</option>
              </select>
            </div>
          </div>

          <label>Description</label>
          <textarea name="description"
            className='descriptionInput'
            style={{ marginBottom: '2vh'}}
            value={formData.description}
            onChange={handleInputChange}
            required
          />
          <div className='dateAndAmount'>
            <div className='dateDivider' style={{ marginRight: '1vw'}}>
              <label>Date</label>
              <input
                type="date"
                name="date"
                className='dateInput'
                value={formData.date}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className='amountDivider' style={{ marginLeftt: '1vw'}}>
              <label>Amount</label>
              <input
                type="number"
                name="amount"
                className='amountInput'
                value={formData.amount}
                onChange={handleInputChange}
                min="0"
                step="any"
                required
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default TransactionForm;
