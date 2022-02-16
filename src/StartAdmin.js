import { useEffect, useState } from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
export default function StartAdmin (props) {
  const [maestro, setMaestro] = useState([])
  useEffect(async () => {
    await fetch('http://localhost:8080/administration/getMaestros')
      .then((res) => res.json())
      .then((res) => {
        const maestros = res.sendmaestros
        setMaestro(maestros)
      })
  }, [handleErase])
  function handleNewClick () {

  }
  function handleErase (numeroTrabajador) {
    fetch('http://localhost:8080/administration/delete-maestro', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        numero_trabajador: numeroTrabajador
      })
    })
  }
  function generateRow (docente, index) {
    return (
    <tr key= {index}>
    <td align="center">{docente.numero_trabajador}</td>
    <td align="center">{docente.nombre}</td>
    <td align="center">{docente.apellido_paterno}</td>
    <td align="center">{docente.apellido_materno}</td>
    <td align="center">{docente.correo}</td>
    <td align="center">
        <button href="#" className="btn btn-danger btn-circle btn-sm"
            style={{
              borderRadius: '5px',
              width: '200px',
              backgroundColor: '#C70039'
            }}
            onClick = {() => handleErase(docente.numero_trabajador)}
            >
        Borrar
        </button>
    </td>
    <td align='center'>{docente.isAdmin ? 'Si' : 'No'}</td>
    </tr>)
  }
  return (<div id="page-top">
  {/* <!-- Page Wrapper --> */}
  <div id="wrapper">
    <Sidebar
    name = "Administrador"
    isAdmin = {props.isAdmin}
    />
      <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Navbar
            user = {props.worker}
            />
              <div className="container-fluid">

                  {/* <!-- Page Heading --> */}
                  <div className="d-sm-flex align-items-center justify-content-between mb-4">
                      <h1 className="h3 mb-0 text-gray-800">Registros de Docentes</h1>
                  </div>

                  {/* <!-- NOTA: Aquí va la tabla de estado de documentos pero se muestra con JS y AJAX--> */}

                  {/* <!-- Begin Page Content --> */}
              <div className="container-fluid">
                  {/* <!-- DataTales Example --> */}
                  <div className="card shadow mb-4">
                      <div className="card-header py-3">
                          <h6 className="m-0 font-weight-bold text-primary" style={{ color: 'gray' }}>Docentes</h6>

                          <div align="right">
                              <button className="btn btn-success"
                              onClick={handleNewClick}
                              style={{
                                backgroundColor: '#800040',
                                borderColor: '#800040'
                              }}>Nuevo</button>
                          </div>

                      </div>

                      <div className="card-body">
                          <div className="table-responsive">
                              <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                  <thead>
                                      <tr>
                                          <th align="center">Numero de trabajador</th>
                                          <th align="center">Nombre</th>
                                          <th align="center">Apellido Paterno</th>
                                          <th align="center">Apellido Materno</th>
                                          <th align="center">Correo</th>
                                          <th align="center">Acciones</th>
                                          <th align="center">Administrador</th>
                                      </tr>
                                  </thead>
                                  <tfoot>
                                      <tr>
                                          <th align="center">Numero de trabajador</th>
                                          <th align="center">Nombre</th>
                                          <th align="center">Apellido Paterno</th>
                                          <th align="center">Apellido Materno</th>
                                          <th align="center">Correo</th>
                                          <th align="center">Acciones</th>
                                          <th align="center">Administrador</th>
                                      </tr>
                                  </tfoot>
                                  <tbody>
                                      {maestro.map((docente, index) => {
                                        return (
                                          generateRow(docente, index)
                                        )
                                      })}
                                  </tbody>
                              </table>
                          </div>
                      </div>
                  </div>

              </div>
              {/* <!-- /.container-fluid --> */}

          </div>
          {/* <!-- End of Main Content --> */}

{/* <!------------------------ FIN DEL CONTENIDO DE LA PÁGINA ----------------------------------------------------->                    */}

          </div>
          {/* <!-- End of Main Content --> */}

          {/* <!-- Footer --> */}
      </div>
      {/* <!-- End of Content Wrapper --> */}

  </div>
  {/* <!-- End of Page Wrapper --> */}

  {/* <!-- Scroll to Top Button--> */}
  <a className="scroll-to-top rounded" href="#page-top">
      <i className="fas fa-angle-up"></i>
  </a>

  {/* <!-- Logout Modal--> */}
  <div className="modal fade" id="logoutModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div className="modal-dialog" role="document">
          <div className="modal-content">
              <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                  <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">×</span>
                  </button>
              </div>
              <div className="modal-body">Selecciona Salir para cerrar la sesión.</div>
              <div className="modal-footer">
                  <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancelar</button>
                  <a className="btn btn-primary" href="login.php">Salir</a>
              </div>
          </div>
      </div>
  </div>

  {/* <!-- Bootstrap core JavaScript--> */}
  <script src="vendor/jquery/jquery.min.js"></script>
  <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

  {/* <!-- Core plugin JavaScript--> */}
  <script src="vendor/jquery-easing/jquery.easing.min.js"></script>

  {/* <!-- Custom scripts for all pages--> */}
  <script src="js/sb-admin-2.min.js"></script>

  {/* <!-- Page level plugins --> */}
  <script src="vendor/chart.js/Chart.min.js"></script>

  {/* <!-- Page level custom scripts --> */}
  <script src="js/demo/chart-area-demo.js"></script>
  <script src="js/demo/chart-pie-demo.js"></script>

</div>)
}
