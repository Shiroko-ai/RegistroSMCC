import { Link } from 'react-router-dom'
export default function notFound() {
  return (<div className="d-flex align-items-center justify-content-center vh-100">
<div className="text-center">
    <h1 className="display-1 fw-bold">404</h1>
    <p className="fs-3"> <span className="text-danger">¡Vaya!</span> Página no encontrada.</p>
    <p className="lead">
        La página a la que quieres acceder no existe
      </p>
    <Link to="/" className="btn btn-primary">Volver a inicio</Link>
</div>
</div>)
}
