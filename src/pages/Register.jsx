import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { registerValidator } from '../validators/registerValidator'

function Register() {
  const [formRegister, setFormRegister] = useState({
    username:'',
    password:'',
    confirm:''
  })

  const [error, setError] = useState(null)

  const navigate = useNavigate()

  const hdlChange = (evt) => {
    const { name, value } = evt.target;
    setFormRegister((prev) => ({...prev, [name]: value}))
    console.log(name, value)
  }

  const hdlSubmit = async (evt) => {
    evt.preventDefault();
    setError({})
    const result = registerValidator.safeParse(formRegister)
    if(!result.success) {
      const {fieldErrors} = result.error.flatten()
      setError(fieldErrors)
      return;
    }
    try {
      const res = await axios.post('https://drive-accessible-pictures-send.trycloudflare.com/auth/register', formRegister)
      console.log("Success", res.data)
      navigate('/login')
    } catch (error) {
      console.log('error')
    }
  }

  return (
     <div className='flex justify-center font-2xl '>
            <form onSubmit={hdlSubmit}
            className='w-2xl rounded-2xl flex flex-col border-2 mt-[12%] p-12 bg-[#21293b] text-white'>
                <p className='text-4xl font-bold'>Register</p>
                <input type="text" placeholder='username'
                name='username'
                onChange={hdlChange}
                className='mt-8 bg-[#364154] p-3 rounded-md'/>
                <input type="password" placeholder='password' 
                name='password'
                onChange={hdlChange}
                className='mt-6 bg-[#364154] p-3 rounded-md'/>
                <input type="password" placeholder='confirm password' 
                name='confirm'
                onChange={hdlChange}
                className='mt-6 bg-[#364154] p-3 rounded-md'/>
                <button className='mt-6 bg-[#364154] p-3 rounded-md'>Register</button>

            </form>
            
        </div>
  )
}

export default Register