import Top from "./comp/Top";
import Menu from "./comp/Menu";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./Contexts/AuthContext";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Habitos() {
    const [token, setToken] = useState();
    const [hab, setHab] = useState();
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    

    useEffect(() => {
        if (!user) {
            navigate('/');
        } else {
            setToken({
                headers: {
                    Authorization: `Bearer ${user.token}`
                }
            });
        }
        
    }, [user, navigate]);
    

    useEffect(() => {
        axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', token)
            .then((resp) => {
                console.log(resp.data);
                setHab(resp.data);
            }) 
            .catch((er) => {
                console.log(er);
            });
    }, [token]);

    if (!user) {
        return (
            <>
                Oops
            </>
        )
    }

    return (
        <>
            <Top rcs={user.image}/>
            <Conte>
                <div className="sup">
                    <h1>Hábitos</h1><button>+</button>
                </div>
                {(hab.length > 0)? 
                    hab.map(() => {
                    }) 
                :  <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>}

            </Conte>
            <Menu />
        </>
    )
}

const Conte = styled.div`
    margin-top: 28px;
    margin-bottom: 70px;
    margin-left: 18px;
    margin-right: 18px;
    h1 {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        /* identical to box height */


        color: #126BA5;
    }
    .sup {
        background-color: red;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        margin-bottom: 28px;
    }

    p {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;

        color: #666666;
    }
`