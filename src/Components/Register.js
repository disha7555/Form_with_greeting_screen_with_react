import React from 'react'
import './register1.css';
function Register(props) {
  const btnStyle={
    backgroundColor: "green",
    color: "white",
    
  };
  let btnText,passBoxType;
  if(props.showPass === true){
    btnStyle.backgroundColor="red";
    btnText="Hide Password";
    passBoxType="text";
  }
  else{
    btnText="Show Password";
    passBoxType="password";
  }
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
      <input type={passBoxType} name="password" className="form-control" required/>
    </div>
    <button type="submit" className="btn btn-primary m-1" style={{backgroundColor:"#CDB0EE"}}>Register</button>
    <button type="button" className="btn m-1" style={btnStyle} onClick={props.click}> {btnText} </button>
    </form>
    </div>
    </div>

        )
}

export default Register
