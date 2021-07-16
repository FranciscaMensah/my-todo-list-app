import React from 'react';
import './dashboard.css'
import TodoListTable from '../display/tableComponent';
import Header from '../header/headerComponent';

export default function Dashboard() {

  return (
    <div className="container">
      <Header />
      <h2 style={{ marginLeft: "50px" }}>What are your plans for today?</h2>
      <TodoListTable />
    </div>
  );
}