import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Input, Button, Icon } from "../ui";
import "../../styles/layout/login.css";

export default function Login ({
    className = "",
    modal = true
}){
    return (
        <div className={`login ${className}`}>
            <div className="login__container flex flex-column justify-center align-center">
                <div className="login__header flex flex-row justify-flex-start align-center">
                    <h2>Iniciar sesión</h2>
                </div>
                <div className="login__body flex flex-column justify-center align-center">
                    <Input className="login__input" placeholder="Nombre de usuario" />
                    <Input className="login__input" placeholder="Contraseña" type="password" />
                </div>
                <div className="login__actions flex flex-column justify-flex-start align-flex-start">
                    <span>¿Olvidaste tu contraseña?</span>
                    <NavLink /*to="/recovery"*/ className="login__actions--link">
                        Olvidé mi contraseña
                    </NavLink>
                </div>
                <div className="login__footer flex flex-row justify-center align-center">
                    <Button size="2" className="login__button">
                        Iniciar sesión
                    </Button>
                    <NavLink /*to="/register"*/ className="login__button--register">
                        Registrarse
                    </NavLink>
                </div>
            </div>
        </div>
    )
}