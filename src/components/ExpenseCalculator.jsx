import { useState } from 'react';
import FixedExpenseForm from './FixedExpenseForm';
import RemainingBudgetDisplay from './RemainingBudgetDisplay';

const ExpenseCalculator = () => {
  const [totalBudget, setTotalBudget] = useState(0);
  const [fixedExpenses, setFixedExpenses] = useState([]);
  const [daysRemaining, setDaysRemaining] = useState(30);

  const calculateBudget = () => {
    const totalFixedExpenses = fixedExpenses.reduce((sum, expense) => sum + expense.amount, 0);
    const remainingTotal = totalBudget - totalFixedExpenses;
    const dailyBudget = remainingTotal / daysRemaining;
    const mealsPerDay = dailyBudget / 3; // สมมติว่าแบ่งเป็น 3 มื้อ

    return {
      remainingTotal,
      dailyBudget,
      mealsPerDay
    };
  };

  const handleDeleteExpense = (expenseId) => {
    setFixedExpenses(fixedExpenses.filter(expense => expense.id !== expenseId));
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        🧮 เครื่องคำนวณงบประมาณรายเดือน
      </h1>
      
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-6">
        <div className="mb-4">
          <label className="block mb-2 text-gray-600">💰 จำนวนเงินทั้งหมด (บาท)</label>
          <input
            type="number"
            value={totalBudget}
            onChange={(e) => setTotalBudget(Number(e.target.value))}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-gray-600">📅 จำนวนวันที่เหลือในเดือน</label>
          <input
            type="number"
            value={daysRemaining}
            onChange={(e) => setDaysRemaining(Number(e.target.value))}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
          />
        </div>
      </div>

      <FixedExpenseForm
        onAddExpense={(expense) => setFixedExpenses([...fixedExpenses, expense])}
      />

      <RemainingBudgetDisplay
        calculation={calculateBudget()}
        fixedExpenses={fixedExpenses}
        onDeleteExpense={handleDeleteExpense}
      />
    </div>
  );
};

export default ExpenseCalculator; 