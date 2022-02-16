import { Link } from 'react-router-dom'

export default function Sidebar (props) {
  if (props.isAdmin) {
    return (<ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar"
    style={{
      backgroundColor: '#800040',
      backgroundImage: 'linear-gradient(180deg, #800040 10%, #800040 100%)'
    }}>

        {/* <!-- Sidebar - Brand --> */}
        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.php">
            <div className="sidebar-brand-icon rotate-n-15">
            </div>
            <div className="sidebar-brand-text mx-3">ADMINISTRADOR</div>
        </a>

        {/* <!-- Divisor --> */}
        <hr className="sidebar-divider my-0" />

        {/* <!-- Nav Item - Inicio --> */}
        <li className="nav-item active">
            <Link to = "/index">
            <a className="nav-link">
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Inicio</span></a>
                </Link>
        </li>

        {/* <!-- Divisor --> */}
        <hr className="sidebar-divider"/>

        {/* <!-- DOCUMENTOS --> */}
        <div className="sidebar-heading">
            Documentos
        </div>

        {/* <!-- Nav Item - Pages Collapse Menu --> */}
        <li className="nav-item">
            <Link to = "/generate-document" style={{ textDecoration: 'none' }}>
            <a className="nav-link collapsed">
                <i className="fas fa-fw fa-cog"></i>
                <span>Generar documento</span>
            </a>
            </Link>
        </li>

        {/* <!-- Nav Item - Utilities Collapse Menu --> */}
        <li className="nav-item">
            <Link to = "/document-list">
            <a className="nav-link collapsed" >
                <i className="fas fa-fw fa-wrench"></i>
                <span>Listado de documentos</span>
            </a>
            </Link>
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

    )
  } else {
    return (<ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar"
    style={{
      backgroundColor: '#800040',
      backgroundImage: 'linear-gradient(180deg, #800040 10%, #800040 100%)'
    }}>

        {/* <!-- Sidebar - Brand --> */}
        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.php">
            <div className="sidebar-brand-icon rotate-n-15">
            </div>
            <div className="sidebar-brand-text mx-3">USUARIO </div>
        </a>

        {/* <!-- Divisor --> */}
        <hr className="sidebar-divider my-0" />

        {/* <!-- Nav Item - Inicio --> */}
        <li className="nav-item active">
            <Link to = "/index" className="nav-link">
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Inicio</span>
                </Link>
        </li>

        {/* <!-- Divisor --> */}
        <hr className="sidebar-divider"/>

        {/* <!-- DOCUMENTOS --> */}
        <div className="sidebar-heading">
            Documentos
        </div>

        {/* <!-- Nav Item - Pages Collapse Menu --> */}
        <li className="nav-item">
            <Link to = "/generate-document" style={{ textDecoration: 'none' }} className="nav-link">

                <i className="fas fa-fw fa-cog"></i>
                <span>Generar documento</span>

            </Link>
        </li>

        {/* <!-- Nav Item - Utilities Collapse Menu --> */}
        <li className="nav-item">
            <Link to = "/document-list" className="nav-link">

                <i className="fas fa-fw fa-wrench"></i>
                <span>Listado de documentos</span>

            </Link>
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

    )
  }
}
