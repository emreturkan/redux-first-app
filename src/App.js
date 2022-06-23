import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { addUser,removeUser,updateUser } from './store/Users'
const App = () => {
  const userlist = useSelector(state => state.users.value)
  const dispatch = useDispatch()
  const [name,setName] = useState('')
  const [username,setUserName] = useState('')
  const [newUserName,setNewUserName] = useState('')
  const updateUsers =(id,username)=>{
      dispatch(updateUser(id,username))
      setNewUserName('')
  }
  return (
    <div className='flex justify-center items-center flex-col my-6'>
      <div className="addcontainer">
        <form onSubmit={(e)=>e.preventDefault()}>
          <label htmlFor="name">Name: </label>
          <input className=' border-2' value={name} onChange={(e)=>setName(e.target.value)} type="text" id='name' name='name' placeholder='name...' />
          <label htmlFor="username">Username: </label>
          <input className=' border-2' type="text" value={username} onChange={(e)=>setUserName(e.target.value)} id='username' name='username' placeholder='username...' />
          <button className='px-3 py-1 bg-red-500 mx-3 rounded-md shadow-md' onClick={()=>dispatch(addUser({id:new Date().getTime(),name,username,}))}>EKLE</button>
        </form>
      </div>
      <div className='userlist mt-12'>
        {userlist.map(user=>(
          <div className='w-72 h-72 bg-blue-400 shadow-md rounded-md my-2 flex flex-col items-center justify-center' key={user.id}>
            <h1>{user.name}</h1>
            <h4>{user.username}</h4>
            <input type="text" name='update' placeholder='update...'  onChange={(e)=>setNewUserName(e.target.value)}/>
            <button onClick={()=>updateUsers({id:user.id,username:newUserName})} className='px-3 py-1 bg-green-500 rounded-md my-2 shadow-md'>update</button>
            <button onClick={()=>dispatch(removeUser(user.id))} className='px-3 py-1 bg-yellow-500 rounded-md my-2 shadow-md'>delete</button>
          </div>
        ))}
      </div>

    </div>
  )
}

export default App