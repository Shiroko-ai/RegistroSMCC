import React, { useState } from 'react'
import ButtonLogin from '../components/Button/Button'
import Field from '../components/Field/Field'
import HeadingForm from '../components/HeadingForm/HeadingForm'
import LoginLink from '../components/LoginLink/LoginLink'
import SMCCLogo from '../components/SMCCLogo'
export default function Form (props) {
  const [value, setValue] = useState({
    user: '',
    password: ''
  })

  const [inicioSesion, setInicioSesion] = useState('')
  const [checkUser, setCheckUser] = useState({
    username: '',
    password: ''
  })

  function changeHandler (event) {
    const { id, value } = event.target
    setValue((prevValue) => {
      return {
        ...prevValue,
        [id]: value
      }
    })
  }

  function submitHandler (event) {
    event.preventDefault()
    setCheckUser(value)
    fetch('http://localhost:8080/admin/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        numero_trabajador: checkUser.user,
        password: checkUser.password,
        gethash: true
      })
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.isAdmin) {
          // setIsAdmin(true)
        }
        setInicioSesion(res.message)
        return res
      })
      .then((res) => {
        if (res.token) {
          // setLoggedIn(true)
        }
      })
  }

  return (
      <div className='container-center'>
      <div className='row justify-content-center'>
        <div className='col-xl-10 col-lg-12 col-md-9'>
          <div className='card o-hidden border-0 shadow-lg my-5'>
            <div className='card-body p-0'>
              <div className='row'>
                <SMCCLogo />
                <div className='col-lg-6'>
                  <div className='p-5'>
                    <form className='user' onSubmit={submitHandler}>
                    <HeadingForm
                      text = "Sistema de registro SMCC"
                    />
                        <Field
                          type='text'
                          className='form-control form-control-user'
                          id='user' aria-describedby='emailHelp'
                          placeholder='Nombre de usuario'
                          Handler = {changeHandler}
                        />
                        <Field
                          type='password'
                          className='form-control form-control-user'
                          id='password' aria-describedby='emailHelp'
                          placeholder='Contraseña'
                          Handler={changeHandler}
                        />

                          <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
                          <label className="form-check-label" htmlFor="flexCheckIndeterminate" style={{ color: 'black', paddingBottom: '20px' }}>
                            ¿Eres Administrador?
                          </label>
                      <ButtonLogin
                        text = "Iniciar sesion"
                        type = "submit"
                      />
                    </form>
                    <hr />
                    <LoginLink
                    to = '/forgot-password'
                    text = "¿Olvidaste tu contraseña?"

                    />
                    <div className='text-center'>
                      <p className='h4 mb-4' style={{ color: '#800040' }}>
                        {inicioSesion}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}
