import React from 'react'

function Todos() {
  return (
    <div className='flex justify-center'>
      <div>
        <p className='flex justify-center text-4xl font-bold text-white'>My Todo</p>
      </div>
      <div className='flex justify-between text-white mt-8'>
        <p className='text-2xl'>New Task</p>
        <button className='text-2xl bg-[#5181ec] p-2 rounded-2xl'>Add</button>
      </div>
    </div>
  )
}

export default Todos