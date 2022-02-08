import React from 'react'
import ReactDOM from 'react-dom'
import Login from './Login'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Register from './Register'
import StartAdmin from './StartAdmin'
ReactDOM.render(
  <Router>
    <Routes>
      <Route exact path='/' element={<Login />} />
      <Route exact path='/register' element={<Register />} />
      <Route exact path='/index' element={<StartAdmin />} />
    </Routes>
  </Router>,
  document.getElementById('root')
)
