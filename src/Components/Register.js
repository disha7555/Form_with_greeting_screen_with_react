import React from 'react'
import './register1.css';
function Register(props) {
  return (
 
    <div className="div1 p-3">
    <div className="container card p-3 mt-2 register-container">
        <h1 className="text-center" style={{color:"#CDB0EE"}}>Registation Form</h1>
    <form onSubmit={props.submit}>
    <div className="form-group">
      <label htmlFor="name">Name:</label>
      <input type="text" name="name" className="form-control" required/>
    </div>
    <div className="form-group">
      <label htmlFor="name">Email:</label>
      <input type="email" name="email" className="form-control" required/>
    </div>
    <div className="form-group">
      <label htmlFor="name">Password</label>
      <input type="password" name="password" className="form-control" required/>
    </div>
    <button type="submit" className="btn btn-primary" style={{backgroundColor:"#CDB0EE"}}>Register</button>
    </form>
    </div>
    </div>

        )
}

export default Register
