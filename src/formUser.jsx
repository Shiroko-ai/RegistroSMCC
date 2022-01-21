import React, { useState } from "react";
import CheckUser from "./CheckUser";
import Headingform from "./HeadingForm";
import InputUser from "./InputUser";
import ButtonUser from "./ButtonUser";


function Form(props){
    var [value, setValue] = useState({
        user: "",
        password: ""
    });
    var [inicioSesion, setInicioSesion] = useState("");
    var [checkUser, setCheckUser] = useState({
        user: "",
        password: ""
    });
    function changeHandler(event){
        const {id, value} = event.target;
        setValue((prevValue) =>{
            
            return{
            ...prevValue,
            [id]: value 
        }
        });
        
    }
    
    function submitHandler(event){
        event.preventDefault();
        setCheckUser(value);
        fetch("http://localhost:8080/maestros/login",{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({'numero_trabajador' : checkUser.user, 'password' : checkUser.password})
        })
        .then (res => res.json())
        .then ((res) => setInicioSesion(res.message));
        ;
    }
   return(<div class="container-center" >
    <div class="row justify-content-center">
        <div class="col-xl-10 col-lg-12 col-md-9">
            <div class="card o-hidden border-0 shadow-lg my-5">
                <div class="card-body p-0">
                    <div class="row">
                        <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
                        <div class="col-lg-6">
                            <div class="p-5">
                                <form class="user" onSubmit={submitHandler}>
                                <div class="text-center">
                        <h1 class="h4 mb-4" style={{color : "#800040"}}>Sistema de control de adeudos</h1>
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control form-control-user"
                                    id="user" aria-describedby="emailHelp"
                                    placeholder="Ingresa tu usuario"  onChange={changeHandler}/>

                            </div>
                            <div class="form-group">
                                <input type="password" class="form-control form-control-user"
                                    id="password" aria-describedby="emailHelp"
                                    placeholder="Ingresa tu contraseña" style={{color : "#800040"}} onChange={changeHandler}/>

                            </div>
                                <CheckUser 
                                id = "remind"
                                label = "Recordar datos"
                                />
                                <button type="submit" class="btn btn-primary btn-user btn-block" text="Iniciar sesion">Iniciar Sesion</button>
                                <button type="button" class="btn btn-primary btn-user btn-block">
                                Registrarse
                                </button>
                                </form>
                                <hr/>
                                <div class="text-center">
                                    <a class="small" href="forgot-password.html" style={{color : "#800040"}}>¿Olvidaste le contraseña?</a>
                                </div>
                                <div class="text-center">
                        <p class="h4 mb-4" style={{color : "#800040"}}>{inicioSesion}</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>

</div>);


}

export default Form;