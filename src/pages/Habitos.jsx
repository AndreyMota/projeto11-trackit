import Top from "./comp/Top";
import Menu from "./comp/Menu";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./Contexts/AuthContext";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Formi from "./comp/Formi";

export default function Habitos() {
    const [config, setToken] = useState();
    const [hab, setHab] = useState();
    const [oncad, setOncad] = useState(false);
    const [load, setLoad] = useState(false);

    const [titulo, setTitulo] = useState('');
    const [opcoes, setOpcoes] = useState([]);

    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    

    useEffect(() => {
        if (!user) {
            return;
        } else {
            setToken({
                headers: {
                    Authorization: `Bearer ${user.token}`
                }
            });
        }
        
    }, [user]);
    

    useEffect(() => {
        axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', config)
            .then((resp) => {
                console.log(resp.data);
                setHab(resp.data);
            }) 
            .catch((er) => {
                console.log(er);
            });
    }, [config]);

    if (!user || !hab) {
        return (
            <>
                Oops
            </>
        )
    }

    const temCad = () => {
        setOncad(!oncad);
        console.log(!oncad);
    }

    const enviaHab = async (event) => {
        event.preventDefault();
        setLoad(true);
        if (opcoes.length > 0 && titulo !== '') {
          const body = {
            name: titulo,
            days: opcoes
          };
      
          try {
            await axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', body, config);
            setOpcoes([]);
            setTitulo('');
            setLoad(false);
            setOncad(false);
            console.log('Hábito cadastrado com sucesso');
          } catch (error) {
                alert('Deu ruim meu paceiro: ' + error);
                setLoad(false);
          }
        }
      };


      const excluir = (id) => {
        useEffect(() => {
            axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`, config)
                .then((resp) => {
                    console.log(resp);
                }) 
                .catch((er) => {
                    console.log(er);
                });
        }, []);
      };
      

    return (
        <>
            <Top rcs={user.image}/>
            <Conte>
                <div className="sup">
                    <h1>Meus hábitos</h1>
                    <button data-test="habit-create-btn" disabled={oncad} onClick={temCad}>+</button>
                </div>
                {oncad &&
                <Formi set={setOncad} titulo={titulo} setTitulo={setTitulo} opcoes={opcoes} setOpcoes={setOpcoes} load={load} enviaHab={enviaHab}/>
                }
                {(hab.length > 0)? 
                    hab.map((x, y) => {
                        return (
                            <div data-test="habit-container" className="hab">
                                <div className="left">
                                    <h2 data-test="habit-name">{x.name}</h2>
                                    <div className="dias">
                                        <div className="dia" data-test="habit-day" primary={(x.days[y] === 0) ? false : true}>S</div>
                                        <div className="dia" data-test="habit-day" primary={(x.days[y] === 1) ? false : true}>T</div>
                                        <div className="dia" data-test="habit-day" primary={(x.days[y] === 2) ? false : true}>Q</div>
                                        <div className="dia" data-test="habit-day" primary={(x.days[y] === 3) ? false : true}>Q</div>
                                        <div className="dia" data-test="habit-day" primary={(x.days[y] === 4) ? false : true}>S</div>
                                        <div className="dia" data-test="habit-day" primary={(x.days[y] === 5) ? false : true}>S</div>
                                        <div className="dia" data-test="habit-day" primary={(x.days[y] === 6) ? false : true}>D</div>
                                    </div>
                                </div>
                                {/* <button onClick={() => excluir(x.id)}>Excluir</button> */}
                                <ExcluirButton id={x.id}/>
                            </div>
                        )
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

    .hab {
        display: flex;
        justify-content: space-between;
        height: 91px;
        width: 340px;
        background-color: #FFFFFF;
        border-radius: 5px;
        .dias {
            width: 200px;
            height: 30px;
            display: flex;
            flex-direction: row;
            align-items: space-between;
        }
    }
`

const Dia = styled.div`
    .dia {
        margin-right: 3px;
        font-family: 'Lexend Deca';
        font-weight: 400;
        font-size: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30px;
        height: 30px;
        background-color: ${props => props.primary? '#FFFFFF' : '#CFCFCF'};
        color: ${props => props.primary? '#DBDBDB' : '#FFFFFF'};
    }
    
`


const ExcluirButton = ({ id }) => {
    useEffect(() => {
      const excluir = async () => {
        try {
          await axios.delete(
            `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`,
            config
          );
          console.log("Hábito excluído com sucesso");
        } catch (error) {
          console.log("Erro ao excluir hábito:", error);
        }
      };
  
      excluir();
    }, [id]);
  
    return (
      <button onClick={() => console.log("Botão Excluir clicado")}>Excluir</button>
    );
  };
  