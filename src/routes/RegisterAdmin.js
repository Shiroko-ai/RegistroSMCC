import HeadingForm from '../components/HeadingForm/HeadingForm'
import Field from '../components/Field/Field'
import ButtonLogin from '../components/Button/Button'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar'
import { useState } from 'react'
export default function RegisterAdmin (props) {
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
                  <div className='col-lg-6 d-lg-block'>
        <img src= "../components/SMCC.jpg"/>
        </div>
                    <div className='col-lg-6'>
                      <div className='p-5'>
                        <form className='user' onSubmit={submitHandler}>
                        <HeadingForm
                        text = "Registrar administrador "
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
