import { BsFacebook,BsTwitter,BsInstagram } from "react-icons/bs";
import "./person.css"
import image from "./image1.jpg"
function About (){

    return(
    
            <div className="w-100 position-relativ d-flex align-items-center  flex-column justify-content-center mt-5 ">
                <div className="rounded-4 newblok">

                </div>


                <div className="information text-center position-absolute bottom-0 mb-5 pb-5 ">
                <img src={image} className=" mb-5 rounded-circle images  border border-5" alt="new"></img>
                <div className="container w-25">
                <h3>Ndife Samuel</h3>
                <h5>Product Design</h5>
                <p className=" h4 pb-2 mb-4 w-75 mx-auto fw-bold border-bottom border-danger"></p>
                <p>i Choose the product desing track because i love solving visual problems using  Choose the product desing track because i love solving visual problems using</p>
                <div className="icons d-flex justify-content-center "> 
        <BsFacebook className="text-danger mx-1 "/>
        <BsInstagram className="text-danger mx-1"/>
        <BsTwitter className="text-danger mx-1"/>
                </div>
                </div>
                
                </div>
            
            </div>
    
    )
}
export default About