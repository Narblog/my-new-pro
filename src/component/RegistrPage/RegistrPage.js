import { Component } from "react";
import './registrpage.css'
export default class RergisterPage extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    validationErrors: {}
  }

  validateEmail = (email) => {
    const regExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (regExp.test(email)) {
      return true;
    } else {
      return false;
    }
  }
  validatePassword = (password) => {
    const regExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if (regExp.test(password)) {
      return true;
    } else {
      return false;
    }
  }

  
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value })
  }
  handleRegister = () => {
    const { username, email, password} = this.state;
    const validationErrors = {}
   
    if (!email.trim() && !this.validateEmail(email)) {
      validationErrors.email = 'Please enter a valid email.'
    }
    if (!password.trim() && !this.validatePassword(password)) {
      validationErrors.password = 'Password must contain letters, numbers and bet at least 6 characters long.'
    }
    if (username.trim().length < 3) {
      validationErrors.username = 'Username is required.'
    }
    if (Object.keys(validationErrors).length === 0) {
      this.props.handleRegistration({ username, email, password })
      this.setState({
        username: '',
        email: '',
        password: '',
        validationErrors: {}
  
      })
    } else {
      this.setState({ validationErrors })
    }
  }
  /*imgHandler = (e) => {
    const files = e.target.files[0]
    const reader = new FileReader()
    reader.onload = (e) => {
 
     
      console.log(reader.result)
     
      reader.readAsDataURL(files)
    }
  }*/
 handleFileChange = (event) => {
    const fileObj = event.target.files[0];
    console.log(fileObj.name);
    }
  render() {
   
    const { username, email, password, validationErrors } = this.state;
    return (
      <div className="register-page-wrapper">
        <h1>Register page</h1>
        <div className="register-form">
          <div className="register-input">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              id="username"
              value={username}
              onChange={this.handleChange}
            />
          </div>
          <div className="register-input">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              id="email"
              value={email}
              onChange={this.handleChange}
            />
          </div>
          <div className="register-input">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              id="password"
              value={password}
              onChange={this.handleChange}
            />
          </div>
          <div className="register-input">
          <label htmlFor="file">Image:</label>
          <input 
            id="upload"
             ref="upload"
              type="file"
               accept="image/*"
           onChange={this.handleFileChange}/>
        
            
        </div>
          {
            Object.keys(validationErrors).length ? (
              <div className="error-alert">
                <span>{ validationErrors.email }</span>
                <span>{ validationErrors.password }</span>
                <span>{ validationErrors.username }</span>
              </div>
            ) : null
          }
          <button
            className="register-btn"
            onClick={ this.handleRegister }
          >
            Register
          </button>
        </div>
      </div>
    )
  }
}

/*import { Component } from "react";
import "./registrpage.css"

class RegistrPage extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    validationErrors:{}
  }
  validateEmail=(email)=>{
    return false
  }

  validatePassword=(password)=>{

   return false
 
  }
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value })
  }


  handleRegister = () => {
    const { username, email, password } = this.state
    let validationErrors={}
    if(!email.trim() && !this.validateEmail(email) ){
      validationErrors.email="Please enter a valid email"
    }
    if(!password.trim() && !this.validatePassword(password) ){
      validationErrors.password="Password must contain letters,numbers and bet at 6 characters long."
    }
    if(username.trim().length<3){
      validationErrors.username="Username is required"
    }
    if(Object.keys(validationErrors).length===0){
      this.props.handleRegistration({ username, email, password })

      this.setState({
        username: "",
        email: "",
        password: "",
        validationErrors:{}
      })
    }else{
      this.setState({validationErrors})
    }
    
  }
 
  /*
  imgHandle = (e) => {
    const files = e.target.files[0]
    const reader = new FileReader()

    reader.onload = (e) => {


      const img = new Image();

      img.src = reader.result;



      reader.readAsDataURL(files)
    }
  }
  render() {
    const { username, email, password,validationErrors } = this.state;
    return (
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
        <div className="register-input">
          <label htmlFor="file">Image:</label>
          <input
            type="file"
            id="file"
            name="file"

            onChange={this.imgHandle}
            accept="image/*"

          />
        </div>
        {
Object.keys(validationErrors).length ? (
      <div className="error-alert">
          <span>  {validationErrors.email}</span>
          <span>    {validationErrors.password}</span>
          <span>   {validationErrors.username}</span>
        </div>
      ) : null
        }
        
        <button className="registrbutton"
          onClick={this.handleRegister}
        >
          Registration</button>
      </div>
    )
  }


}
export default RegistrPage
*/
