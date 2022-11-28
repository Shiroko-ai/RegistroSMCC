import { useState } from 'react'
import FieldFormSmall from '../components/FieldFormSmall'
import HeadingForm from '../components/HeadingUser'
import Field from '../components/FieldForm'
import LoginLink from '../components/LoginLink'
import ButtonLogin from '../components/ButtonLogin'
export default function FormRegister () {
  // const [user, setUser] = useState({
  //   nombre: '',
  //   apellido_paterno: '',
  //   apellido_materno: '',
  //   username: '',
  //   password: '',
  //   correo_electronico: '',
  //   correo_institucional: '',
  //   genero: '',
  //   estado: '',
  //   tipo_membresia: '',
  //   area: '',
  //   eventos: '',
  //   colaboracion: '',
  //   motivo: ''
  // })
  const [value, setValue] = useState({
    nombre: '',
    apellido_paterno: '',
    apellido_materno: '',
    username: '',
    password: '',
    correo_electronico: '',
    correo_institucional: '',
    genero: '',
    estado: '',
    tipo_membresia: '',
    area: '',
    eventos: '',
    colaboracion: '',
    motivo: ''
  })
  function submitHandler (event) {
    event.preventDefault()
    console.log(value)
    // setUser(value)
    // console.log(user)
    fetch('http://localhost:8080/user/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nombre: value.nombre,
        apellido_paterno: value.apellido_materno,
        apellido_materno: value.apellido_materno,
        username: value.username,
        password: value.password,
        correo_electronico: value.correo_electronico,
        correo_institucional: value.correo_institucional,
        genero: value.genero,
        estado: value.estado,
        tipo_membresia: value.tipo_membresia,
        area: value.area,
        eventos: value.eventos,
        colaboracion: value.colaboracion,
        motivo: value.motivo
      })
    })
      .then((res) => res.json())
      .then((res) => alert(res.message))
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
    <div className='container-center'>
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
                    text = "Registrarse "
                    />
                      <Field
                      type ='text'
                      id = 'username'
                      placeholder = '¿Cuentas con un numero de socio? Ingrésalo.'
                      Handler = {changeHandler}
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
                      id = 'username'
                      placeholder = 'Nombre de usuario'
                      Handler = {changeHandler}
                      />
                      <Field
                      type ='password'
                      id = 'password'
                      placeholder = 'Contraseña'
                      Handler = {changeHandler}
                      />
                      <Field
                      type ='text'
                      id = 'correo_electronico'
                      placeholder = 'Correo electrónico'
                      Handler = {changeHandler}
                      />
                      <Field
                      type ='text'
                      id = 'correo_institucional'
                      placeholder = 'Correo Institucional'
                      Handler = {changeHandler}
                      />
                      <div className="form-group row">
                      <select
                      id = 'genero'
                      name = 'select'
                      className = 'form-control-user'
                      style = {{ width: '100%', border: '1px solid gray' }}
                      onChange = {changeHandler}
                      >
                      <option selected="selected" style={{ color: 'gray' }}>Genero</option>
                      <option value="Masculino">Masculino</option>
                      <option value="Femenino">Femenino</option>
                      <option value="Desconocido">Prefiero no especificar</option>
                      </select>
                      </div>
                      <div className="form-group row">
                      <select
                      id = 'estado'
                      name = 'select'
                      className = 'form-control-user'
                      style= {{ width: '100%', border: '1px solid gray' }}

                      >
                      <option selected="selected">Estado de la república de procedencia</option>
                      <option value="Aguascalientes">Aguascalientes</option>
                      <option value="Baja California">Baja California</option>
                      <option value="Baja California Sur">Baja California Sur</option>
                      <option value="Campeche">Campeche</option>
                      <option value="Chiapas">Chiapas</option>
                      <option value="Chihuahua">Chihuahua</option>
                      <option value="CDMX">Ciudad de México</option>
                      <option value="Coahuila">Coahuila</option>
                      <option value="Colima">Colima</option>
                      <option value="Durango">Durango</option>
                      <option value="Estado de México">Estado de México</option>
                      <option value="Guanajuato">Guanajuato</option>
                      <option value="Guerrero">Guerrero</option>
                      <option value="Hidalgo">Hidalgo</option>
                      <option value="Jalisco">Jalisco</option>
                      <option value="Michoacán">Michoacán</option>
                      <option value="Morelos">Morelos</option>
                      <option value="Nayarit">Nayarit</option>
                      <option value="Nuevo León">Nuevo León</option>
                      <option value="Oaxaca">Oaxaca</option>
                      <option value="Puebla">Puebla</option>
                      <option value="Querétaro">Querétaro</option>
                      <option value="Quintana Roo">Quintana Roo</option>
                      <option value="San Luis Potosí">San Luis Potosí</option>
                      <option value="Sinaloa">Sinaloa</option>
                      <option value="Sonora">Sonora</option>
                      <option value="Tabasco">Tabasco</option>
                      <option value="Tamaulipas">Tamaulipas</option>
                      <option value="Tlaxcala">Tlaxcala</option>
                      <option value="Veracruz">Veracruz</option>
                      <option value="Yucatán">Yucatán</option>
                      <option value="Zacatecas">Zacatecas</option>
                      </select>
                      </div>
                      <div className="form-group row">
                      <select
                      id = 'tipo_membresia'
                      name = 'select'
                      className = 'form-control-user'
                      style = {{ width: '100%', border: '1px solid gray' }}
                      onChange = {changeHandler}
                      >
                      <option selected="selected" style={{ color: 'gray' }}>Tipo de membresía</option>
                      <option value="Titular">Titular</option>
                      <option value="Estudiante">Estudiante</option>
                      </select>
                      </div>
                      <Field
                      type ='text'
                      id = 'area'
                      placeholder = 'Area de interés'
                      Handler = {changeHandler}
                      />
                      <Field
                      type ='text'
                      id = 'eventos'
                      placeholder = '¿Qué tipo de eventos le gustaría que se organizaran?'
                      Handler = {changeHandler}
                      />
                      <Field
                      type ='text'
                      id = 'colaboracion'
                      placeholder = '¿Le gustaría colaborar con la SMCC en algún evento? (Especifique de que manera lo haría)'
                      Handler = {changeHandler}
                      />
                                            <Field
                      type ='text'
                      id = 'motivo'
                      placeholder = 'Compártanos el motivo de su intención por adherirse a la SMCC'
                      Handler = {changeHandler}
                      />
                      <div className="form-group row">
                      <input type="file" id="credencial" hidden/>
                      <label htmlFor="credencial" className="btn btn-primary btn-user btn-block">Credencial de estudiante</label>
                       </div>
                      <div className="form-group row">
                      <input type="file" id="credencial" hidden/>
                      <label htmlFor="credencial" className="btn btn-primary btn-user btn-block">Comprobante de pago</label>
                       </div>
                      <div className="form-group row">
                      <ButtonLogin
                      type = 'submit'
                      text = 'Registrarse' />
                       </div>

                    </form>
                    <hr />
                    <div className='text-center'>
                    <LoginLink
                    to = "/"
                    text = '¿Ya tienes una cuenta? Inicia sesion'
                    />
                    <LoginLink
                    to = "/"
                    text = '¿Pertenecías a la SMCC pero olvidaste tu ID? Recupéralo.'
                    />
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
