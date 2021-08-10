import styled from 'styled-components';

export const Container = styled.section`
    padding: 30px 20px;
    width: 100%;
    
    background: var(--background);

    display: flex;
    justify-content: space-between;  
    align-items: center;
    border-bottom: 2px solid var(--yellow-600);

    div{
        height: 20px;
        width: 80px;
        background: grey;
        cursor: pointer;
    }

    ul{
        width: 80%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        list-style-type: none;

        li{
            text-decoration: none;
            cursor: pointer;       
            margin-left: 3rem;

            a{
                font-size: 1.625rem;
                color: var(--black-1000); 
            }
        }

        button {
            padding: 2px 20px;
            
            border-radius: 15px;
            border: none;
            background: var(--green-confirmation);
            margin-right: 4rem;
            margin-left: 5rem;
            cursor: pointer;
      
            font-family: Poppins;
            font-style: normal;
            font-weight: normal;
            font-size: 26px;
      
            color: #FFFFFF;
          }
    }
`;