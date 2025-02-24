import PropTypes from 'prop-types';

function RemainingBudgetDisplay({ calculation, fixedExpenses, onDeleteExpense }) {
  const { remainingTotal, dailyBudget, mealsPerDay } = calculation;

  return (
    <div className="bg-gray-50 p-4 rounded-lg space-y-2">
      <h2 className="text-lg font-semibold text-gray-700">📈 Summary</h2>
      
      <div className="space-y-4">
        <div>
          <h3 className="font-medium text-gray-600 mb-2">รายการค่าใช้จ่ายคงที่:</h3>
          {fixedExpenses.map((expense) => (
            <div 
              key={expense.id} 
              className="flex justify-between items-center py-2 px-3 bg-gray-50 rounded-md mb-2 hover:bg-gray-100 transition-colors"
            >
              <div className="flex-1">
                <span className="text-gray-700">{expense.description}</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-gray-600">{expense.amount.toFixed(2)} บาท</span>
                <button
                  onClick={() => onDeleteExpense(expense.id)}
                  className="text-red-500 hover:text-red-600 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t pt-4 space-y-3">
          <div className="flex justify-between items-center py-1">
            <span className="text-gray-600">หลังหักค่าใช้จ่าย เหลือ:</span>
            <span className="font-semibold text-blue-600 text-lg">{remainingTotal.toFixed(2)} บาท</span>
          </div>
          <div className="flex justify-between items-center py-1">
            <span className="text-gray-600">งบประมาณต่อวัน:</span>
            <span className="font-semibold text-green-600 text-lg">{dailyBudget.toFixed(2)} บาท</span>
          </div>
          <div className="flex justify-between items-center py-1">
            <span className="text-gray-600">งบประมาณต่อมื้อ (3 มื้อ):</span>
            <span className="font-semibold text-purple-600 text-lg">{mealsPerDay.toFixed(2)} บาท</span>
          </div>
        </div>
      </div>
    </div>
  );
}

RemainingBudgetDisplay.propTypes = {
  calculation: PropTypes.object.isRequired,
  fixedExpenses: PropTypes.array.isRequired,
  onDeleteExpense: PropTypes.func.isRequired
};

export default RemainingBudgetDisplay; 