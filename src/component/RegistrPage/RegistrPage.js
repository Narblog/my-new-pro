import { Component } from "react";
import "./registrpage.css"

class RegistrPage extends Component {
    state = {
        username: '',
        email: '',
        password: '',
       

  }


      handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
      }
      handleRegister = () => {
        const { username, email, password } = this.state;
      
      
        console.log(username, email, password, ' --- data');
        this.setState({
          username: '',
          email: '',
          password: '',
        
        })
      }
     
      render() {
        const isClicked=this.props
        const {username, email, password } = this.state;
        return(
            <div className="registrpage">
                <h1>Register Page</h1>
                <div className="register-input">
                         <label htmlFor="username">UserName:</label>
                         <input
                           type="text"
                           id="username" 
                           name="username"
                           onChange={this.handleChange} 
                           placeholder="username"
                           value={username}
                           />
             </div>
             <div className="register-input">
                          <label htmlFor="email">Email:</label>
                          <input 
                             type="email"
                             id="email"
                             name='email'
                             value={email}
                             onChange={this.handleChange}
                             placeholder="email"
                             />  
             </div>
             <div className="register-input">
                         <label htmlFor="password">Password:</label> 
                          <input
                             type="password"
                             id="password"
                             name="password"
                             value={password}
                             onChange={this.handleChange}
                             placeholder="password"
                              /> 
             </div>
               <button className="registrbutton" onClick={this.handleRegister}>Registration</button>
            </div>



        )
    }
    

}
export default RegistrPage

