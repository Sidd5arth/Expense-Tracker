import React from 'react'
// import { useState } from 'react';
import './History.css'

const History = (props) => {
  // props.value.map((i)=>{
  //   console.log(i.color);
  // })
  return(
    <div className="d-flex flex-column justify-content-between mt-4 styles bg-light">
            <p className="text-style2-balance m-0 pb-2 align-items-center border-bottom border-3">History</p>
            <ul className='m-0 ul-style'>
            {props.value.map((val) => ( 
                <li key={val.id} className='mx-3'>    
                   <div className='position-relative m-0 p-0 w-100%'>
                   <div className='shadow-sm rounded d-flex px-3 py-2 pe-4 justify-content-between bg-white align-items-center mt-3'>
                        <p className="text-styles m-0">{val.nameValue}</p>
                        <p className="text-styles m-0">{val.amountValue}</p>
                   </div>
                   <div className="expense-type" style={{backgroundColor: val.color?'green':'red'}}></div>
                   </div>
                </li>
            ))}
            </ul>
    </div>
  )
}

export default History;
