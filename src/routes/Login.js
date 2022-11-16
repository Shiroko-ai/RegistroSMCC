import React, { useState } from 'react'
import ButtonLogin from '../components/ButtonLogin'
import Field from '../components/FieldForm'
import HeadingForm from '../components/HeadingUser'
import LoginLink from '../components/LoginLink'
import IPNImage from '../components/SMCCLogo'
export default function Form (props) {
  const [value, setValue] = useState({
    user: '',
    password: ''
  })

  const [inicioSesion, setInicioSesion] = useState('')
  const [checkUser, setCheckUser] = useState({
    user: '',
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
    fetch('http://localhost:8080/maestros/login', {
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
        return res // Siempre tenemos que retornar la res para poder
        // utilizarla en otro .then
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
                <IPNImage />
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
                    <LoginLink
                    to = '/register'
                    text = "Registrarse"

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
