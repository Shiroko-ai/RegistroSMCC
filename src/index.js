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
import SendEmail from './routes/SendEmail'
import LoginUser from './routes/LoginUser'
import Details from './routes/Details'
import RegisterAdmin from './routes/RegisterAdmin'
import ForgotID from './routes/ForgotID'
import Payment from './routes/Payment'
import UserInfo from './routes/UserInfo'
import NotFound from './routes/NotFound'

ReactDOM.render(
  <Router>
    <Routes>
    <Route exact path='/' element={<LoginUser />} />
      <Route exact path='/login-admin' element={<Login />} />
      <Route exact path='/register' element={<RegisterUser />} />
      <Route exact path= '/admins' element={<Admins />} />
      <Route exact path= '/mmd' element={<MMD />} />
      <Route exact path= '/users' element={<Users />} />
      <Route exact path= '/details' element={<Details />} />
      <Route exact path= '/register-mmd' element={<RegisterMMD name = 'MMD'/>} />
      <Route exact path= '/register-admin' element={<RegisterMMD name = 'Administrador'/>} />
      <Route exact path= '/forgot-password' element={<Forgot />} />
      <Route exact path= '/payment' element={<Payment />} />
      <Route exact path= '/forgot-id' element={<ForgotID />} />
      <Route exact path= '/info' element={<Info />} />
      <Route exact path= '/user-info' element={<UserInfo />} />
      <Route exact path= '/register-user-admin' element={<RegisterUserAdmin />} />
      <Route exact path= '/analytics' element={<Analytics />} />
      <Route exact path= '/send-email' element={<SendEmail />} />
      <Route path= '*' element={<NotFound />} />

    </Routes>
  </Router>,
  document.getElementById('root')
)
