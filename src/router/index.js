import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import App from '../App'

const Home = React.lazy(() => import('../pages/Home'));


const BaseRouter = () => (

  <Router>
    <React.Suspense fallback={<div>Loading</div>}>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path='/' element={<App />}>

          <Route path='/home' element={<Home />}></Route>

        </Route>
      </Routes>
    </React.Suspense>
  </Router>
)
export default BaseRouter 