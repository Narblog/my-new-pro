import { Component } from "react";
import "./userpage.css"
 export  default class UserPage extends Component {
   render(){
    const {username,password,email,file}=this.props
    return(
        <div className="userpage">
            <div className="box">
            <span>UserName</span>-{username}
            </div>
            <div className="box">
            <span>Email</span>-{email}
            </div>
            <div className="box">
            <span>Password</span>-{password}
            </div>
            <div className="box1">
            <span>Image</span>-{file}
            </div>
              
        </div>
    )
   }

}