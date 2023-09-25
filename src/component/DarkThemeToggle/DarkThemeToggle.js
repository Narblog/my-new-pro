import { useState } from "react"

function DarkThemeToggle() {
    const [checked, setChecked] = useState(false);
   
   const darkTheme=(e)=> {
            setChecked(document.body.style.background="black")
          
            setChecked(document.body.style.background="red")
        
        
      }
    return (
        <input type="checkbox"
       
        onChange={darkTheme}
         />
    )
}
export default DarkThemeToggle