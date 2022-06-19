import { useForm } from "react-hook-form"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Spinner from "./helpercomponents/Spinner";
import { FaUser, FaKey, FaBriefcase, FaPhone } from "react-icons/fa"


const color = "bg-white-600 dark:bg-slate-600 dark:text-gray-50"
const formClassName = "border-x border-black mx-auto p-4 grid gap-1"
const buttonClassName = "rounded inline-block px-6 py-2.5 font-medium bg-blue-700 dark:bg-slate-600 dark:text-gray-50 hover:bg-white-600 focus:bg-white-600 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out"
const inputClassName = "border border-1 border-black rounded-md p-1"
const errorClassName = "md:col-span-2 text-red-500"


export const Register = () => {

    const [user, setUser] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if(user !== null){
          setLoading(false)
          navigate('/')
        }
      },[user])

    function Register(e){
        e.preventDefault();
        setLoading(true)
    
        // input validation required
        let username = e.target.username.value;
        let password = e.target.password.value;
        
        fetch('https://localhost/users/register', {
          method: 'POST',
          headers:{
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({username, password})
        }).then(response => {
          if(!response.ok){
            throw new Error('An error has occured: ' + response.statusText)
          } else {
            return response.json();
          }
        }).then(data => {
          console.log(data)
          localStorage.setItem('user', JSON.stringify(data))
          setUser(data)
        }).catch(error => {
          setLoading(false)
          alert(error);
        })
    }

    if(isLoading){
        return <Spinner />
    } else {
     // <body class="w-screen h-screen bg-purple-700 flex justify-center items-center">
    return <form className={formClassName + " " + color} onSubmit={Register}>
        <h1 className="text-xl font-light">Register</h1>

        <div className="flex flex-col">
            <label htmlFor="username">Username</label>
            <div className="grid grid-cols-2 gap-4 place-content-end border border-slate-400 ">
              <input className="text-slate-600" type="text" name="username" id="username" required placeholder="Username"/>
              <FaUser className="right-6	absolute"/>
            </div>
            <p className="invisible peer-invalid:visible text-red-700 font-light">
                Please enter your username
            </p>
        </div>

        <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <div className="grid grid-cols-2 peer border border-slate-400 ">
              <input className="text-slate-600" type="email" name="email" id="email" required placeholder="Email"/>
              <FaBriefcase className="absolute right-6" />
            </div>
            <p className="invisible peer-invalid:visible text-red-700 font-light">
                Please enter a valid email
            </p>
        </div>


        <div className="flex flex-col">
            <label htmlFor="phone">Phone</label>
            <div className="grid grid-cols-2 peer border border-slate-400 ">
              <input className="text-slate-600" type="phone" name="phone" id="phone" required placeholder="Phone"/>
              <FaPhone className="absolute right-6" />
            </div>
            <p className="invisible peer-invalid:visible text-red-700 font-light">
                Please enter a valid phone
            </p>
        </div>


        <div className="flex flex-col">
            <label htmlFor="password">Password</label>
            <div className="grid grid-cols-2 peer border border-slate-400 ">
              <input className="text-slate-600" type="password" name="password" id="password" required autoComplete="current-password" placeholder="Password"/>
              <FaKey className="absolute right-6" />
            </div>
            <p className="invisible peer-invalid:visible text-red-700 font-light">
                Please enter a valid password
            </p>
        </div>

        <button type="submit" className={buttonClassName}>Register</button>
    </form>
    }
}