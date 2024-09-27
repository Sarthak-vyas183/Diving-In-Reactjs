import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

function login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
      e.preventDefault()
      setUser({username, password})
    }
  return (
    <div className='login'>
      <h1>login page</h1>
       <input type="text" 
       placeholder='username'
       value={username}
       onChange={(e)=> setUsername(e.target.value)}
       /> <br />
       <input type="text" placeholder='password'
       value={password}
       onChange={(e) => setPassword(e.target.value)}
       /> <br />

       <button onClick={handleSubmit}>submit</button>
    </div>
  )
}

export default login
