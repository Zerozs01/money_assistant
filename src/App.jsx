import ExpenseCalculator from './components/ExpenseCalculator';


function App() {
  return (
    <div className="min-h-screen w-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl mx-auto lg:max-w-4xl xl:max-w-6xl">
        <ExpenseCalculator />
      </div>
    </div>
  );
}

export default App;
