import styled from 'styled-components';

export const Container = styled.header`
    .background-modal {

        position: absolute;
        background: rgba(0, 0, 0, 0.5);
        top: -20px;
        left: -20px;
        width: 100vw;
        height: 100vh;
        z-index: 2;
    }

    .modal{
        z-index: 3;
        position: absolute;

        top: 50%;
        left: 50%;
        right: auto;
        bottom: auto;
        transform: translate(-50%, -50%);

        padding: 30px 40px;
        box-shadow: 0px 0px 20px rgba(54, 63, 78, 0.2);
        border-radius: 30px;
        
        
        background: white;

        h1{
            font-family: Poppins;
            font-style: normal;
            font-weight: normal;
            font-size: 1.5rem;
            
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
                width: 90%;

                button{
                    font-family: Poppins;
                    font-style: normal;
                    font-weight: 600;
                    font-size: 1rem;

                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-align: center;

                    color: #FFFFFF;
                    
                    height: 2.5rem;
                    width: 10rem;

                    border: none;
                    background: #2DD1AC;
                    border-radius: 30px;
                }

                .red-button{
                    background: #FF4D4B;
                    margin-right: 20px;
                }
            }
        }
    }
`;