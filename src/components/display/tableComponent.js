import React, { useState } from 'react';
import TodoForm from '../form/formComponent';
import './tableComponent.css';


export default function TodoListTable() {

  const [todoList, setTodoList] = useState([]);
  const [tableHeader, setTableHeader] = useState({});

  function addTodo(newTodo) {
    //created todo object from the form component and gave it a unique id
    const todoObject = {
      id: 1 + (Math.random().toFixed(3)),
      note: newTodo.note,
      time: newTodo.time,
      isDone: false
    };
    //made a copy of the todoList and pushed in the todo object then updated todoList with the new array
    const todoListCopy = [...todoList];
    todoListCopy.push(todoObject);
    setTodoList(todoListCopy);

    //included object of table headers here so they'll be rendered when task is added
    setTableHeader({
      title: "Todo List",
      todoState: "Done?",
      time: "Time",
      activity: "Activity"
    })
  }

  //filtered out the item that was clicked by its id and updated todoList
  function deleteTodo(id) {
    const todoListCopy = [...todoList];
    const newList = todoListCopy.filter(item => item.id !== id);
    setTodoList(newList);
  }

  //IF THE ITEM'S ID EQUALS THAT OF THE ARG ITEM.ID TAKEN BY CHANGE FUNCTION THEN SET ITEM.ISDONE TO TRUE ELSE
  function handleCheckBoxChange(id) {
    const todoIndex = todoList.findIndex(item => item.id === id);
    const newTodoList = [...todoList];
    newTodoList[todoIndex] = {
      ...newTodoList[todoIndex],
      isDone: !(newTodoList[todoIndex].isDone),
    }
    //console.log(newTodoList[todoIndex].isDone);
    setTodoList(newTodoList);
  }

  return (
    <div>
      <TodoForm addTodo={addTodo} />
      <br />
      <h2 style={{ textAlign: "center" }}>{tableHeader.title}</h2>

      <div className="table-div">
        <table id="todo-table">
          <thead>
            <tr className="table-header" style={{ height: "50px" }}>
              <th>{tableHeader.todoState}</th>
              <th>{tableHeader.time}</th>
              <th>{tableHeader.activity}</th>
            </tr>
          </thead>
          <tbody>
            {
              todoList.map(item => {
                return (
                  <tr key={item.id} className={item.isDone.toString()} style={{ height: "50px" }}>
                    <td style={{ width: "10%" }}>
                      <input
                        className="check-box-input"
                        type="checkbox"
                        checked={item.isDone}
                        onChange={() => handleCheckBoxChange(item.id)} />
                    </td>
                    <td style={{ width: "10%", fontWeight: "300" }}>
                      {item.time}
                    </td>
                    <td style={{ width: "60%" }}>
                      {item.note}
                    </td>
                    <td style={{ width: "10%" }}>
                      <button className="del-btn" onClick={() => deleteTodo(item.id)}>Delete</button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div >
  );
}
