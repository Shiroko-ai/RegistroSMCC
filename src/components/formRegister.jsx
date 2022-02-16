import { useState } from 'react'
import FieldFormSmall from './FieldFormSmall'
import HeadingForm from './HeadingUser'
import Field from './FieldForm'
import LoginLink from './LoginLink'
import IPNImage from './IPNLogin'
import ButtonLogin from './ButtonLogin'
export default function FormRegister () {
  const [user, setUser] = useState({
    nombre: '',
    num_trabajador: '',
    apellido_paterno: '',
    apellido_materno: '',
    password: '',
    correo: '',
    isAdmin: false
  })
  const [value, setValue] = useState({
    nombre: '',
    num_trabajador: '',
    apellido_paterno: '',
    apellido_materno: '',
    password: '',
    correo: '',
    isAdmin: false
  })

  const [Registrarse, setRegistrarse] = useState('')
  function submitHandler (event) {
    event.preventDefault()
    console.log(value)
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
        correo: user.correo,
        isAdmin: user.isAdmin
      })
    })
      .then((res) => res.json())
      .then((res) => setRegistrarse(res.message))
  }

  function changeHandler (event) {
    const { id, value } = event.target
    setValue((prevValue) => {
      return ({
        ...prevValue,
        [id]: value
      })
    })
  }

  function handleCheck (event) {
    const checked = event.target.checked
    if (checked) {
      setValue((prevValue) => {
        return { ...prevValue, isAdmin: true }
      })
    } else {
      setValue((prevValue) => {
        return { ...prevValue, isAdmin: false }
      })
    }
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
                        <div className='form-check' style={{ color: 'black', paddingBottom: '15px' }}>
                         <input className='form-check-input' type='checkbox' value="" id="flexCheckDefault" onChange={handleCheck}
                         /><p style={{ color: 'gray' }}>Usuario administrador</p>
                       </div>
                      <div>
                      <ButtonLogin
                      type = 'submit'
                      text = 'Registrarse' />
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
