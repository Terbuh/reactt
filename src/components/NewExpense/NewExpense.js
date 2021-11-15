import React, {useState} from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpenses.css';

const NewExpense = (props) => {

    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };

    const startEditingHandle = () => {
        setIsEditing(true);
    };

    const stopEditingHandle = () => {
        setIsEditing(false);
    };

    return (
        <div className='new-expense'>
            {!isEditing && <button onClick={startEditingHandle}>Dodaj nowy wydatek</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandle} /> }
        </div>
    );
};

export default NewExpense;