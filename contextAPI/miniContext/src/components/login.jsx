import React, { useState } from 'react'

function login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = () => {
     
    }
  return (
    <div>
      <h1>login page</h1>
       <input type="text" placeholder='username' />
       <input type="text" placeholder='password' />
       <button onClick={handleSubmit}>submit</button>
    </div>
  )
}

export default login
