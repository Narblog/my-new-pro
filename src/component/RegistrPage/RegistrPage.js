import { Component } from "react";
import "./registrpage.css"

class RegistrPage extends Component {
    state = {
        items:[],
        inputValue: '',
        prevState:" "


      }
      
      onInputChange = (event) => {
        this.setState({
            inputValue: event.target.value
         
        })
      }
      onBtnClick = () => {
    
    
        
        this.onAdd(this.state.inputValue);
        this.setState({inputValue: ''})

        console.log(this.state.items)
      }
  
    onAdd=(text)=>{
        const newItem={
            text:text
        }
    }

    render(){
      
        return(
            <div className="registrpage">
                <h1>RegistrPage</h1>
               <span> UserName: <input type="text" onChange={this.onInputChange} placeholder="username"/> </span> 
               <span> Email: <input type="email" onChange={this.onInputChange} placeholder="email"/> </span> 
               <span> Password: <input type="password" onChange={this.onInputChange} placeholder="password"/> </span> 
               <button className="registrbutton" onClick={this.onBtnClick}>Registration</button>
            </div>
        )
    }
    

}
export default RegistrPage