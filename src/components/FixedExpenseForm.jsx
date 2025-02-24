import { useState } from 'react';
import PropTypes from 'prop-types';

function FixedExpenseForm({ onAddExpense }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !amount) return;

    onAddExpense({
      id: Date.now().toString(),
      description,
      amount: Number(amount)
    });

    setDescription('');
    setAmount('');
  };

  return (
    <div className="bg-white p-4 rounded-lg border border-gray-100 space-y-3">
      <h2 className="text-lg font-semibold text-gray-700">➕ Fix cost</h2>
      <form onSubmit={handleSubmit} className="space-y-2">
        <div>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="ชื่อรายการ"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
          />
        </div>
        <div>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="จำนวนเงิน (บาท)"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white p-3 rounded-lg font-medium 
                   hover:from-blue-600 hover:to-blue-700 transition-all shadow-md hover:shadow-lg"
        >
          เพิ่มรายการ
        </button>
      </form>
    </div>
  );
}

FixedExpenseForm.propTypes = {
  onAddExpense: PropTypes.func.isRequired
};

export default FixedExpenseForm; 