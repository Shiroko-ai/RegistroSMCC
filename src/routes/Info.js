import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
export default function Info (props) {
  return (<div id="page-top">
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
    <h1 className="h3 mb-0 text-gray-800">Información</h1>
</div>
<div className="container-fluid">
<div className="card shadow mb-4">
    <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary" style={{ color: 'black' }}>Nombre de usuario</h6>
    </div>

    <div className="card-body">
        <div className="table-responsive">
            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                <tbody>
                    <tr>
                        <td style={{ textDecoration: 'none' }}>
                            Nombre
                        </td>
                        <td>Oscar Iván Palacios Ulloa</td>
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
