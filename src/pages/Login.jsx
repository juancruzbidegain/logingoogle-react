import React from 'react'
import Google from "../img/google.png"
import Facebook from "../img/fb.png"

const Login = () => {
    return (
        <div className="container w-75 bg-primary mt-5 rounded shadow">
            <div className="row align-items-center align-items-stretch">
                <div className="col d-none d-lg-block col-md-5 col-lg-5 col-xl-6 rounded bg"></div>
                <div className="col bg-white p-5 col-lg-7 col-xl-6 rounded-end">
                    <div className="text-end">Logo</div>
                    <h2 className="fw-bold text-center pt-5 mb-5">Bienvenido</h2>
                    
                    <form action="#">
                        <div className="mb-4">
                            <label htmlFor="email" className="form-label">Correo Electronico</label>
                            <input type="email" className="form-control" name="email" id=""/>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" name="password" id=""/>
                        </div>
                        <div className="mb-4 form-check">
                            <input type="checkbox" className="form-check-input" name="connected" id=""/>
                            <label htmlFor="connected">Mantenerme conectado</label>
                        </div>

                        <div className="d-grid ">
                            <button type="submit" className="btn btn-primary w-100">Iniciar Sesión</button>
                        </div>

                        <div className="my-3">
                            <span>No tienes una cuenta? <a href="#">Regístrate</a></span> <br/>
                            <span><a href="#">Recuperar password</a></span>
                        </div>
                    </form>

                    {/* Login Social Media */}

                    <div className="container w-100 my-5">
                    <div className="row my-3 text-center">
                        <div className="col-12">Iniciar sesion con</div>
                    </div>
                    <div className="row" >
                        <div className="col">
                            <button className="btn btn-outline-primary w-100 my-1" type="button">
                                <div className="row align-items-center">
                                    <div className="d-none d-md-block col-3 col-lg-4 col-xl-4 col-xxl-3 text-center">
                                        <img src={Facebook} width="32px" alt=""/>
                                    </div>
                                    <div className="col-12 col-md-9 col-lg-8 col-xl-8 col-xxl-9 text-center">
                                        Facebook
                                    </div>
                                </div>
                            </button>
                        </div>
                        <div className="col">
                            <button className="btn btn-outline-danger w-100 my-1" type="button">
                                <div className="row align-items-center">
                                    <div className="d-none d-md-block col-3 col-lg-4 col-xl-4 col-xxl-3 text-center">
                                        <img src={Google} width="32px" alt="" />
                                    </div>
                                    <div className="col-12 col-md-9 col-lg-8 col-xl-8 col-xxl-9 text-center">
                                        Google
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Login
