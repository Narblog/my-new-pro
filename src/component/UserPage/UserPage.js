import { Component } from "react";
import "./userpage.css"
import { getImageUrl, setImageUrl } from "../../services/localStoragetest";
export default class UserPage extends Component {
    state = {
        imageUrl: ""
    }


    handleFileChange = (event) => {
        const fileObj = event.target.files[0];
          this.setState({
            imageUrl: URL.createObjectURL(fileObj)
        })
        setImageUrl(URL.createObjectURL(event.target.files[0]))
    }



    render() {
        const { username, password, email } = this.props.userData

        //localStorage.setItem("user",JSON.stringify({username,password,email}))
        //const info=JSON.parse(localStorage.getItem("user"))  

        return (

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

                    <input
                        type="file"
                        accept="image/*"
                        id="upload"
                        onChange={this.handleFileChange}
                         />
                </div>
                <div >
                    <img 
                    className="Personalimage"
                    src={getImageUrl()} 
                    alt=""
                    />
                </div>

            </div>
        )
    }

}

