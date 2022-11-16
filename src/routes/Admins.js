import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
export default function Admins (props) {
  return (<div id="page-top">

    {/* <!-- Page Wrapper --> */}
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
            <div className="container-fluid">

{/* <!-- Page Heading --> */}
<div className="d-sm-flex align-items-center justify-content-between mb-4">
    <h1 className="h3 mb-0 text-gray-800">Registros de administradores</h1>
</div>

{/* <!-- NOTA: Aquí va la tabla de estado de documentos pero se muestra con JS y AJAX--> */}

{/* <!-- Begin Page Content --> */}
<div className="container-fluid">

{/* <!-- DataTales Example --> */}
<div className="card shadow mb-4">
    <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary" style={{ color: 'black' }}>Administradores</h6>
        {/* <form
                className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                <div className="input-group">
                    <input type="text" className="form-control bg-light border-0 small" placeholder="Buscar"
                        aria-label="Search" aria-describedby="basic-addon2" style={{ position: 'absolute', right: '50px' }} />
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="button" style={{ backgroundColor: '#fbc587', borderColor: '#fbc587' }}>
                            <i className="fas fa-search fa-sm"></i>
                        </button>
                    </div>
                </div>
            </form> */}

    </div>

    <div className="card-body">
        <div className="table-responsive">
            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Usuario</th>
                        <th>Contraseña</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Juan Perez Lopez</td>
                        <td>ROPOPT</td>
                        <td>12345697</td>
                        <td align="center">
                            <a href="#" className="btn btn-warning btn-circle btn-sm">
                                <i className="fas"><img src="img/icon-editar"/></i>
                            </a>
                            <a href="#" className="btn btn-danger btn-circle btn-sm">
                                <i className="fas fa-trash"></i>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>Juan Perez Lopez</td>
                        <td>ROPOPT</td>
                        <td>12345697</td>
                        <td align="center">
                            <a href="#" className="btn btn-warning btn-circle btn-sm">
                                <i className="fas"><img src="img/icon-editar"/></i>
                            </a>
                            <a href="#" className="btn btn-danger btn-circle btn-sm">
                                <i className="fas fa-trash"></i>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>Juan Perez Lopez</td>
                        <td>ROPOPT</td>
                        <td>12345697</td>
                        <td align="center">
                            <a href="#" className="btn btn-warning btn-circle btn-sm">
                                <i className="fas"><img src="img/icon-editar"/></i>
                            </a>
                            <a href="#" className="btn btn-danger btn-circle btn-sm">
                                <i className="fas fa-trash"></i>
                            </a>
                        </td>
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
