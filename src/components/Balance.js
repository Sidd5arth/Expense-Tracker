import "./Balance.css"
import "../App.css"
const Balance = (props) => {
    const removeAll = () =>{
        props.onRemove();
    }
  return (
    <div className="d-flex flex-column justify-content-between mt-4 styles bg-light">
            <div className="d-flex justify-content-between mb-4">
            <div>
            <p className="text-style2-balance m-0">YOUR BALANCE</p>
            <h2 className="text-style-balance1 m-0 p-0">Rs {props.balance}</h2>
            </div>
            <button className="btn p-3 text-style-button" onClick={removeAll}>Clear all transactions</button>
            </div>
            <div className='shadow-sm mb-2 d-flex p-3 justify-content-center bg-white align-items-center'>
                <div className='px-4 py-1'>
                    <p className="text-style2 m-0">INCOME</p>
                    <p className="text-success text-style-balance m-0">Rs {props.income}</p>
                </div>
                <div className="lg-dark line mx-3"></div>
                <div className='px-4 py-1'>
                    <p className="text-style2 m-0">EXPENSE</p>
                    <p className="text-danger text-style-balance m-0">Rs {props.expense}</p>
                </div>
            </div>
        </div>
  )
}

export default Balance;
