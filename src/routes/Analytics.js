import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import 'charts.css'
// import React, { useState } from 'react'

// const [Graph, SetGraph] = useState('')
// function clickHandler (event) {
//   SetGraph(event.target.id)
// }
export default function Analytics (props) {
  // if (Graph) { console.log('aaaa') }
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
                  <table className="charts-css column show-labels show-heading data-spacing-10"
                    style={{ height: '300px', maxWidth: '200px', margin: '0 auto', '--color': 'rgb(251, 197, 135)' }}>
                    <caption> Tipo de membresía </caption>
                    <thead>
                      <tr>
                        <th scope="col">Tipo de membresía</th>
                        <th scope="col">Número de miembros</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row"> Titular </th>
                        <td style={{ '--size': '0.3' }}> <span className="data"> 30 </span> </td>
                      </tr>
                      <tr>
                        <th scope="row"> Estudiante </th>
                        <td style={{ '--size': '0.9' }}> <span className="data"> 50 </span> </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="row">
                    <div className='col-sm-1'>
                      <button id="genero" style={{ border: '1px solid gray', borderRadius: '5px', padding: '10px' }}>Género</button>
                    </div>
                    <div className='col-sm-1'>
                      <button style={{ border: '1px solid gray', borderRadius: '5px', padding: '10px' }}>Membresía</button>
                    </div>
                    <div className='col-md-2'>
                      <button style={{ border: '1px solid gray', borderRadius: '5px', padding: '10px', width: '100%' }}>Usuarios activos</button>
                    </div>
                  </div>
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
