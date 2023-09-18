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
   
      imgHandle=(e)=>{
        const files=e.target.files[0]
          const  reader=new FileReader()
          reader.onload=(e)=>{
              this.files.innerHTML=<img src="g"/>
          reader.readAsDataURL(files)
       }
      }
      render() {
        const {handleRegister}=this.props
        const {username, email, password,file} = this.state;
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
             <div className="register-input">
                         <label htmlFor="file">Image:</label> 
                          <input
                             type="file"
                             id="file"
                             name="file"
                              value={file}
                             onChange={this.imgHandle}
                             accept="image/*"
                          
                              /> 
             </div>
               <button className="registrbutton"
                 onClick={() => handleRegister(username, email, password,file) }
               >
                Registration</button>
            </div>



        )
    }
    

}
export default RegistrPage

