import React, { useState, useEffect } from 'react';
import './App.css';

import uuid from 'react-uuid';

import Alert from './Components/Alert';
import Form from './Components/Form';
import List from './Components/Lists';


// const initialExpenses = [
//   {id: uuid(), charge:"rent", amount: 1600},
//   {id: uuid(), charge:"car payment", amount: 400},
//   {id: uuid(), charge:"credit card bill", amount: 1200}
// ];

const initialExpenses = localStorage.getItem('expenses') 
  ? JSON.parse(localStorage.getItem("expenses")) 
  : [];


function App() {
  // ************************* state values ************************
  // all expenses, add expense
  const [expenses, setExpenses] = useState(initialExpenses);

  // single expense
  const [charge, setCharge] = useState("");
  // single amount
  const [amount, setAmount] = useState("");

  //alert
  const [alert ,setAlert] = useState({show: false});

  //edit
  const [edit, setEdit] = useState(false);
  //edit item
const [id, setId] = useState(0);
 
  // ************************* UseEffect ************************
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  },[expenses]);


  // ************************* functionality ************************
  const handleCharge = (event) => {
    setCharge(event.target.value);
  };
  const handleAmount = (event) => {
    setAmount(event.target.value);
  };

  //handle Alert
  const handleAlert = ({type, text}) => {
    setAlert({show: true, type, text});
    setTimeout(() => {
      setAlert({show: false});
    }, 5000)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(charge !== "" && amount > 0) {
      if(edit) {
        let tempExpenses = expenses.map(item => {
          return item.id === id ? {...item, charge, amount} : item
        });
        setExpenses(tempExpenses);
        setEdit(false);
        handleAlert({ type: "success" , text: "Item Edited" })
      } else {
        const singleExpense = { id: uuid(), charge, amount};
        setExpenses([...expenses, singleExpense]);
        handleAlert({type: "success", text: "item added"});
      }

      setCharge("");
      setAmount("");
    }else {
      //handle alert called
      handleAlert({type: "danger", text: `charge can't be empty value and amount should be greater then 0`});
    }
  }

  // clear all items
  const clearItems = () => {
    setExpenses([]);
    handleAlert({type: "danger", text: "All items deleted"});
  }

  //handle delete
  const handleDelete = (id) => {
    let tempExpenses = expenses.filter(item => item.id !== id);
    setExpenses(tempExpenses);
    handleAlert({type: "danger", text: "item-deleted"});
  }
  //handle Edit
  const handleEdit = (id) => {
    let expense = expenses.find(item => item.id === id)
    let {charge, amount} = expense;
    setCharge(charge);
    setAmount(amount);
    setEdit(true);
    setId(id);
  }

  
  return (
    <>
    {alert.show && <Alert type={alert.type} text={alert.text} />}
      <Alert />
      <h1>Budget Calculator</h1>  
      <main className="App">
        <Form charge={charge}
              amount={amount}
              handleAmount={handleAmount}
              handleCharge={handleCharge}
              handleSubmit={handleSubmit} 
              edit={edit}
          />

        <List expenses={expenses} 
              handleDelete={handleDelete} 
              handleEdit={handleEdit} 
              clearItems={clearItems} 
          />
      </main>
      <h1>Total Spending : <span className="total">
          ₹{expenses.reduce((acc, curr) => {
            return (acc += parseInt(curr.amount));
          }, 0)}
        </span>
      </h1>
    </>
  );
}

export default App;
