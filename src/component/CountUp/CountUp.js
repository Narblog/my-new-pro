import { Component } from "react";
import "./countup.css"

export default class CountUp extends Component {
    state={
        value:0,
        error:false
    }
    changeValue=(value)=>{
        this.setState({value})
    }
    
    CountUp=()=>this.changeValue(this.state.value+1)
       

    CountDown=()=>this.changeValue(this.state.value-1)

    onInputChange=(event)=>{
        const value=Number(event.target.value.trim())
        if(isNaN(value)){
            return this.setState({error:true})
        }
        this.setState({
            value,
            error:false
        })
    }
    render(){

    const {value,error}=this.state

      
        return(
            <div className="test">
                <button onClick={this.CountDown}>-</button>
                <input  value={value} type="text" onChange={this.onInputChange}/>
                <button onClick={this.CountUp}>+</button>
                {error? <div> This value is not number </div> :null }
            </div>
        )

        
    }

}