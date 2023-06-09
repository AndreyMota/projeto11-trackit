import styled from "styled-components";
import { Link } from "react-router-dom";
import { CircularProgressbar } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';

export default function Menu({ perc }) {
    return (
        <Rodape>
            <div data-test="menu" className="rodape">
                <Link to={'/habitos'}><p data-test="habit-link">Hábitos</p> </Link>
                <Link to={'/hoje'}>
                    <div data-test="today-link">
                        <CircularProgressbar value={perc} text="Hoje"/>
                    </div>
                </Link>
                <Link to={'/historico'}><p data-test="history-link">Histórico</p></Link>
            </div>
        </Rodape>
    )
}

const Rodape = styled.div`
    .rodape {
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
    }
    
    
`;
