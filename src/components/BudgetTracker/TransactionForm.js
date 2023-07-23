import React, { useState } from 'react';
import './TransactionForm.css';

const TransactionForm = ({ onSubmit, cancelNewTrans }) => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    date: '',
    amount: null,
  });

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
    // Call the onSubmit function with the form data when the form is submitted
    onSubmit(formData);

    // Clear the form data after submission
    setFormData({
      title: '',
      category: '',
      description: '',
      date: '',
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
                value={formData.category}
                onChange={handleInputChange}
                required
              >
                <option value="">Select a transaction type</option>
                <option value="Category 1">Expense</option>
                <option value="Category 2">Earning</option>
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
