import HeadingForm from '../components/HeadingForm/HeadingForm'
import Field from '../components/Field/Field'
import ButtonLogin from '../components/Button/Button'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar'
import { useState } from 'react'
import SMCCLogo from '../components/SMCCLogo'
export default function RegisterUserAdmin (props) {
  const [value, setValue] = useState({
    nombre: '',
    usuario: '',
    password: '',
    isAdmin: false
  })

  const [Registrarse, setRegistrarse] = useState('')
  function submitHandler (event) {
    event.preventDefault()
    console.log(value)
    fetch('http://localhost:8080/admin/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nombre: value.nombre,
        user: value.usuario,
        password: value.password,
        isAdmin: value.isAdmin
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
  return (
    <div id="wrapper">
      <Sidebar
      name = "Administrador"
      />
        <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <Navbar
              user = {props.worker}
              />

            {/* <!-- End of Main Content --> */}

        <div className='container-fluid'>
          <div className='row justify-content-center'>
            <div className='col-xl-10 col-lg-12 col-md-9'>
              <div className='card o-hidden border-0 shadow-lg my-5'>
                <div className='card-body p-0'>
                  <div className='row'>
                  <SMCCLogo/>
                    <div className='col-lg-6'>
                      <div className='p-5'>
                        <form className='user' onSubmit={submitHandler}>
                        <HeadingForm
                        text = "Registrar MMD "
                        />
                          <Field
                          type ='text'
                          id = 'num_trabajador'
                          placeholder = 'Nombre'
                          Handler = {changeHandler}
                          />
                          <Field
                          type ='text'
                          id = 'correo'
                          placeholder = 'Usuario'
                          Handler = {changeHandler}
                          />
                          <Field
                          type ='password'
                          id = 'correo'
                          placeholder = 'Contraseña'
                          Handler = {changeHandler}
                          />
                          <ButtonLogin
                          type = 'submit'
                          text = 'Registrar' />
                        </form>
                        <hr />
                        <div className='text-center'>
                        </div>
                        <div className='text-center'>
                          <p className='h4 mb-4' style={{ color: '#fbc587' }}>{Registrarse}</p>
                        </div>
                      </div>
                    </div>
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
