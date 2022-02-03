import { useState } from 'react'
import { Link } from 'react-router-dom'
import FieldFormSmall from './FieldFormSmall'
import HeadingForm from './HeadingUser'
import Field from './FieldForm'
import LoginLink from './LoginLink'
export default function FormRegister () {
  const [user, setUser] = useState({
    nombre: '',
    num_trabajador: '',
    apellido_paterno: '',
    apellido_materno: '',
    password: '',
    correo: ''
  })
  const [value, setValue] = useState({
    nombre: '',
    num_trabajador: '',
    apellido_paterno: '',
    apellido_materno: '',
    password: '',
    correo: ''
  })

  const [Registrarse, setRegistrarse] = useState('')
  function submitHandler (event) {
    event.preventDefault()
    setUser(value)
    fetch('http://localhost:8080/administration/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        numero_trabajador: user.num_trabajador,
        nombre: user.nombre,
        password: user.password,
        apellido_paterno: user.apellido_paterno,
        apellido_materno: user.apellido_materno,
        correo: user.correo
      })
    })
      .then((res) => res.json())
      .then((res) => setRegistrarse(res.message))
  }

  function changeHandler (event) {
    const { id, value } = event.target
    setValue((prevValue) => {
      console.log(prevValue)
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
                    <HeadingForm
                    text = "Registrarse "
                    />
                      <div className='form-group row'>
                        <FieldFormSmall
                        type ='text'
                        id = 'nombre'
                        placeholder = 'Nombre'
                        Handler = {changeHandler}
                        />
                        <FieldFormSmall
                        type ='text'
                        id = 'apellido_paterno'
                        placeholder = 'Apellido Paterno'
                        Handler = {changeHandler}
                        />
                        <FieldFormSmall
                        type ='text'
                        id = 'apellido_materno'
                        placeholder = 'Apellido Materno'
                        Handler = {changeHandler}
                        />
                      </div>
                      <Field
                      type ='text'
                      id = 'num_trabajador'
                      placeholder = 'Numero de trabajador'
                      Handler = {changeHandler}
                      />
                      <Field
                      type ='text'
                      id = 'correo'
                      placeholder = 'Correo Electronico'
                      Handler = {changeHandler}
                      />
                      <Field
                      type ='password'
                      id = 'password'
                      placeholder = 'Contrasena'
                      Handler = {changeHandler}
                      />
                      <div>
                      <button type='submit' className='btn btn-primary btn-user btn-block'>
                        Registrarse
                      </button>
                       </div>
                    </form>
                    <hr />
                    <div className='text-center'>
                      <a className='small' href='forgot-password.html' style={{ color: '#800040' }}>¿Olvidaste le contraseña?</a>
                    <LoginLink
                    to = "/"
                    text = 'Ya tienes una cuenta? Inicia sesion'
                    />
                    </div>
                    <div className='text-center'>
                      <p className='h4 mb-4' style={{ color: '#800040' }}>{Registrarse}</p>
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
