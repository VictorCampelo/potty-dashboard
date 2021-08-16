import styled from 'styled-components';

export const Container = styled.header`
    padding: 30px 20px;
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

    nav{
        width: 80%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        list-style-type: none;

        a {
            text-decoration: none;
            cursor: pointer;       
            margin-left: 3rem;
            font-size: 1.4rem;
            color: var(--black-800); 
            transition: 0.2s color;

            :hover {
                color: var(--gray-600); 
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
            font-size: 1.5rem;
            transition: 0.2s background;
      
            color: #FFFFFF;

            :hover {
                background: var(--green-confirmation-darker);
            }
        }
    }
`;