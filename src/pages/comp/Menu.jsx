import styled from "styled-components";
import { Link } from "react-router-dom";
import { CircularProgressbar } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';

export default function Menu({ perc }) {
    return (
        <Rodape>
            <Link to={'/habitos'}><p>Hábitos</p> </Link>
            <CircularProgressbar value={perc} text="Hoje"/>    
            <p>Histórico</p>
        </Rodape>
    )
}

const Rodape = styled.div`
    height: 70px;
    width: 100%;
    background-color: gray;
    position: fixed;
    bottom: 0;
    left: 0;

    display: flex;
    justify-content: space-around;
    align-items: center;

    .CircularProgressbar {
        background-color: rgba(82, 182, 255, 1);
        border-radius: 45px;
        width: 91px;
        height: 91px;
        margin-bottom: 50px;
    
        .CircularProgressbar-text {
            fill: rgba(255, 255, 255, 1);
        }
        .CircularProgressbar-background {
            fill: #52B6FF;
        }
        .CircularProgressbar-trail {
            stroke: inherit;
        }
        .CircularProgressbar-path {
            stroke: #FFFFFF;
        }
    }
    
`;
