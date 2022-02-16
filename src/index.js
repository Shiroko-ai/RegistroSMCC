import React from 'react'
import ReactDOM from 'react-dom'
import Login from './Login'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Register from './Register'
import StartAdmin from './StartAdmin'
import Start from './Start'
import GenerateDocument from './GenerateDocument'
import DocumentList from './DocumentList'
import Materias from './Materias'
ReactDOM.render(
  <Router>
    <Routes>
      <Route exact path='/' element={<Login />} />
      <Route exact path='/register' element={<Register />} />
      <Route exact path='/administration' element={<StartAdmin />} />
      <Route exact path='/index' element={<Start />} />
      <Route exact path= '/generate-document' element={<GenerateDocument />} />
      <Route exact path= '/document-list' element={<DocumentList />} />
      <Route exact path= '/materias' element={<Materias />} />
    </Routes>
  </Router>,
  document.getElementById('root')
)
