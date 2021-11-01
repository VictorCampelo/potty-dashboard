import styled from 'styled-components';

export const Container = styled.header`
    position: absolute;

    z-index: 1;
    
    .showNames{
        width: 15vw;
        height: 96vh;

        //margin: 20px 20px;
        padding: 1vw 1.2vw;
        border-radius: 30px;
        background: var(--white);

        display: flex;
        justify-content: center;  
        align-items: center;

        box-shadow: 0px 0px 20px rgba(54, 63, 78, 0.2);
        
        nav{
            width: 100%;
            height: 70%;
            //background-color: lightblue;

            display: flex;
            flex-direction: column;
            justify-content: space-between;

            .option{
                display: flex;
                align-items: center;
                cursor: pointer;

                svg {
                    width: 1.2rem;
                    height: 1.2rem;
                    margin-bottom: 0.2rem;
                }

                a{
                    margin-left: 10px;
                    font-family: Poppins;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 0.9rem;

                    color: #363F4E;

                    
                }

                .red-option {
                    margin-left: 10px;
                    font-family: Poppins;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 0.9rem;


                    color: var(--red);

                    
                }
            }    
        } 
    }
    .noShowNames{
        width: 4vw;
        height: 96vh;

        //margin: 20px 20px;
        padding: 1vw 1.2vw;
        border-radius: 30px;
        background: var(--white);

        display: flex;
        justify-content: center;  
        align-items: center;

        box-shadow: 0px 0px 20px rgba(54, 63, 78, 0.2);
        transition: all 0.3s ease-in-out;

        nav{
            width: 100%;
            height: 70%;

            display: flex;
            flex-direction: column;
            justify-content: space-between;

            .option{
                display: flex;
                align-items: center;
                cursor: pointer;

                svg {
                    width: 1.2rem;
                    height: 1.2rem;
                    margin-bottom: 0.2rem;
                }

                a{
                    overflow: hidden;
                    height: 0;
                    width: 0;
                    opacity: 0;
                    transition: all 0.1s ease-in-out;
                    margin-left: 0px;
                }

                .red-option {
                    margin-left: 0px;
                    overflow: hidden;
                    height: 0;
                    width: 0;
                    opacity: 0;
                    transition: all 0.1s ease-in-out;
                }
            }    
        } 

        
    }

    

`;
