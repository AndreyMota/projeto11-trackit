import { useState } from "react"
import { useContext } from "react";
import { AuthContext } from "./Contexts/AuthContext";
//import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";

export default function Login() {
    const { login } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [load, setLoad] = useState(false);

    const navigate = useNavigate()

    function alteraEmail(e) {
        console.log(e.target.value);
        setEmail(e.target.value);
    }

    function alteraSenha(e) {
        console.log(e.target.value);
        setSenha(e.target.value);
    }

    function setToken(e) {
        e.preventDefault(); 
        setLoad(true);
        console.log('setou');
        if (email && senha) {
            const obj = {
                email: email,
                password: senha
            }
            axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', obj)
                .then((r) => {
                    console.log(r);
                    login(r.data);
                    console.log(r.data);
                    navigate('/hoje');
                })
                .catch((erro) => {
                    alert('Deu errado aqui pae ' + erro);
                    setLoad(false);
                })
        } else {
            alert('Email ou senha incorreto(s)');
            setLoad(false);
        }
        /* login(senha);
        navigate('/test'); */
    }

    function cadGo(e) {
        e.preventDefault();
        navigate('/cadastro');
    }

    return (
        <>
            <form onSubmit={setToken}>
                <label>Email:</label>
                <input  data-test="email-input" disabled={load} value={email} onChange={alteraEmail} type="text" />
                <label>Senha:</label>
                <input data-test="password-input" disabled={load} value={senha} onChange={alteraSenha} type="text" />
                {load ? <button disabled={load}><ThreeDots/></button> : <button data-test="login-btn" >Login</button>}
            </form>
            <p>Ainda não tem cadastro?</p>
            <button data-test="signup-link" onClick={cadGo}>Cadastrar-se</button>
        </>
    )
}