import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar'
import 'charts.css'
import { useState } from 'react'
import Field from '../components/Field/Field'
export default function Analytics (props) {
  const [value, setValue] = useState({
    valor1: '',
    valor2: '',
    total: 1,
    nombre1: '',
    nombre2: '',
    Titular: ''
  })
  function changeHandler(event) {
    const valor = event.target.value
    console.log(valor)
    event.preventDefault()
    if (valor === 'ninguno') {
      console.log('entre')
      setValue({
        valor1: '',
        valor2: '',
        total: 1,
        nombre1: '',
        nombre2: '',
        Titular: ''
      })
    } else {
      fetch('http://localhost:8080/user/return-table', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          value: valor
        })
      })
        .then((res) => res.json())
        .then((res) => {
          if (valor === 'genero') {
            setValue({
              valor1: res.valor1,
              valor2: res.valor2,
              total: res.total,
              nombre1: 'Femenino',
              nombre2: 'Masculino',
              Titular: res.Titular
            })
          } else if (valor === 'membresia') {
            setValue({
              valor1: res.valor1,
              valor2: res.valor2,
              total: res.total,
              nombre1: 'Titular',
              nombre2: 'Estudiante',
              Titular: res.Titular
            })
          }
        })
    }
  }
  return (<div id="page-top">

    {/* <!-- Page Wrapper --> */}
    <div id="wrapper">
      <Sidebar
        name="Administrador"
      />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Navbar
            user={props.worker}
          />

          {/* <!-- End of Main Content --> */}
          <div className="container-fluid">

            {/* <!-- Page Heading --> */}
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">Registros de usuarios registrados</h1>
            </div>

            {/* <!-- NOTA: Aquí va la tabla de estado de documentos pero se muestra con JS y AJAX--> */}

            {/* <!-- Begin Page Content --> */}
            <div className="container-fluid">

              {/* <!-- DataTales Example --> */}
              <div className="card shadow mb-4">
                <div className="card-header py-3">
                  <h6 className="m-0 font-weight-bold text-primary" style={{ color: 'black' }}> Analíticas</h6>
                </div>

                <div className="card-body">
                <div className="row" style={{ paddingBottom: '2rem' }}>
                    <div className='col-md-2'>
                      <Field type = 'select' Handler={changeHandler}>
                        <option value="ninguno">Seleccione una opcion</option>
                        <option value="membresia">Membresía</option>
                        <option value="genero">Género</option>
                        {/* <option value="activos">Usuarios Activos</option> */}
                      </Field>
                    </div>
                  </div>
                  <table className="charts-css column show-labels show-heading data-spacing-10"
                    style={{ height: '400px', maxWidth: '200px', margin: '0 auto' }}>
                    <caption style={{ textAlign: 'center' }}> {value.Titular} </caption>
                    <thead>
                      <tr>
                        <th scope="col">Tipo de membresía</th>
                        <th scope="col">Número de miembros</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row"> {value.nombre1} </th>
                        <td style={{ '--size': `${value.valor1 / value.total}`, '--color': '#fbc587' }}> <span className="data"> {value.valor1} </span> </td>
                      </tr>
                      <tr>
                        <th scope="row"> {value.nombre2} </th>
                        <td style={{ '--size': `${value.valor2 / value.total}`, '--color': '#a69d2a' }}> <span className="data"> {value.valor2}</span> </td>
                      </tr>
                    </tbody>
                  </table>

                </div>
              </div>
            </div>
          </div>
          {/* <!-- /.container-fluid --> */}

        </div>
        {/* <!------------------------ FIN DEL CONTENIDO DE LA PÁGINA ----------------------------------------------------->                    */}

      </div>
      {/* <!-- End of Main Content --> */}

      {/* <!-- Footer --> */}

    </div>
    {/* <!-- End of Content Wrapper --> */}

  </div>

  )
}
