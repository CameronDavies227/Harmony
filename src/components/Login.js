import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Spinner from "./helpercomponents/Spinner";
import { FaUser, FaKey } from "react-icons/fa"


const color = "bg-white-600 dark:bg-slate-600 dark:text-gray-50"
const formClassName = "border-x border-black mx-auto p-4 grid width gap-1"
const buttonClassName = "rounded inline-block px-6 py-2.5 font-medium bg-blue-700 dark:bg-slate-600 dark:text-gray-50 hover:bg-white-600 focus:bg-white-600 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out"
const inputClassName = "border border-1 border-black rounded-md p-1"
const errorClassName = "md:col-span-2 text-red-500"

export const Login = () => {

    const [user, setUser] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if(user !== null){
          setLoading(false)
          navigate('/events')
          user.id = localStorage.uID;
          user.usertype = localStorage.usertype;
        }
      },[user])

    function Login(e){
        e.preventDefault();
        setLoading(true)
    
        // input validation required
        let username = e.target.username.value;
        let password = e.target.password.value;
        
        fetch(`https://localhost/users/login`, {
          method: 'GET',
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
    return <form className={formClassName + " " + color} onSubmit={Login}>
        <legend className="text-xl font-light">Login</legend>
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
            <label htmlFor="password">Password</label>
            <div className="grid grid-cols-2 peer border border-slate-400 ">
              <input className="text-slate-600" type="password" name="password" id="password" required autoComplete="current-password" placeholder="Password"/>
              <FaKey className="absolute right-6" />
            </div>
            <p className="invisible peer-invalid:visible text-red-700 font-light">
                Please enter a valid password
            </p>
        </div>

        <button type="submit" className={buttonClassName}>Login</button>
    </form>



















     /*   return <form className={formClassName + " " + color} onSubmit={Login}>
            <label>Username:</label>
            <input id="username" className={inputClassName} {...user("username", {required: true, maxLength: 25, pattern: /^[a-zA-Z]*$/})} />
            <span className={errorClassName}>{errors.username && "Invalid Username"}</span>

            <label>Password:</label>
            <input type="password" id="password" className={inputClassName} {...user("password", {required: true, maxLength: 25})} />
            <span className={errorClassName}>{errors.password && "Invalid Password"}</span>

            <span className={errorClassName}></span>
            <input className={inputClassName + " md:col-start-2"} type="submit" />
            <span className="text-blue-500 md:col-start-2">{status}</span>
        </form>*/
    }
}