import styled from 'styled-components';

export const Container = styled.header`
    .background-modal {

        position:absolute;
        background: rgba(0, 0, 0, 0.5);
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 2;
    }

    .modal{
        z-index: 3;
        position: absolute;
        top: 40%;
        left: 35%;

        padding: 30px 40px;
        box-shadow: 0px 0px 20px rgba(54, 63, 78, 0.2);
        border-radius: 30px;
        
        
        background: white;

        h1{
            font-family: Poppins;
            font-style: normal;
            font-weight: normal;
            font-size: 30px;
            line-height: 45px;
            text-align: center;

            color: #363F4E;
        }
        .bottom-area{
            display: flex;
            justify-content: center;
            align-items: center;

            .buttons{
                margin-top: 30px;
                display: flex;
                justify-content: space-between;
                width: 70%;

                button{
                    font-family: Poppins;
                    font-style: normal;
                    font-weight: 600;
                    font-size: 18px;

                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-align: center;

                    color: #FFFFFF;
                    
                    height: 45px;
                    width: 140px;

                    border: none;
                    background: #2DD1AC;
                    border-radius: 30px;
                }

                .red-button{
                    background: #FF4D4B;
                }
            }
        }
    }
`;