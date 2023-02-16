import React, { useState } from 'react'
import './Transaction.css'

const Transactions = (props) => {
    const [inputName, setInputName] = useState("");
    const [inputAmount, setInputAmount] = useState("");

    const NameChangeHandler = (event) =>{
        setInputName(event.target.value);

      }
    const AmountChangeHandler = (event) =>{
        setInputAmount(event.target.value);
        
      }
    const saveHandler = (event) =>{
    event.preventDefault();
    if(!inputAmount) return;
    if(!inputName) return;
    console.log(inputAmount);
    const id = new Date().getTime().toString()
    let colorState = true;
    if(Number(inputAmount) < 0){
      colorState = false;
    }else{
      colorState = true;
    }
    props.onSaveInput(inputName, inputAmount, id, Boolean(colorState));
    setInputName('');
    setInputAmount('');
}
// const colorHandler = () =>{
//   const id = new Date().getTime().toString()
//   props.onChangeColor(inputAmount, id);
// }

  return (
    <div className="d-flex flex-column justify-content-between mt-4 styles bg-light">
            <p className="text-style2-balance m-0 pb-2 border-bottom border-3">Add new transaction</p>
            <form onSubmit={saveHandler} className='text-style d-flex flex row p-0'>
                <div className='d-flex flex-column'>
                    <p className='m-0 mt-3 pb-2 text-style-input'><b>Text</b></p>
                    <input className='px-2 py-1' 
                    type="text" 
                    placeholder='Enter text'
                    value={inputName}
                    onChange={NameChangeHandler}
                    />
                </div>
                <div className='d-flex flex-column'>
                    <p className='m-0 mt-3 pb-2 text-style-input lh-1'><b>Amount</b> <br/> <b>(negative-expense, positive-income)</b></p>
                    <input className='px-2 py-1 mb-3' 
                    type="text" 
                    placeholder='Enter Amount'
                    value={inputAmount}
                    onChange={AmountChangeHandler}
                    />
                </div>
                <button className='px-3 py-2 btn' type="submit">Add transaction</button>
           </form>
    </div>
  )
}

export default Transactions;

