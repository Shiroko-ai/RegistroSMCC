import React from 'react'
import ReactDOM from 'react-dom'
import Login from './routes/Login'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import RegisterUser from './routes/RegisterUser'
import Admins from './routes/Admins'
import MMD from './routes/MMD'
import Users from './routes/Users'
import Forgot from './routes/Forgot'
import RegisterMMD from './routes/RegisterMMD'
import Info from './routes/Info'
import RegisterUserAdmin from './routes/RegisterUserAdmin'
import Analytics from './routes/Analytics'
ReactDOM.render(
  <Router>
    <Routes>
      <Route exact path='/' element={<Login />} />
      <Route exact path='/register' element={<RegisterUser />} />
      <Route exact path= '/admins' element={<Admins />} />
      <Route exact path= '/mmd' element={<MMD />} />
      <Route exact path= '/users' element={<Users />} />
      <Route exact path= '/register-mmd' element={<RegisterMMD />} />
      <Route exact path= '/forgot-password' element={<Forgot />} />
      <Route exact path= '/info' element={<Info />} />
    <Route exact path= '/register-user-admin' element={<RegisterUserAdmin />} />
    <Route exact path= '/analytics' element={<Analytics />} />
    </Routes>
  </Router>,
  document.getElementById('root')
)
