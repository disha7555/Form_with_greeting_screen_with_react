import React from 'react'
import './register1.css';
function Greet(props) {
  return (
    <div className="div1 p-3">
    <div className="container card p-3 mt-2 register-container">
      <h3 style={{color:"#CDB0EE"}}>Welcome {props.name}</h3>
      Thanks for joining us<br/>
      Your verification sent to {props.email}
    </div>
    </div>
  )
}

export default Greet;
