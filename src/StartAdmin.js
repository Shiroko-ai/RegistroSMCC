import { useEffect, useState } from 'react'

export default function StartAdmin () {
  const [maestro, setMaestro] = useState([])
  useEffect(async () => {
    await fetch('http://localhost:8080/administration/getMaestros')
      .then((res) => res.json())
      .then((res) => {
        const maestros = res.sendmaestros
        setMaestro(maestros)
      })
  }, [])
  function generateRow (docente) {
    return (
    <tr>
    <td align="center">{docente.numero_trabajador}</td>
    <td align="center">{docente.nombre}</td>
    <td align="center">{docente.apellido_paterno}</td>
    <td align="center">{docente.apellido_materno}</td>
    <td align="center">{docente.correo}</td>
    <td align="center">
        <a href="#" className="btn btn-danger btn-circle btn-sm"
                                            style={{
                                              'border-radius': '20%',
                                              width: '200px'
                                            }}
                                              >
                                                  Borrar
                                              </a>
                                          </td>
    </tr>)
  }
  return (<div id="page-top">

  {/* <!-- Page Wrapper --> */}
  <div id="wrapper">

{/* <!------------------- INICIA EL MENÚ ----------------------------------------------------------------------------------> */}

      <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar"
      style={{
        backgroundColor: '#800040',
        backgroundImage: 'linear-gradient(180deg, #800040 10%, #800040 100%)'
      }}>

          {/* <!-- Sidebar - Brand --> */}
          <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.php">
              <div className="sidebar-brand-icon rotate-n-15">
                  <i className="fas fa-laugh-wink"></i>
              </div>
              <div className="sidebar-brand-text mx-3">Administrador</div>
          </a>

          {/* <!-- Divisor --> */}
          <hr className="sidebar-divider my-0" />

          {/* <!-- Nav Item - Inicio --> */}
          <li className="nav-item active">
              <a className="nav-link" href="index.php">
                  <i className="fas fa-fw fa-tachometer-alt"></i>
                  <span>Inicio</span></a>
          </li>

          {/* <!-- Divisor --> */}
          <hr className="sidebar-divider"/>

          {/* <!-- DOCUMENTOS --> */}
          <div className="sidebar-heading">
              Documentos
          </div>

          {/* <!-- Nav Item - Pages Collapse Menu --> */}
          <li className="nav-item">
              <a className="nav-link collapsed" href="generar-documento.php">
                  <i className="fas fa-fw fa-cog"></i>
                  <span>Generar documento</span>
              </a>
          </li>
          <li className="nav-item">
              <a className="nav-link collapsed" href="estatus-documentos.php">
                  <i className="fas fa-fw fa-cog"></i>
                  <span>Documentos actualizados</span>
              </a>
          </li>

          {/* <!-- Nav Item - Utilities Collapse Menu --> */}
          <li className="nav-item">
              <a className="nav-link collapsed" href="listado-documentos.php">
                  <i className="fas fa-fw fa-wrench"></i>
                  <span>Listado de documentos</span>
              </a>
              <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities"
                  data-parent="#accordionSidebar">
              </div>
          </li>

          {/* <!-- Divisor --> */}
          <hr className="sidebar-divider" />

          {/* <!-- Heading --> */}
          <div className="sidebar-heading">
              Registros
          </div>

          {/* <!-- Nav Item - Pages Collapse Menu --> */}
          <li className="nav-item">
              <a className="nav-link collapsed" href="docentes.php">
                  <i className="fas fa-fw fa-folder"></i>
                  <span>Docentes</span>
              </a>
          </li>
          <li className="nav-item">
              <a className="nav-link collapsed" href="materias.php">
                  <i className="fas fa-fw fa-folder"></i>
                  <span>Materias</span>
              </a>
          </li>

          {/* <!-- Divider --> */}
          <hr className="sidebar-divider d-none d-md-block"/>

          {/* <!-- CONTRAER EL MENÚ --> */}
          <div className="text-center d-none d-md-inline">
              <button className="rounded-circle border-0" id="sidebarToggle"></button>
          </div>

      </ul>
{/* <!------------------------ FIN DEL MENÚ ---------------------------------------------------------------------------> */}

{/* <!------------------------ INICIA ENCABEZADO DEL SITIO ------------------------------------------------------------> */}
      {/* <!-- Content Wrapper --> */}
      <div id="content-wrapper" className="d-flex flex-column">

          {/* <!-- Main Content --> */}
          <div id="content">

              {/* <!-- Topbar --> */}
              <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                  {/* <!-- Sidebar Toggle (Topbar) --> */}
                  <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                      <i className="fa fa-bars"></i>
                  </button>

                  {/* <!-- Barra de búsqueda --> */}
                  <form
                      className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                      <div className="input-group">
                          <input type="text" className="form-control bg-light border-0 small" placeholder="Buscar"
                              aria-label="Search" aria-describedby="basic-addon2" />
                          <div className="input-group-append">
                              <button className="btn btn-primary" type="button" style={{ backgroundColor: '#800040', borderColor: '#800040' }}>
                                  <i className="fas fa-search fa-sm"></i>
                              </button>
                          </div>
                      </div>
                  </form>

                  {/* <!-- Topbar Navbar --> */}
                  <ul className="navbar-nav ml-auto">

                      {/* <!-- Nav Item - Notificaciones --> */}
                      <li className="nav-item dropdown no-arrow mx-1">
                          <a className="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button"
                              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <i className="fas fa-bell fa-fw"></i>
                              {/* <!-- Counter - Alerts --> */}
                              <span className="badge badge-danger badge-counter">3+</span>
                          </a>
                          {/* <!-- Dropdown - Notificaciones --> */}
                          <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                              aria-labelledby="alertsDropdown">
                              <h6 className="dropdown-header">
                                  Notificaciones
                              </h6>
                              <a className="dropdown-item d-flex align-items-center" href="#">
                                  <div className="mr-3">
                                      <div className="icon-circle bg-primary">
                                          <i className="fas fa-file-alt text-white"></i>
                                      </div>
                                  </div>
                                  <div>
                                      <div className="small text-gray-500">December 12, 2019</div>
                                      <span className="font-weight-bold">A new monthly report is ready to download!</span>
                                  </div>
                              </a>
                              <a className="dropdown-item d-flex align-items-center" href="#">
                                  <div className="mr-3">
                                      <div className="icon-circle bg-success">
                                          <i className="fas fa-donate text-white"></i>
                                      </div>
                                  </div>
                                  <div>
                                      <div className="small text-gray-500">December 7, 2019</div>
                                      $290.29 has been deposited into your account!
                                  </div>
                              </a>
                              <a className="dropdown-item d-flex align-items-center" href="#">
                                  <div className="mr-3">
                                      <div className="icon-circle bg-warning">
                                          <i className="fas fa-exclamation-triangle text-white"></i>
                                      </div>
                                  </div>
                                  <div>
                                      <div className="small text-gray-500">December 2, 2019</div>
                                      Spending Alert: Weve noticed unusually high spending for your account.
                                  </div>
                              </a>
                              <a className="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
                          </div>
                      </li>

                      {/* <!-- Nav Item - Información del usuario --> */}
                      <li className="nav-item dropdown no-arrow">
                          <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <span className="mr-2 d-none d-lg-inline text-gray-600 small" style={{ color: '#800040' }}>Administrador</span>
                              <img className="img-profile rounded-circle"
                                  src="img/undraw_profile.svg" />
                          </a>
                          {/* <!-- Dropdown - Acciones de la cuenta del usuario --> */}
                          <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                              aria-labelledby="userDropdown">
                              <a className="dropdown-item" href="perfil.php">
                                  <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                  Perfil
                              </a>
                              <div className="dropdown-divider"></div>
                              <a className="dropdown-item" href="cerrar.php" data-toggle="modal" data-target="#logoutModal">
                                  <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                  Cerrar sesión
                              </a>
                          </div>
                      </li>

                  </ul>

              </nav>
              {/* <!-- End of Topbar --> */}
{/* <!------------------------ FIN ENCABEZADO DEL SITIO --------------------------------------------------------------> */}

{/* <!------------------------ INCIA DEL CONTENIDO DE LA PÁGINA ------------------------------------------------------> */}
{/* <!-- Begin Page Content --> */}
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
                              <a href="#" className="btn btn-success" style={{
                                backgroundColor: '#800040',
                                borderColor: '#800040'
                              }}>Nuevo</a>
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
                                      </tr>
                                  </tfoot>
                                  <tbody>
                                      {maestro.map((docente) => {
                                        return (
                                          generateRow(docente)
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
