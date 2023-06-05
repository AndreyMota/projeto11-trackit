import styled from "styled-components"

export default function Top({ rcs }) {
    return (
        <header data-test="header">  
            <Tup>
                <p>TrackIt</p>
                <img data-test="avatar" src={rcs} alt="" />
            </Tup>
        </header>
        
    )
}

const Tup = styled.div`
    height: 70px;
    width: 100%;
    background: #126BA5; 
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

    display: flex;
    justify-content: space-between;
    align-items: center;
    /* position: fixed;
    top: 0;
    left: 0; */
    p {
        margin-left: 18px;
        font-family: 'Playball', cursive;
        font-weight: 400;
        font-size: 39px;
        color: white;
    }
    img {
        margin-right: 18px;
        width: 51px;
        height: 51px;
    

        border-radius: 98.5px;
    }
`;

/* const Perfil = styled.img`
    width: 51px;
    height: 51px;
    

    border-radius: 98.5px;
`; */