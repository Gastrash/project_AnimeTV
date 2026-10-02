// Login

import React, { useState } from "react";
import { Input, Button, Icon } from "../ui";
import "../../styles/layout/login.css";

export default function Login ({
    className = ""
}){
    return (
        <div className={`login ${className}`}>
            <div className="login__container">
                <h2>Iniciar sesión</h2>
                <Input placeholder="Correo electrónico" />
                <Input placeholder="Contraseña" type="password" />
                <Button>Iniciar sesión</Button>
            </div>
        </div>
    )
}