import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar'
import styled from 'styled-components'
import { Buttonlogin } from '../components/Button/Buttoncss'
import { Linkd } from '../components/LoginLink/LoginLinkcss'
import { useEffect, useState } from 'react'
const Button = styled(Buttonlogin)`
  text-decoration: none;
  width: 10%;
  &:hover{
    text-decoration: none;
    background-color: #fbc587;
    
  }
`

export default function Admins (props) {
  const [listUsers, setlistUsers] = useState([])
  let list = []
  useEffect(() => {
    fetch('http://localhost:8080/admin/get-admin/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        admins: false
      })
    })
      .then((res) => res.json())
      .then((res) => {
        list = res.sendmaestros
        setlistUsers(list)
      })
  }, [])
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
{/* //getadmin */}
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
    <Linkd to='/register-mmd'>
        <Button>
            Nuevo
            </Button>
        </Linkd>
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
                {listUsers.map((listValue, index) => {
                  return (
                        <tr key={index}>
                            <td>{listValue.nombre}</td>
                            <td>{listValue.user}</td>
                            <td>{listValue.password}</td>
                            <td>Borrar</td>
                        </tr>
                  )
                })}
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
