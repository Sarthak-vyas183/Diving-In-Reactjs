import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

export default function profile() {
    const {user} = useContext(UserContext)
    console.log(user)
  return (
    <div className='profile'>
      <h1>username : {user?.username || "Guest" }</h1>
      <h1>password : {user?.password || "not define"} </h1>
    </div>
  )
}
