import { Component } from "react";
import RegistrPage from "../RegistrPage";
import "./app.css"
import UserPage from "../UserPage";

class App extends Component {
    state={
        username:"",
        password:"",
        email:"",
        file:"",
        isClicked:true
    }
    handleRegister = (username, email, password,file) => {
        this.setState({
            username: username,
            email: email,
            password: password,
            file:file,
            isClicked: false,
        });
      };

   
    render(){
     
       const{username,password,email,file,isClicked}=this.state
        return(

            <div className="app">
                {
                    isClicked ? <RegistrPage  handleRegister={this.handleRegister}/> : <UserPage username={username} password={password} email={email} file={file}/>
                }
            </div>
        )
    }

}
export default App