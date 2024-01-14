
import { useState } from 'react'
import Form from '../../../globals/components/forms/Form'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../../../store/authSlice'
import { STATUSES } from '../../../globals/misc/statuses'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {status} = useSelector((state)=>state.auth)
  
  const [userData,setUserData] = useState({
    username : "",
    phoneNumber : "",
    email : "",
    password : ""
  })

  const handleChange = (e) =>{
    const {name,value} = e.target
    setUserData({
      ...userData,
      [name] : value
    })
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    dispatch(registerUser(userData))
    if(status === STATUSES.SUCCESS){
      return navigate("/login")
    }
    if(status === STATUSES.ERROR){
      alert("Something went Wrong, try again")
      return
    }
    
  }
  return (
    <>
    <div className="bg-gray-100 h-screen flex items-center justify-center">
    <div className="bg-white p-8 rounded shadow-md w-96">
    <h2 className="text-2xl font-semibold mb-4 ml-12">Registration Form</h2>
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="username" className="block text-gray-600 text-sm font-medium mb-2">Username</label>
        <input type="text" id="username" onChange={handleChange} name="username" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-600 text-sm font-medium mb-2">Email</label>
        <input type="email" id="email" onChange={handleChange} name="email" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-600 text-sm font-medium mb-2">Password</label>
        <input type="password" id="password" onChange={handleChange} name="password" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
      </div>
      <div className="mb-4">
        <label htmlFor="phoneNumber" className="block text-gray-600 text-sm font-medium mb-2">phoneNumber</label>
        <input type="number" id="phoneNumber" onChange={handleChange} name="phoneNumber" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
      </div>
      <div className="mb-6">
        <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
          Register
        </button>
      </div>
    </form>
    <p className="text-sm text-gray-600">Already have an account? <a href="/login" className="text-blue-500">Login</a></p>
  </div>
</div>

    </>
  )
}

export default Register
