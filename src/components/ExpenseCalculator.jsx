import { useState } from 'react';
import FixedExpenseForm from './FixedExpenseForm';
import RemainingBudgetDisplay from './RemainingBudgetDisplay';

const ExpenseCalculator = () => {
  const [totalBudget, setTotalBudget] = useState(0);
  const [fixedExpenses, setFixedExpenses] = useState([]);
  const [daysRemaining, setDaysRemaining] = useState(30);

  const calculateBudget = () => {
    const totalFixed = fixedExpenses.reduce((sum, e) => sum + e.amount, 0);
    const remaining = totalBudget - totalFixed;
    return {
      remainingTotal: remaining,
      dailyBudget: remaining / daysRemaining,
      mealsPerDay: (remaining / daysRemaining) / 3
    };
  };

  const handleDeleteExpense = (expenseId) => {
    setFixedExpenses(fixedExpenses.filter(expense => expense.id !== expenseId));
  };

  return (
    <div className="w-full bg-white rounded-xl shadow-lg p-4 sm:p-6">
      <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">
       Money Calculator 
      </h1>

      <div className="space-y-4">
        <div className="bg-gray-50 p-4 rounded-lg space-y-3">
          <div>
            <label className="text-lg font-semibold block  text-gray-600 mb-1">💰 เงินทั้งหมด</label>
            <input
              type="number"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
              value={totalBudget}
              onChange={(e) => setTotalBudget(Number(e.target.value))}
            />
          </div>

          <div>
            <label className="text-lg font-semibold block  text-gray-600 mb-1">📅 วันที่เหลือ</label>
            <input
              type="number"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
              value={daysRemaining}
              onChange={(e) => setDaysRemaining(Number(e.target.value))}
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
    </div>
  );
};

export default ExpenseCalculator; 