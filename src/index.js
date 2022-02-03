import React from 'react'
import ReactDOM from 'react-dom'
import Login from './Login'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Register from './Register'
import Hola from './Hola'
ReactDOM.render(
  <Router>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/hola' element={<Hola />} />
    </Routes>
  </Router>,
  document.getElementById('root')
)
