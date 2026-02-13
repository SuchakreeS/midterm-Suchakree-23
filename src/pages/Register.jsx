import React from 'react'

function Register() {
  return (
     <div className='flex justify-center font-2xl '>
            <form className='w-2xl rounded-2xl flex flex-col border-2 mt-[12%] p-12 bg-[#21293b] text-white'>
                <p className='text-4xl font-bold'>Register</p>
                <input type="text" placeholder='username'
                className='mt-8 bg-[#364154] p-3'/>
                <input type="password" placeholder='password' 
                className='mt-6 bg-[#364154] p-3'/>
                <input type="password" placeholder='confirm password' 
                className='mt-6 bg-[#364154] p-3'/>
                <button className='mt-6 bg-[#364154] p-3'>Log in</button>

            </form>
            
        </div>
  )
}

export default Register