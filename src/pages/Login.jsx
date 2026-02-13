import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import useUserStore from '../stores/userStore'
import { useNavigate } from 'react-router'

function Login() {

    const [formLogin, setFormLogin] = useState({
        username:"",
        password: "",
    })

    const setUser = useUserStore((state) => state.setUser)
    const setToken = useUserStore((state) => state.setToken)
    const navigate = useNavigate()

    const hdlChange = (evt) => {
        const { name, value } = evt.target
        setFormLogin((prv) => ({...prv, [name]: value}))
    }

    const hdlSubmit = async (evt) => {

        evt.preventDefault()
        try { 
            const res = await axios.post("https://drive-accessible-pictures-send.trycloudflare.com/auth/login", formLogin)
        console.log(res)
        const {id, content, isdone, userId, createdAt, updatedAt, accessToken} = res.data
        setUser({id, content, isdone, userId, createdAt, updatedAt})
        setToken(accessToken)
        console.log(formLogin)
        navigate('/todos')
            
        } catch (error) {
            console.log(error)
        }
        
        
    }

    return (
        <div className='flex justify-center font-2xl '>
            <form onSubmit={hdlSubmit}
            className='w-2xl rounded-2xl flex flex-col border-2 mt-[12%] p-12 bg-[#21293b] text-white'>
                <p className='text-4xl font-bold'>Welcome</p>
                <input type="text" name='username' placeholder='username'
                onChange={hdlChange}
                className='mt-8 bg-[#364154] p-3 rounded-md '/>
                <input type="password" name='password' placeholder='password'
                onChange={hdlChange} 
                className='mt-6 bg-[#364154] p-3 rounded-md'/>
                <button className='mt-6 bg-[#364154] p-3 rounded-md'>Log in</button>

            </form>
            
        </div>
    )
}

export default Login