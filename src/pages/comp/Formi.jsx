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
            <form onSubmit={() => enviaHab(event)}>
                <input disabled={load} value={titulo} onChange={handleTitu} type="text" />
                <label>Seg</label>
                <input disabled={load} type="checkbox" onChange={handleChange} value={0} />
                <br />
                <label>Ter</label>
                <input disabled={load} type="checkbox" onChange={handleChange} value={1} />
                <br />
                <label>Qua</label>
                <input disabled={load} type="checkbox" onChange={handleChange} value={2} />
                <br />
                <label>Qui</label>
                <input disabled={load} type="checkbox" onChange={handleChange} value={3} />
                <br />
                <label>Sex</label>
                <input disabled={load} type="checkbox" onChange={handleChange} value={4} />
                <br />
                <label>Sab</label>
                <input disabled={load} type="checkbox" onChange={handleChange} value={5} />
                <br />
                <label>Dom</label>
                <input disabled={load} type="checkbox" onChange={handleChange} value={6} />

                <button type='submit'>Enviar</button>
            </form>
        </Container>
    )

  
}

const Container = styled.div`
    margin: 0, auto;
    width: 340px;
    height: 180px;
    background-color: gray;
    input {
        width: 30px;
    }
`
