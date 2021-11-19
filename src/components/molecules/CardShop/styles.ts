import styled from 'styled-components';

export const Container = styled.section`
    min-height: 200px;
    max-height: 45vh;
    margin-right: 20px;

    background: #FFFFFF;

    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 30px;
    padding: 15px 10px;

    display: flex;
    flex-direction: column;
    align-items: center;

    h1{
        font-family: Poppins;
        font-style: normal;
        font-weight: normal;
        font-size: 1.1rem;
        line-height: 36px;

        text-align: center;

        color: #363F4E;

    }

    select {
        width: 6.2rem;
        border: 1px solid #D8D9DD;
        box-sizing: border-box;
        border-radius: 8px;

        font-style: normal;
        font-weight: normal;
        font-size: 0.85rem;

        color: #363F4E;

        outline: none;

    }

    
    .product {
        width: 100%;
        margin-top: 40px;
        
        max-height: 50vh;
        overflow-y: auto; 

        scrollbar-width: thin;
        scrollbar-color: #C4C4C4 transparent;

        ::-webkit-scrollbar {
            width: 6px;
        }
        
        ::-webkit-scrollbar-thumb {
            background-color: #C4C4C4;    
            border-radius: 20px;       
        }

        
        padding-right: 15px;
    }    
`;

