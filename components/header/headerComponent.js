import React from 'react';
import './headerComponent.css';
import logo from 'B:/vsc/my-todo-app/src/images/funny-list-icon.jpg'

export default function Header() {

  return (
    <div className="header-div">
      <div id="full-logo">
        <img className="logo" src={logo} alt="" />
        <div>
          <h1>Task Manager</h1>
          <h3 style={{ fontWeight: "300" }}>Prepare your daily schedules <span className="simply"> Simply!</span></h3>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}