import React from 'react';

import './App.css';

import ExpenseTracker from './components/ExpenseTracker';

function App() {
    return( 
        <div>
           <div><h1>Expense Tracker</h1> </div>   
            <ExpenseTracker />
        </div>)
 
}

export default App;