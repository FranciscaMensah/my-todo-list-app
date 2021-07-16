import React, { useState } from 'react';
import './formComponent.css';


export default function TodoForm({ addTodo }) {
  //declared an object to store form input values
  const [todo, setTodo] = useState({ note: '', time: '' });

  //set todo properties to form's input values respectively
  function handleInputChange(e) {
    const { name, value } = e.target; //object destructuring 
    setTodo({
      ...todo,
      [name]: value,
    })
  }

  //passed todo object to the table component via function props 'addTodo'
  function handleFormSubmit(e) {
    e.preventDefault();
    addTodo(todo);
    //clear the input fields after submit
    setTodo({
      note: '',
      time: ''
    })
  }

  return (
    <div className="form-div">
      <form>
        <div className="input-div">
          <label htmlFor="note">Add your note</label>
          <input type="text" value={todo.note} name="note" onChange={handleInputChange} />
        </div>
        <div className="input-div">
          <label htmlFor="time">Time</label>
          <input type="text" value={todo.time} name="time" onChange={handleInputChange} id="time-input" />
        </div>
        <button type="submit" className="add-btn" onClick={handleFormSubmit}>Save</button>
      </form>
      <br />
    </div>
  );
}