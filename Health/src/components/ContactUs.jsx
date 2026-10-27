import React, { useState } from 'react'
import axios from "axios"
const ContactUs = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [id, setId] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
      
      try {
        const response = await axios.post(
          "http://localhost:3000/auth/signup",
          {
            name,
            email,
            password,
            id,
            phone
          }
        )
      } catch (error) {
        console.log(error)
        console.log("Something went wrong")
      }
  }




  return (
    <div id='Contact' className='flex flex-col justify-center items-center py-20'>
      <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center gap-3 rounded-2xl border-2 p-10 bg-gray-300/50'>
        <div className='flex gap-3 justify-center items-center '>
          <lable className="w-20">Name:</lable>
          <input name='name' id='name' type='text' placeholder='Enter your name.' className='px-3 py-2 rounded-xl border-2  border-black text-black' value={name} onChange={(e)=>setName(e.target.value)} />
        </div>
        <div className='flex gap-3 justify-center items-center '>
          <lable className="w-20">Email:</lable>
          <input name='email' id='email' type='text' placeholder='Enter your email.' className='px-3 py-2 rounded-xl border-2  border-black text-black' value={email} onChange={(e)=>setEmail(e.target.value)} />
        </div>
        <div className='flex gap-3 justify-center items-center '>
          <lable className="w-20">Phone no:</lable>
          <input name='phone' id='phone' type='tel' placeholder='Enter your phone no.' className='px-3 py-2 rounded-xl border-2 border-black  text-black' value={phone} onChange={(e)=>setPhone(e.target.value)} />
        </div>
        <div className='flex gap-3 justify-center items-center '>
          <lable className="w-20">Id:</lable>
          <input name='id' id='id' type='text' placeholder='Enter your id.' className='px-3 py-2 rounded-xl border-2  border-black text-black' value={id} onChange={(e)=>setId(e.target.value)} />
        </div>
        <div className='flex gap-3 justify-center items-center '>
          <lable className="w-20">Password:</lable>
          <input name='password' id='password' type='text' placeholder='Enter your password' className='px-3 py-2 rounded-xl border-2 border-black text-black' value={password} onChange={(e)=>setPassword(e.target.value)} />
        </div>
        <div>
          <button type='submit' className='px-5 py-3 rounded-full bg-red-700'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default ContactUs
