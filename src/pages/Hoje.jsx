import Top from "./comp/Top"
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./Contexts/AuthContext";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";

import dayjs from "dayjs";
import 'dayjs/locale/pt-br'; // Importe a localização desejada
import relativeTime from 'dayjs/plugin/relativeTime'; // Plugin para cálculo de tempo relativo
import utc from 'dayjs/plugin/utc'; // Plugin para trabalhar com fuso horário UTC
import Menu from "./comp/Menu";
// Aplicando localização e plugins
dayjs.locale('pt-br'); // Defina a localização que você importou
dayjs.extend(relativeTime); // Adicione o plugin de tempo relativo
dayjs.extend(utc); // Adicione o plugin de UTC


export default function Hoje() {
    const navigate = useNavigate();
    const {user} = useContext(AuthContext);
    const now = dayjs();
    console.log(now);

    const [custoDate, setCD] = useState(dayjs(now.format('YYYY-MM-DD')));
    console.log(custoDate);

    useEffect(() => {
        if (!user) {
            navigate('/');
        }
        
    }, [user, navigate]);

    if (!user) {
        return (
            <>
                <ThreeDots />
            </>
        )
    }

    return (
        <>
            <Top rcs={user.image}/>
            <Conte>
                <h1>{custoDate.format('dddd')}, {custoDate.date()}</h1>
                <h2>Nenhum hábito concluído ainda</h2>
            </Conte>
            <Menu perc={20}/>
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
    h2 {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;

        color: #BABABA;
        margin-bottom: 28px;
    }
`;

