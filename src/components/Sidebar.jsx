import { Link } from 'react-router-dom'

export default function Sidebar (props) {
  return (<ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar"
    style={{
      backgroundColor: '#ffffff',
      backgroundImage: 'linear-gradient(180deg, #ffffff 10%, #ffffff 100%)'
    }}>
        <div className="sidebar-brand d-flex align-items-center justify-content-center" to="/index">
            <div className="sidebar-brand-icon rotate-n-15">
            </div>
            <div className="sidebar-brand-text mx-3" style={{ color: 'black' }}>USUARIO </div>
        </div>
        <hr className="sidebar-divider my-0" style={{ borderTop: '1px solid black' }}/>
        <hr className="sidebar-divider"/>
        <div className="sidebar-heading" style={{ color: 'black' }}>
            Usuarios
        </div>
        <li className="nav-item">
            <Link to = "/Admins" className="nav-link">
                <span style={{ color: 'black' }}>Lista de administradores</span>
            </Link>
            <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities"
                data-parent="#accordionSidebar">
            </div>
        </li>
        <li className="nav-item">
            <Link to = "/MMD" className="nav-link">
                <span style={{ color: 'black' }}>Lista de MMD</span>
            </Link>
        </li>
        <li className="nav-item">
        <Link to = "/users" className="nav-link">
                <span style={{ color: 'black' }}>Lista de usuarios registrados</span>
            </Link>
        </li>
        <li className="nav-item">
            <Link to = "/analytics" className="nav-link">
                <span style={{ color: 'black' }}>Analíticas</span>
            </Link>
        </li>

    </ul>

  )
}
