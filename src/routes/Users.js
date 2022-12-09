import { useEffect, useState } from 'react'
import { ExportToCsv } from 'export-to-csv'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar'
export default function Users (props) {
  const [listUsers, setlistUsers] = useState([])
  const [tableUsers, setTableUsers] = useState([])
  let list = []
  useEffect(() => {
    fetch('http://localhost:8080/user/get-users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((res) => {
        list = res.sendusers
        console.log(list.nombre)
        setlistUsers(list)
        setTableUsers(listUsers)
      })
  }, [])
  function handleSearch(event) {
    if (event.target.value !== '') {
      setTableUsers(listUsers.filter(o => Object.keys(o).some(k => String(o[k]).toLowerCase().includes(event.target.value.toLowerCase()))))
    } else {
      setTableUsers(listUsers)
    }
  }
  function handleExport() {
    const options = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalSeparator: '.',
      showLabels: true,
      showTitle: true,
      title: 'Datos de usuarios',
      useTextFile: false,
      useBom: true,
      useKeysAsHeaders: true,
      filename: 'Datos de usuarios'
    }

    const csvExporter = new ExportToCsv(options)

    csvExporter.generateCsv(listUsers)
  }
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
        }}
        onChange = {handleSearch}/></div>
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
        }} onClick = {handleExport}>Exportar datos
    </button>
        </div>
    </div>
        <div className="table-responsive">
            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0" >
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>ID de usuario</th>
                        <th>Tipo de membresía</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                   {tableUsers.map((listValue, index) => {
                     return (
                        <tr key={index}>
                            <td>{listValue.nombre}</td>
                            <td>{listValue.password}</td>
                            <td>{listValue.tipo_membresia}</td>
                            <td>Borrar</td>
                        </tr>
                     )
                   })}
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
