import Sidebar from './components/Sidebar'

export default function GenerateDocument () {
  return (<body id="page-top">

 {/* <!-- Page Wrapper --> */}
 <div id="wrapper">

<Sidebar
name = "ADMINISTRADOR "
/>
     {/* <!-- FIN DEL MENÚ --> */}

{/* <!------------------------ INICIA ENCABEZADO DEL SITIO ------------------------------------------------------------> */}
     {/* <!-- Content Wrapper --> */}
     <div id="content-wrapper" className="d-flex flex-column" style={{ paddingTop: '50px' }}>

         {/* <!-- Main Content --> */}
         <div id="content">

             {/* <!-- Topbar --> */}

             {/* <!-- End of Topbar --> */}
{/* <!------------------------ FIN ENCABEZADO DEL SITIO --------------------------------------------------------------> */}

{/* <!------------------------ INCIA DEL CONTENIDO DE LA PÁGINA ------------------------------------------------------> */}
<div className="container-fluid">

<div className="d-sm-flex align-items-center justify-content-between mb-4">
    <h1 className="h3 mb-0 text-gray-800">Generar Documento</h1>
</div>

<div>
<button className="btn btn-success" style={{ backgroundColor: '#800040', borderColor: '#800040', textDecoration: 'none', boxShadow: 'none' }}>
    <i className="fab">Nuevo</i>
 </button>
<button className="btn btn-success" style={{ backgroundColor: '#800040', borderColor: '#800040' }}>
    <i className="fab">Generar</i>
 </button>
<button className="btn btn-success" style={{ backgroundColor: '#800040', borderColor: '#800040' }}>
    <i className="fab">Limpiar</i>
 </button>

 <div align="right">
    <a href="#" className="btn btn-success" style={{ backgroundColor: '#800040', borderColor: '#800040' }}>
    <i className="fab">Generar y Visualizar</i>
 </a>
 </div>
</div>

<form>
    <tr>
        <th>Nombre del alumno:</th>
        <td>
            <input type="text"/>
        </td>
    </tr>
    <tr>
        <th>No. de boleta:</th>
        <td>
            <input type="text"/>
        </td>
    </tr>

    <tr>
        <th>No. de Materias Adeudadas:</th>
        <td>
            <input type="text"/>
        </td>
    </tr>
    <tr>
            <th>Materia:</th>
            <td>
                <input type="text"/>
            </td>
        </tr>
        <tr>
            <th>Academia:</th>
            <td>
                <input type="text"/>
            </td>
        </tr>
        <tr>
            <th>Docente:</th>
            <td>
                <input type="text"/>
            </td>
        </tr>
</form>

</div>
{/* <!------------------------ FIN DEL CONTENIDO DE LA PÁGINA ----------------------------------------------------->                    */}

         </div>
         {/* <!-- End of Main Content --> */}

         {/* <!-- Footer --> */}
         {/* <!--<footer class="sticky-footer bg-white">
             <div class="container my-auto">
                 <div class="copyright text-center my-auto">
                     <span>Copyright &copy; Your Website 2021</span>
                 </div>
             </div>
         </footer>-->
         <!-- End of Footer --> */}

     </div>
     {/* <!-- End of Content Wrapper --> */}

 </div>
 {/* <!-- End of Page Wrapper --> */}

 {/* <!-- Scroll to Top Button--> */}
 <a className="scroll-to-top rounded" href="#page-top">
     <i className="fas fa-angle-up"></i>
 </a>

 {/* <!-- Logout Modal--> */}
 <div className="modal fade" id="logoutModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
     aria-hidden="true">
     <div className="modal-dialog" role="document">
         <div className="modal-content">
             <div className="modal-header">
                 <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                 <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                     <span aria-hidden="true">×</span>
                 </button>
             </div>
             <div className="modal-body">Selecciona Salir para cerrar la sesión.</div>
             <div className="modal-footer">
                 <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancelar</button>
                 <a className="btn btn-primary" href="login.php">Salir</a>
             </div>
         </div>
     </div>
 </div>

 {/* <!-- Bootstrap core JavaScript--> */}
 <script src="vendor/jquery/jquery.min.js"></script>
 <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

 {/* <!-- Core plugin JavaScript--> */}
 <script src="vendor/jquery-easing/jquery.easing.min.js"></script>

 {/* <!-- Custom scripts for all pages--> */}
 <script src="js/sb-admin-2.min.js"></script>

 {/* <!-- Page level plugins --> */}
 <script src="vendor/chart.js/Chart.min.js"></script>

 {/* <!-- Page level custom scripts --> */}
 <script src="js/demo/chart-area-demo.js"></script>
 <script src="js/demo/chart-pie-demo.js"></script>

</body>)
}
