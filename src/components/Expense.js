import React from 'react';
import './Expense.css';

function Expense({ income, expense }) {
    return (
        <div>
            <h2>Your Balance</h2>
            <div className='balance-val'>Rs.{income - expense}</div>
            <div className='row row-expense'>
                <div className='col col-income'>
                    <span>
                        <h3>Income</h3>
                        <div className='income-text'>Rs.{income}</div>
                    </span>
                </div>
                <div className='col col-expense'>
                <span>
                    <h3>Expense</h3>
                    <div className='expense-text'>Rs.{expense}</div>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Expense;