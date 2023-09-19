import { Component } from "react";
import "./userpage.css"
 export  default class UserPage extends Component {
    state={
        imageUrl:""
    }
 
   render(){
    const {username,password,email }=this.props.userData
    //localStorage.setItem("user",JSON.stringify({username,password,email}))
    //const info=JSON.parse(localStorage.getItem("user"))  


    return(
     
        <div className="userpage">
            <h1>Welcome,<span>{username}</span>!</h1>
         <h4>Personal Info:</h4>
            <div>
            Email:<span>{email}</span>
            </div>
            <div >
            Password:<span>{password}</span>
            </div>
            <div >
            <img src={this.props.fileUrl} alt=""   />
            </div>
              
        </div>
    )
   }

}