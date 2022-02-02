import React, { useState } from 'react'
import { Link } from 'react-router-dom'
export default function Register () {
  const [user, setUser] = useState({
    nombre: '',
    num_trabajador: '',
    apellido_paterno: '',
    apellido_materno: '',
    password: ''
  })
  const [value, setValue] = useState({
    nombre: '',
    num_trabajador: '',
    apellido_paterno: '',
    apellido_materno: '',
    password: ''

  })

  const [Registrarse, setRegistrarse] = useState({})
  function submitHandler (event) {
    event.preventDefault()
    setUser(value)
    fetch('http://localhost:8080/maestros/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        numero_trabajador: user.num_trabajador,
        nombre: user.nombre,
        password: user.password,
        apellido_paterno: user.apellido_paterno,
        apellido_materno: user.apellido_materno
      })
    })
      .then((res) => res.json())
      .then((res) => setRegistrarse(res.message))
  }

  function changeHandler (event) {
    const [id, value] = event.target
    setValue((prevValue) => {
      return ({
        ...prevValue,
        [id]: value
      })
    })
  }
  return (
    <div className='container-center'>
      <div className='row justify-content-center'>
        <div className='col-xl-10 col-lg-12 col-md-9'>
          <div className='card o-hidden border-0 shadow-lg my-5'>
            <div className='card-body p-0'>
              <div className='row'>
                <div className='col-lg-6 d-none d-lg-block bg-login-image' />
                <div className='col-lg-6'>
                  <div className='p-5'>
                    <form className='user' onSubmit={submitHandler}>
                      <div className='text-center'>
                        <h1 className='h4 mb-4' style={{ color: '#800040' }}>Registrarse</h1>
                      </div>
                      <div className='form-group row'>
                        <div className='col-sm'>
                          <input
                            type='text' className='form-control form-control-user'
                            id='name' aria-describedby='emailHelp'
                            placeholder='Nombre' onChange={changeHandler} style={{ color: '#800040' }}
                          />
                        </div>
                        <div className='col-sm'>
                          <input
                            type='text' className='form-control form-control-user'
                            id='a_materno' aria-describedby='emailHelp'
                            placeholder='Apellido Materno' onChange={changeHandler} style={{ color: '#800040' }}
                          />
                        </div>
                        <div className='col-sm'>
                          <input
                            type='text' className='form-control form-control-user'
                            id='a_paterno' aria-describedby='emailHelp'
                            placeholder='Apellido Paterno' onChange={changeHandler} style={{ color: '#800040' }}
                          />
                        </div>
                      </div>

                      <div className='form-group'>
                        <input
                          type='text' className='form-control form-control-user'
                          id='num_trabajador' aria-describedby='emailHelp'
                          placeholder='Ingresa tu numero de trabajador' style={{ color: '#800040' }} onChange={changeHandler}
                        />
                      </div>
                      <div className='form-group'>
                        <input
                          type='text' className='form-control form-control-user'
                          id='num_trabajador' aria-describedby='emailHelp'
                          placeholder='Ingresa tu correo' style={{ color: '#800040' }} onChange={changeHandler}
                        />
                      </div>
                      <div className='form-group'>
                        <input
                          type='password' className='form-control form-control-user'
                          id='password' aria-describedby='emailHelp'
                          placeholder='Ingresa tu contraseña' style={{ color: '#800040' }} onChange={changeHandler}
                        />
                      </div>
                      <button type='submit' className='btn btn-primary btn-user btn-block'>
                        Registrarse
                      </button>
                    </form>
                    <hr />
                    <div className='text-center'>
                      <a className='small' href='forgot-password.html' style={{ color: '#800040' }}>¿Olvidaste le contraseña?</a>
                      <div>
                        <Link to='/' class='small' style={{ color: '#800040' }}>Ya tienes una cuenta? Inicia Sesion</Link>
                      </div>
                    </div>
                    <div className='text-center'>
                      <p className='h4 mb-4' style={{ color: '#800040' }}>{Registrarse}</p>
                      <Link to='/' />
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
} /* */
