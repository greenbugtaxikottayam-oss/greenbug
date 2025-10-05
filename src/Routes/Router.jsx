import React from 'react'
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from '../Components/Loader.jsx';

const Home = lazy(() => import("../Pages/User/Home.jsx"))


function MainRouter() {

  return (
    <Suspense fallback={  <Loader /> }>
        <Routes>
            <Route path ='/' element = {<Home/>}/>
        </Routes>
    </Suspense>
    
  )
}

export default MainRouter ;
