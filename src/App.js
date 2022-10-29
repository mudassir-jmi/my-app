import React from 'react';
import Expenses from "./components/Expenses";
const App = () => {
  // let expenseDate = new Date(2022, 10, 28);
  // let expenseTitle = "School Fee";
  // let expenseAmount = 300;
  let expenses = [
    {
      id: 'e1',
      title: 'School Fee',
      amount: 250,
      date: new Date(2022, 10, 28)
    },
    {
      id: 'e2',
      title: 'Books',
      amount: 230,
      date: new Date(2022, 10, 28)
    },
    {
      id: 'e3',
      title: 'House Rent',
      amount: 700,
      date: new Date(2022, 10, 28)
    },
    {
      id: 'e4',
      title: 'Food',
      amount: 500,
      date: new Date(2022, 10, 28)
    },
  ]
  return (
    <div>
      <h2>Let's Get Start</h2>
      <Expenses item={expenses}/>
    </div>
      
  );
}
export default App;