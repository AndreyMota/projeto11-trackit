import styled from "styled-components"

export default function Top({ rcs }) {
    return (
        <>  
            <Tup>
                <p>TrackIt</p>
                <Perfil src={rcs}/>
            </Tup>
        </>
        
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
    }
`;

const Perfil = styled.img`
    width: 51px;
    height: 51px;
    

    border-radius: 98.5px;
`;