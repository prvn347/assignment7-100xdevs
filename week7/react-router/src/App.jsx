import { Suspense, useEffect, useState } from 'react'
import { lazy } from 'react';

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter, useNavigate } from 'react-router-dom';
import { Dashboard } from './component/Dashboard';
import { Landing } from './component/Landing';
const Dashboard =  lazy(() => import("./component/Dashboard"))
const Landing =  lazy(() => import("./component/Landing"))

function App() {
  const [count, setCount] = useState(0)



  return (
    <> <div>


      <BrowserRouter>
        <Appbar />
        <Routes>
          {/* <Route path="/dashboard" element={ <Suspense fallback= "loading.."><Dashboard1/></Suspense> } />
          <Route path="/" element={<Suspense fallback= "loading.."><Landing1/></Suspense>} /> */}
          <Route path="/dashboard" element={<Suspense fallback={<div>Loading...</div>}><Dashboard /></Suspense>} />
<Route path="/" element={<Suspense fallback={<div>Loading...</div>}><Landing /></Suspense>} />

        </Routes>
      </BrowserRouter>

    </div>  </>
  )
}

function Appbar() {

  let navigate = useNavigate()

  return <div>

    <div style={{
      background: "black",
      color: "white"
    }}>
      header
      <button onClick={() => {
        navigate("/dashboard")
      }}>route to dashborad</button>
      <button onClick={() => {
        navigate("/");
      }}>route to landing</button>
    </div>
  </div>
} 

export default App
