import { Component } from "react";
import RegistrPage from "../RegistrPage";
import "./app.css"
import UserPage from "../UserPage";

class App extends Component {
    state={
        username:"username",
        password:"password",
        email:"email",
        isClicked:true
    }
    handleRegister = (username, email, password) => {
        this.setState({
            Username: username,
            Email: email,
            Password: password,
            isClicked: true,
        });
      };
    render(){
     
       const{username,password,email,isClicked}=this.state
        return(

            <div className="app">
                {
                    isClicked ? <RegistrPage  handleRegister={this.handleRegister}/> : <UserPage username={username} password={password} email={email}/>
                }
            </div>
        )
    }

}
export default App