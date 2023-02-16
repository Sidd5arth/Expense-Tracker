import { useState } from 'react';
import './App.css';
import Balance from './components/Balance.js';
import History from './components/History.js';
import Transactions from './components/Transaction.js';

function App() {
  const [value, setValue] = useState([]);
  const [balance, setBalance] = useState(0);
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);


  const removeHandler = () =>{
    setValue([]);
    setBalance(0);
    setExpense(0);
    setIncome(0);
  }
  
  const newInput = (inputName, inputAmount, key, colorState) =>{
    console.log(inputName);

    const newValue = {
      nameValue: inputName,
      amountValue: inputAmount,
      id: key,
      color:colorState,
    }
    var num = [...value, newValue]
    setValue(num);

    let actualValue = 0;
      num.map((val) =>{
          actualValue += +(val.amountValue);
          setBalance(actualValue);
          return 0;
      })
      if(Number(inputAmount) <= 0){
          setExpense(prevExpense => prevExpense + (-Number(inputAmount)));
      }
      else{
          setIncome(prevIncome => prevIncome + Number(inputAmount));
      }
  }

  return (
    <div className="App mt-2">
      <h2 className='text-style'>Expense Tracker</h2>
      <div className="flex-row justify-content-between mt-4 p-3 bg-light">
          <Balance 
          balance={balance} 
          income={income} 
          expense={expense} 
          onRemove={removeHandler}
          />
          <History value = {value}/>
          <Transactions onSaveInput={newInput}/>
      </div>
      </div>
  );
}

export default App;
