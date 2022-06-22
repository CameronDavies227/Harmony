import { Login } from "./components/Login"
import { Login_Header } from "./components/Login_Header";
import { Loginpage } from "./components/Login_Page";
import Events from "./components/Events";
import { Header } from "./components/Header";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//import { Preferences } from '../components/Preferences';


export const App = () =>{
    
  // if(!sessionStorage.user) {
  //      return <>      
  //        <Login_Header/>
  //        <Loginpage />
  //      </>
  //  }


    return( <>
      <Header/>
        <div className="Dashboard">
          <Routes>
            <Route path='/' element={<Loginpage/>}/>
            <Route path='/events' element={<Events/>}/>
            <Route path='*' element={<Navigate replace to='/' />}/>
            <Route path='/groups' element={<Loginpage/>}/>

          </Routes>
        </div>
    </>);
}