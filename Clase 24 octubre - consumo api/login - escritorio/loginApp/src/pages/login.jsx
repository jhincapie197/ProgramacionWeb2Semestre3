import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login({onLogin}) {
    let {register, handleSubmit, formState:{errors}} = useForm();
    let navigate = useNavigate();
    let onSubmited = async (data)=>{
        console.log("Datos del formulario");
        console.log(data);
        try {
            let respuesta = await axios.post("http://localhost/loginApi/login", data);
            console.log("Respuesta del servidor");
            console.log(respuesta);
            alert("Bienvenido " + respuesta.data.nombre);
            onLogin();
            navigate("/Dashboard");
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-sm-8">
                <h1 className='text-center text-primary my-5'>INGRESAR</h1>
            </div>
            <div className="col-sm-8">
            <form onSubmit={handleSubmit(onSubmited)}>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" {...register("correo", {required:true})} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    {errors.correo && <p className='text-danger'>Debes escribir un correo válido</p>}
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" {...register("contrasena", {required:true})} className="form-control" id="exampleInputPassword1"/>
                    {errors.contrasena && <p className='text-danger'>Debes escribir una contraseña</p>}
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}
