import { useState } from "react";
import Button from "../atomos/Button";
import Input from "../moleculas/Input";
function SectionLogin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handlerChangeUsername = (e) => {
        setUsername(e.target.value);
    }
    const handleClick = () => {
        alert(username);
    }
    const [email, setEmail] = useState("");
    const handlerChangeEmail = (e) => {
        setEmail(e.target.value);
        console.log(email)
    }
    const validar = (e) => {

        const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        if (email === '') {
            alert("correo vacio");
        } else if (!regex.test(email)) {
            alert("Correo no valido");
        } else {
            alert("Correo valido");
        }

    }

    return (
        <div className="contenedor">
            <div className="formulario1">
                <div className="contenedor2">
                <Input className="textoLabel" name="email" title="email" type="email" onBlur={validar} onchange={handlerChangeEmail} />

                </div>
                <div className="contenedor2">
                <Input className="textoLabel" name="username" title="user name" type="text" onchange={handlerChangeUsername} />
                </div>
                <div className="contenedor2">
                <Input className="textoLabel" name="password" title="password" type="password" />
                
                </div>
                <div className="contenedor2">
                <Button className="botonCrearCuenta" onClick={()=>handleClick()} textoBoton="crear cuenta"/>
                </div>
            </div>
        </div>
    );
}
export default SectionLogin;