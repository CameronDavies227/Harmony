import { Login } from "./Login_Page"
import { Header } from "./Header"
import React, { useEffect, useState } from "react";
import { Events } from "./Events";
import { BrowserRouter, Route } from "react-router-dom";



export const Dashboard = () =>{
    return( <>
    <BrowserRouter>
      <div className="Dashboard">
        <Routes>
          <Route path='/' element={<Home />}/>
        </Routes>
      <Events/>
      </div>
    </BrowserRouter>
    </>);
}