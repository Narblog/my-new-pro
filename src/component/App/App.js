import { Component } from "react";
import RegistrPage from "../RegistrPage";
import "./app.css"
import UserPage from "../UserPage";
import {setUserData,getUserData,setisClicked,getisClicked} from "../../services/localStoragetest"
import CountUp from "../CountUp/CountUp";

class App extends Component {
    state={
       userData:{},
        isClicked:false,
    }
    handleRegistration = (userData) => {
        this.setState({
           userData,
           isClicked:true
        });
        setUserData(userData);
        setisClicked(true)
      };
    render(){
     
       const{userData,isClicked}=this.state
    return (
<div className="app">
      <CountUp /></div>
       /* <div className="app">
          {getisClicked() ? 
          
          <UserPage userData={isClicked ? userData: getUserData()}/>
          :
          <RegistrPage
            handleRegistration={this.handleRegistration}
          />
          }
        </div>*/
      );
    }

}
export default App