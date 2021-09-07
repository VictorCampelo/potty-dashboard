import styled from 'styled-components';

export const Container = styled.header`
    

    .showNames{
        width: 15vw;
        height: 96vh;

        //margin: 20px 20px;
        padding: 30px 20px;
        border-radius: 19px;
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

                a{
                    margin-left: 30px;
                    font-family: Poppins;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 20px;
                    line-height: 22px;


                    color: #363F4E;

                    
                }

                .red-option {
                    margin-left: 30px;
                    font-family: Poppins;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 20px;
                    line-height: 22px;


                    color: var(--red);

                    
                }
            }    
        } 
    }
    .noShowNames{
        width: 4vw;
        height: 96vh;

        //margin: 20px 20px;
        padding: 30px 20px;
        border-radius: 19px;
        background: var(--white);

        display: flex;
        justify-content: center;  
        align-items: center;

        box-shadow: 0px 0px 20px rgba(54, 63, 78, 0.2), inset 0px 0px 4px rgba(54, 63, 78, 0.2);
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

                a{
                    margin-left: 0;
                    font-family: Poppins;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 0px;
                    line-height: 0;

                    color: #363F4E;

                    overflow: hidden;
                    height: 0;
                    width: 0;
                    opacity: 0;
                    transition: all 0.1s ease-in-out;
                }

                .red-option {
                    margin-left: 0;
                    font-family: Poppins;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 20px;
                    line-height: 0;


                    color: var(--red);

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
