import React from 'react'

const Login = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col"></div>
                <div className="col">
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
                </div>
            </div>
        </div>
    )
}

export default Login
