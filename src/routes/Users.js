import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
export default function Users (props) {
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
    <h1 className="h3 mb-0 text-gray-800">Registros de usuarios registrados</h1>
</div>

{/* <!-- NOTA: Aquí va la tabla de estado de documentos pero se muestra con JS y AJAX--> */}

{/* <!-- Begin Page Content --> */}
<div className="container-fluid">

{/* <!-- DataTales Example --> */}
<div className="card shadow mb-4">
    <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary" style={{ color: 'black' }}>Usuarios registrados</h6>
    </div>

    <div className="card-body">
    <div className="row" style={{ paddingBottom: '2rem' }}>
        <div className="col-8">
        <input placeholder="Buscar" style={{
          borderRadius: '5px',
          border: '1px solid gray',
          padding: '10px'
        }}></input></div>
        <div className="col">
        <button style={{
          borderRadius: '10px',
          padding: '10px',
          border: '1px solid gray'
        }}>Nuevo
    </button>
        </div>
        <div className="col">
        <Link to='/send-email'>
        <button style={{
          borderRadius: '10px',
          padding: '10px',
          border: '1px solid gray'
        }}>Envío de correo
    </button>
    </Link>
        </div>
        <div className="col">
        <button style={{
          borderRadius: '10px',
          padding: '10px',
          border: '1px solid gray'
        }}>Exportar datos
    </button>
        </div>
    </div>
        <div className="table-responsive">
            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>ID de usuario</th>
                        <th>Tipo de membresía</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                        <Link to = '/info' style={{ textDecoration: 'none', color: '#858796' }}>
                            Juan Perez Lopez
                        </Link>
                        </td>
                        <td>1</td>
                        <td>Estudiante</td>
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
                        <td>Iván Perez Lopez</td>
                        <td>2</td>
                        <td>Estudiante</td>
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
                        <td>Oscar Perez Lopez</td>
                        <td>3</td>
                        <td>Titular</td>
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
                <tfoot>
                <tr>
                        <th>Nombre</th>
                        <th>ID de usuario</th>
                        <th>Tipo de membresía</th>
                        <th>Acciones</th>
                    </tr>
                </tfoot>
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

  </div>)
}
