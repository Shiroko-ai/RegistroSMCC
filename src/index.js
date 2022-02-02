import React from 'react'
import ReactDOM from 'react-dom'
import Login from './Login'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Register from './Register'
ReactDOM.render(
  <Router>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/register' element={<Register />} />
    </Routes>
  </Router>,
  document.getElementById('root')
)
