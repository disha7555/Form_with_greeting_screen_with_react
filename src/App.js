//import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import Greet from './Components/Greet';
import Register from './Components/Register';
class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
       isRegistered:false,
       name:null,
       email:null,
       password:null,
       showPass:false,
    };
  }
  registrationHandler=(event)=>{
    //alert();
   
    const name=event.target.name.value;
    const email=event.target.email.value; 
    const password=event.target.password.value; 
    this.setState({name,email,password,isRegistered:true});
  }
  showPasswordHandler=()=>{
    this.setState({showPass: !this.state.showPass});
  }
  render() {
    return (
      <div >
        {this.state.isRegistered ? (<Greet name={this.state.name} email={this.state.email}></Greet>) : 
        (<Register submit={this.registrationHandler} showPass={this.state.showPass} click={this.showPasswordHandler}></Register>)}
      </div>
    );
  }
}

export default App
