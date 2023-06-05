import { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";

export default function Cadastro() {
    const [email, setEmail] = useState('');
    const [nome, setNome] = useState('');
    const [image, setImage] = useState('');
    const [pass, setPass] = useState('');
    const [load, setLoad] = useState(false);

    const navigate = useNavigate();

    const handleForm = (event, qual) => {
        qual(event.target.value);
    }


    /* {
        email: "...",
        name: "...",
        image: "...",
        password: "..."
    } */

    const subm = (e) => {
        e.preventDefault();
        setLoad(true);
        console.log(`${email}, ${nome}, ${image}, ${pass}`)
        if (email && nome && image && pass) {
            const obj = {
                email: email,
                name: nome,
                image: image,
                password: pass
            }
            console.log(obj);
            axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', obj, {
                headers: {
                    'Content-Type': 'application/json',
                    /* 'Accept': 'application/json' */
                }
            })
                .then(() => {
                    console.log('deu then');
                    navigate('/');
                })
                .catch((ero) => {
                    alert(`Deu errado meu patrão: ${ero}`);
                    setLoad(false);
                })
        }
    }

    return (
        <>
            <p>Cadastro</p>
            <form onSubmit={subm}>
                <Campos>
                    <Campo>
                        <label htmlFor="">email</label> <br />
                        <input onChange={(event) => handleForm(event, setEmail)} disabled={load} value={email} type="email" />
                    </Campo>
                    <Campo>
                        <label htmlFor="">nome</label> <br />
                        <input onChange={(event) => handleForm(event, setNome)} disabled={load} value={nome} type="text" />
                    </Campo>
                    <Campo>
                        <label htmlFor="">foto de perfil</label> <br />
                        <input onChange={(event) => handleForm(event, setImage)} disabled={load} value={image} type="text" />
                    </Campo>
                    <Campo>
                        <label htmlFor="">senha</label> <br />
                        <input onChange={(event) => handleForm(event, setPass)} disabled={load} value={pass} type="password" />
                    </Campo>
                </Campos>
                {load ? <button disabled={load}><ThreeDots/></button> : <button>Cadastrar</button>}
                
            </form>
        </>
    )
}

const Campo = styled.div`
    displat: flex;
    flex-direction: row;
`


const Campos = styled.div`
    displat: flex;
    flex-direction: column;
`