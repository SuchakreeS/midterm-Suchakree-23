import React from 'react'

function Login() {
    return (
        <div className='flex justify-center font-2xl '>
            <form className='w-2xl rounded-2xl flex flex-col border-2 mt-[20%] p-12 bg-[#21293b] text-white'>
                <p className='text-4xl font-bold'>Welcome</p>
                <input type="text" placeholder='username'
                className='mt-8 bg-[#364154]'/>
                <input type="password" placeholder='password' 
                className='mt-4 bg-[#364154]'/>
                <button className='mt-4 bg-[#364154]'>Log in</button>

            </form>
            
        </div>
    )
}

export default Login