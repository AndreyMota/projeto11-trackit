import styled from 'styled-components';

export default function Formi({ set, titulo, setTitulo, opcoes, setOpcoes, load, enviaHab }) {
    function handleChange(event) {
        const {value, checked} = event.target;
        if (checked) {
            setOpcoes(pre => [...pre, value]);
        } else {
            setOpcoes(pre => {
                return [...pre.filter(skill => skill !== value)]
            });
        }
    }

    function handleTitu(event) {
        setTitulo(event.target.value);
        console.log(event.target.value)
    }
    console.log(opcoes);


    return (
        <Container>
            <div data-test="habit-create-container" className="opa">
                <form onSubmit={() => enviaHab(event)}>
                    <input data-test="habit-name-input" disabled={load} value={titulo} onChange={handleTitu} type="text" />
                    <label>Seg</label>
                    <input data-test="habit-day" disabled={load} type="checkbox" onChange={handleChange} value={0} />
                    <br />
                    <label>Ter</label>
                    <input data-test="habit-day" disabled={load} type="checkbox" onChange={handleChange} value={1} />
                    <br />
                    <label>Qua</label>
                    <input data-test="habit-day" disabled={load} type="checkbox" onChange={handleChange} value={2} />
                    <br />
                    <label>Qui</label>
                    <input data-test="habit-day" disabled={load} type="checkbox" onChange={handleChange} value={3} />
                    <br />
                    <label>Sex</label>
                    <input data-test="habit-day" disabled={load} type="checkbox" onChange={handleChange} value={4} />
                    <br />
                    <label>Sab</label>
                    <input data-test="habit-day" disabled={load} type="checkbox" onChange={handleChange} value={5} />
                    <br />
                    <label>Dom</label>
                    <input data-test="habit-day" disabled={load} type="checkbox" onChange={handleChange} value={6} />

                    <button data-test="habit-create-save-btn" type='submit'>Enviar</button>
                </form>
            </div>
        </Container>
    )

  
}

const Container = styled.div`
    .opa {
        margin: 0, auto;
        width: 340px;
        height: 180px;
        background-color: gray;
        input {
            width: 30px;
        }
    }
    
`
