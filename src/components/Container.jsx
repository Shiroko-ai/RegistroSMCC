export default function Container({ children }) {
  return (<div id="wrapper">
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
    {children}
    </div>
    </div>
    </div>
    </div>
    </div>)
}
