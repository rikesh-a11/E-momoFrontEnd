import { useDispatch, useSelector } from "react-redux"
import Form from "../../../globals/components/forms/Form"
import { useState } from "react"
import { loginUser } from "../../../store/authSlice"
import { STATUSES } from "../../../globals/misc/statuses"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {data,token,status} = useSelector((state)=>state.auth)

  const [userData,setUserData] = useState({
    email : "",
    password : ""
  })

  const handleChange = (e)=>{
    const {name,value} = e.target
    setUserData({
      ...userData,
      [name] : value
    })
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    dispatch(loginUser(userData))
    console.log(token)
    
    if(status === STATUSES.SUCCESS){
      localStorage.setItem('token',token)
      return navigate("/")
    }
    if(status === STATUSES.ERROR){
      alert("Something went wrong,Try again")
      return
    }
  }



  return (
    <>
    <div className="bg-gray-100 h-screen flex items-center justify-center">
    <div className="bg-white p-8 rounded shadow-md w-96">
    <h2 className="text-2xl font-semibold mb-4 ml-24">Login Form</h2>
    <h3>Hello,{data.userName}</h3>
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-600 text-sm font-medium mb-2">Email</label>
        <input type="email" id="email" onChange={handleChange} name="email" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
      </div>

      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-600 text-sm font-medium mb-2">Password</label>
        <input type="password" id="password" onChange={handleChange} name="password" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
      </div>

      <div className="mb-6">
        <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
          Login
        </button>
      </div>
    </form>
    
  </div>
</div>
    </>
  )
}

export default Login
