import styled from 'styled-components';

export const Container = styled.div`
    padding: 20px 20px;
    width: 100%;
    height: 100vh;
    background: #FFFDF9;

    display: flex;

    div.cards-area {
        width: 100%;
        margin-left: 5vw;

        display: flex;
        flex-direction: column;
        justify-content: space-between;

        #imagem-grafico {
            width: 500px;
            height: 150px;
        }
        .top-area{
            display: flex;
        }
        

        .bottom-area{
            display: flex;

        }
    }
`;

