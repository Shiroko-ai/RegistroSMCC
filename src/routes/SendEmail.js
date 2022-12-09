import HeadingForm from '../components/HeadingForm/HeadingForm'
import ButtonLogin from '../components/Button/Button'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar'
import styled from 'styled-components'
import { useState } from 'react'
import Field from '../components/Field/Field'
const Correo = styled.textarea`
  width: 100%;
  height: 930px;
  border: 0.5px solid gray; 
  border-radius: 1rem; 
  resize: none;
  padding: 1rem;
`

export default function SendEmail (props) {
  const [mensaje, setMensage] = useState({ message: '', asunto: '' })

  function handleChange(event) {
    const { id, value } = event.target
    setMensage((prevValue) => {
      return ({
        ...prevValue,
        [id]: value
      })
    })
    console.log(mensaje)
  }
  function handleMail(event) {
    event.preventDefault()
    fetch('http://localhost:8080/user/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: mensaje.message,
        asunto: mensaje.asunto
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
                <div className='card-body p-0' style={{ height: '1000px' }}>
                  <div className='row'>
                  <div className='col-lg-6 d-lg-block'>
                  <Field
                  type= 'text'
                  id='asunto'
                  placeholder='asunto'
                  Handler={handleChange}
                      />

                  <Correo
                  onChange={handleChange}
                  placeholder = 'Mensaje'
                  id='message'
                  />
        </div>
                    <div className='col-lg-6' style={{ margin: 'auto 0' }}>
                      <div className='p-5'>
                        <form className='user' onSubmit={handleMail}>
                        <HeadingForm
                        text = "Enviar e-mail"
                        />
                          <div className='form-group row'>
                          <select
                            id = 'password'
                            name = 'select'
                            className = 'form-control-user'
                            style= {{ width: '100%', border: '1px solid gray', height: '70px' }}
                      >

                        <option selected="selected">Destinatario</option>
                        <option>Usuarios activos</option>
                        <option>Usuarios inactivos</option>
                        <option>Todos los usuarios</option>
                        </select>
                        </div>
                        <hr />
                        <ButtonLogin
                        type = 'submit'
                          text = 'Enviar'
                          />

                        </form>
                        <div className='text-center'>
                        </div>
                        <div className='text-center'>
                          <p className='h4 mb-4' style={{ color: '#fbc587' }}></p>
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
