import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import App from '../App'

const Home = React.lazy(() => import('../pages/Home'));
const Yanjie = React.lazy(() => import('../pages/Yanjie'));
const Pianqu = React.lazy(() => import('../pages/Pianqu'));

const BaseRouter = () => (

  <Router>
    <React.Suspense fallback={<div>Loading</div>}>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path='/' element={<App />}>
          <Route path='/yanjie' element={<Yanjie />}></Route>
          <Route path='/pianqu' element={<Pianqu />}></Route>
          <Route path='/home' element={<Home />}></Route>

        </Route>
      </Routes>
    </React.Suspense>
  </Router>
)
export default BaseRouter 