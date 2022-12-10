/* eslint-disable no-unused-vars */
import HeadingForm from '../components/HeadingForm/HeadingForm'
import ButtonLogin from '../components/Button/Button'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar'
import styled from 'styled-components'
import { useState } from 'react'
import { InputField, SelectField } from '../components/Field/Fieldcss'
const Correo = styled.textarea`
  width: 100%;
  height: 930px;
  border: 0.5px solid gray; 
  border-radius: 1rem; 
  resize: none;
  padding: 1rem;
  
    font-size : 0.8rem;
    padding : 1.5rem 1rem;
    color : black;
    border : 2px solid #d1d3e2;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    overflow: visible;
    line-height: inherit;
    margin: 0;
    font-family: inherit;
    &:focus {
    background-color: #fff;
    border-color: #fbc587;
    outline: 0;
    }
`
const Wrapper = styled.div`
   display: flex;
   background-color: #f8f9fc;
   width : 100%;
 `
const Content = styled.div`
    background-color: #f8f9fc;
    width: 100%;
    overflow-x: hidden;
    flex-direction: column;
    display: flex !important;
`
const Asunto = styled(InputField)`
  margin-top: 1rem;
  margin-bottom: 1rem;
`
const Container = styled.div`
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    margin-right: auto;
    margin-left: auto;
    width: 100%;
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
      <Sidebar name = "Administrador"
      />
        <Content>

        <Navbar user = {props.worker}/>
        <Container>
          <div className='row justify-content-center'>
            <div className='col-xl-10 col-lg-12 col-md-9'>
              <div className='card o-hidden border-0 shadow-lg my-5'>
                <div className='card-body p-0' style={{ height: '1000px' }}>
                  <div className='row'>
                  <div className='col-lg-6 d-lg-block'>
                  <Asunto
                  type= 'text'
                  id='asunto'
                  placeholder='asunto'
                  onChange={handleChange}
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
                          <SelectField
                            type = 'select'
                            id = 'password'
                            name = 'select'
                      >

                        <option selected="selected">Destinatario</option>
                        <option>Usuarios activos</option>
                        <option>Usuarios inactivos</option>
                        <option>Todos los usuarios</option>
                        </SelectField>
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

        </Container>
        </Content>
        </div>
  )
}
