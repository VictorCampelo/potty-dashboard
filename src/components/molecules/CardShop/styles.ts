import styled from 'styled-components';

export const Container = styled.section`
    min-height: 200px;
    max-height: 46vh;
    margin-right: 20px;

    background: #FFFFFF;

    box-shadow: 0px 0px 20px rgba(54, 63, 78, 0.2);
    border-radius: 30px;
    padding: 15px 20px;

    display: flex;
    flex-direction: column;
    align-items: center;

    h1{
        font-family: Poppins;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 36px;

        text-align: center;

        color: #363F4E;

    }

    select {
        width: 140px;
        border: 1px solid #D8D9DD;
        box-sizing: border-box;
        border-radius: 8px;

        outline: none;
    }

    
    .product {
        width: 100%;
        margin-top: 40px;
        
        max-height: 50vh;
        overflow-y: auto;    
        
        padding-right: 10px;
    }    
`;

