import { useState } from 'react';

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
    <div className="mb-6 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">➕ เพิ่มค่าใช้จ่ายคงที่</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="รายการค่าใช้จ่าย"
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

export default FixedExpenseForm; 