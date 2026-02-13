import React, { useEffect, useState } from 'react'
import useUserStore from '../stores/userStore'
import axios from 'axios'


function Todos() {
  // const [user, setUser] = useState(null)

  const [todo, setTodo] = useState([])
  const token = useUserStore((state) => state.token)
  console.log(token)

  useEffect(() => {
    fetchUser()
  },[]
)

async function fetchUser() {
  try {
    const res = await axios.get("https://drive-accessible-pictures-send.trycloudflare.com/todosv2",{
      headers: {
        Authorization:`Bearer ${token}`
      }
    })

    console.log("res", res.data)
    setTodo(res.data)
    
    
  } catch(error) {
    console.log(error)
  }
}

console.log("todo",todo)
const todoList = todo.map((item) => item)



  return (
    <div className='flex justify-center flex-wrap mt-[10%] bg-[#1a1a1a] w-4xl mx-auto p-8'>
      <div className='flex basis-full justify-center'>
        <p className='flex justify-center text-4xl font-bold text-white'>My Todo</p>
      </div>
      <form className='flex justify-between shrink-0 border-b-2 w-2xl text-white mt-8 p-2' >
        <input type='text' placeholder='new task'
        className='text-2xl p-2 w-full'/>
        <button className='text-2xl bg-[#5181ec] p-2 rounded-2xl'>Add</button>
      </form>``
        <div className='flex-col basis-full w-full text-center text-2xl text-white mt-6'>
        {todoList.map((item)=><div key="item.id">{item.content}
          <button className='bg-[#343434] ml-10 mt-3 text-[#939393] p-2 rounded-2xl'>Edit</button>
          <button className=' ml-4 text-[#939393] p-2 rounded-2xl'>Delete</button>
        </div>)}
        </div>
    </div>
  )
}

export default Todos