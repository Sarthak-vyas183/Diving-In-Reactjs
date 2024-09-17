import { useCallback, useRef, useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [length, setlength] = useState(8);
  const [AllowNumber, setAllowNumber] = useState(false);
  const [AllowSpecialChar, setAllowSpecialChar] = useState(false);
  const [newpass, setNewpass] = useState("12345");
 const passwordRef = useRef(null)

  const password = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let char = "!@#$%^&*()<>?:;";
    let number = "123456789";

    if (AllowNumber) str += number;
    if (AllowSpecialChar) str += char;

    for (let i = 1; i <= length; i++) {
      let newchar = Math.floor(Math.random() * str.length) + 1;
      pass += str.charAt(newchar);
    }

    setNewpass(pass);
  },[length, AllowNumber, AllowSpecialChar, setAllowSpecialChar]);  

   const copyPasswordToClipBord = useCallback( () => {
    //console.log(passwordRef.current)
    passwordRef.current?.select()
    passwordRef.current.setSelectionRange(0,60);
    window.navigator.clipboard.writeText(newpass);
    //alert("copied")
   },[newpass])

  useEffect(()=> {
      password()
  },[length, AllowNumber, AllowSpecialChar, setNewpass]) 

  return (
    <div className="w-screen h-screen flex bg-black justify-center items-start pt-10">
      
      <div className="w-[40vw] h-[30vh] rounded-md bg-gray-600">
          <div className="flex pl-4 pt-2">
            <input className="w-[80%] h-8 rounded-l-sm outline-none px-2"
             placeholder="password" 
             type="text"
             value={newpass}
             readOnly
             ref={passwordRef}
             />
            <button onClick={copyPasswordToClipBord} className="bg-blue-600 w-[15%] rounded-r-sm h-8">Copy</button>
          </div> 

         <div className="flex">

         <div className="flex pl-4 pt-2 text-white">
            <input id="range" type="range" 
                   value={length}
                   min={6}
                   max={100}
                   onChange={(e)=>{
                      setlength(e.target.value)
                   }}
                   className="cursor-pointer"
            /> &nbsp;
            <label htmlFor="range"> Length : {length} </label>

            
          </div> 

          <div className="flex pl-4 pt-2 text-white">
            <input id="range" type="checkbox"
                    defaultChecked={AllowSpecialChar}
                   onChange={()=> {
                     setAllowSpecialChar((prev) => !prev)
                   }}
                   className="cursor-pointer"
            /> &nbsp;
            <label htmlFor="range"> Speical Char </label>
           

          </div> 
        
          
          <div className="flex pl-4 pt-2 text-white">
            <input id="range" type="checkbox"
                  defaultChecked={AllowNumber}
                   className="cursor-pointer"
                   onChange={()=>{
                    setAllowNumber((prev) => !prev)
                   }} 
            /> &nbsp;
            <label htmlFor="range"> Number  </label>
           </div>



         </div>

      </div>
  </div>
  )
  
}

export default App;
