export default function Navbar (props) {
  return (
        <nav className="navbar navbar-expand navbar-light topbar mb-4 static-top shadow" style={ { backgroundColor: '#b1b1b1' }}>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown no-arrow">
                    <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="mr-2 d-none d-lg-inline text-gray-600 small" style={{ color: '#800040' }}>{props.user}</span>
                        <img className="img-profile rounded-circle"
                            src="img/undraw_profile.svg" />
                    </a>
                </li>

            </ul>

        </nav>)
}
