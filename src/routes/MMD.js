import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar'
import { Link } from 'react-router-dom'
export default function Admins (props) {
  return (<div>
    <div id="wrapper">
      <Sidebar
      name = "Administrador"
      />
        <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <Navbar
              user = {props.worker}
              />

<div className="container-fluid">

<div className="d-sm-flex align-items-center justify-content-between mb-4">
    <h1 className="h3 mb-0 text-gray-800">Registros de MMD</h1>
</div>

<div className="container-fluid">

<div className="card shadow mb-4">
    <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">MMD</h6>
    </div>

    <div className="card-body">
    <div className='row' style = {{ paddingBottom: '20px' }}>
    <div className='col'>
    <Link to='/register-mmd'>
        <button style={{
          borderRadius: '10px',
          padding: '10px',
          border: '1px solid gray'
        }}>
            Nuevo
            </button>
        </Link>
    </div>
    </div>
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

</div>
            </div>

        </div>

    </div>

  </div>)
}
