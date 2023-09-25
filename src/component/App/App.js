import { useState } from "react";
import RegistrPage from "../RegistrPage";
import "./app.css"
import UserPage from "../UserPage";
import LocalStorageService from "../../services/LocalStorageService"


function App() {
  const storedData=LocalStorageService.getUserData()
  const [userData, setUserData] = useState(storedData)
  const [isClicked, setisClicked] = useState(!!storedData)

  const handleRegistration = (uData) => {
    LocalStorageService.saveUserData(uData)
    setUserData(uData)
    setisClicked(true)
  }
 // setUserData(userData)
 // setisClicked(true)
  return (
    <div className="app">
      {
      //getisClicked() ?
       // <UserPage userData={setisClicked1 ? setUserData1 : getUserData()} />
        isClicked?
        <UserPage userData={userData}/>:
        <RegistrPage
          handleRegistration={handleRegistration}
        />
      }
    </div>
  )
}
export default App

/*
class App extends Component {
  state = {
    userData: {},
    isClicked: false,
  }
  handleRegistration = (userData) => {
    this.setState({
      userData,
      isClicked: true
    });
    setUserData(userData);
    setisClicked(true)
  };
  render() {

    const { userData, isClicked } = this.state
    return (

        <CountUp />
      <div className="app">
    
     <Ftest/>
     </div> 
      <div className="app">
        {getisClicked() ?

          <UserPage userData={isClicked ? userData : getUserData()} />
          :
          <RegistrPage
            handleRegistration={this.handleRegistration}
          />
        }
      </div>
    );
  }

}
export default App  */