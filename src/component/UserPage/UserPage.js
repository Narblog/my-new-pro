import { Component } from "react";
import "./userpage.css"
 export  default class UserPage extends Component {
   render(){
    const {username,password,email}=this.props
    return(
        <div className="userpage">
                <p>UserName</p>-{username}
                <p>Email</p>-{password}
                <p>Password</p>-{email}
        </div>
    )
   }

}