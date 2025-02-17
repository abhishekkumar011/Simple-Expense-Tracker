"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);
  const [description, setDescription] = useState("");

  useEffect(() => {
    setExpenses(JSON.parse(localStorage.getItem("expenses")) || []);
  }, []);

  //Save expenses to local storage
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  // Add a new expense
  const addExpense = () => {
    if (
      amount.trim() !== "" &&
      description.trim() !== "" &&
      date.trim() !== ""
    ) {
      const newExpense = { amount: parseFloat(amount), description, date };
      setExpenses([...expenses, newExpense]);
      setDate("");
      setAmount("");
      setDescription("");
    }
  };

  const deleteExpense = (index) => {
    //In javaScript _ (underscore) is just a variable name. it is a convention used to indicate that the variable is not needed.
    setExpenses(expenses.filter((_, i) => i !== index));
  };

  // Calculate total expenses
  const totalAmount = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );

  return (
    <div className="max-w-2xl mx-auto mt-16 py-6 px-4 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-3xl font-sans font-semibold text-center mb-4">
        Expense Tracker
      </h1>

      <div className="flex mb-4">
        <input
          type="number"
          className="w-1/4 p-2 border rounded-l-md"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          type="text"
          className="w-2/4 p-2 border"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="date"
          className="w-1/4 p-2 border"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-r-md"
          onClick={addExpense}
        >
          Add
        </button>
      </div>

      <ul>
        {expenses.map((expense, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-white p-2 rounded-md shadow-sm mb-2"
          >
            <span>
              {expense.date} - {expense.description} - ₹{expense.amount}
            </span>
            <button
              className="bg-red-500 text-white px-2 py-1 rounded-md"
              onClick={() => deleteExpense(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <h2 className="text-xl font-semibold mt-4 text-center font-sans">
        Total : ₹{totalAmount.toFixed(2)}
      </h2>
    </div>
  );
}
