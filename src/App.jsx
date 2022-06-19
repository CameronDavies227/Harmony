import { Login } from "./components/Login"
import { Register } from "./components/Register";
import { Loginpage } from "./components/Login_Page";
import Events from "./components/Events";
import { Header } from "./components/Header";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//import { Preferences } from '../components/Preferences';


export const App = () =>{
    /*const [UID, setUID] = useState("")

   if(!UID) {
        return <Login setUID={setUID} />
        localStorage.setItem("UID", "1")
    }*/


    return( <>
      <BrowserRouter>
      <Header/>
        <div className="Dashboard">
          <Routes>
            <Route path='/' element={<Loginpage/>}/>
            <Route path='/events' element={<Events/>}/>
            <Route path='*' element={<Navigate replace to='/' />}/>
            <Route path='/groups' element={<Events/>}/>

          </Routes>
        </div>
      </BrowserRouter>
    </>);
}