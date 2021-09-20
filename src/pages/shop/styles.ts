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
        
        
        .left-area{
            display: flex;
            flex-direction: column;
            align-items: center;

            height: 95vh;

            margin-right: 20px;

            .config-button{
                width: 23vw;
                height: 6vh;
                margin-top: 20px;

                background: #2DD1AC;
                border-radius: 30px;
                border: none;

                font-style: normal;
                font-weight: 600;
                font-size: 1rem;

                color: #FFFFFF;
            }
        }

        .right-area{
            display: flex;
            flex-direction: column;
            height: 95vh;

            section + section{
                margin-top: 20px;
            }
        }
    }
`;
