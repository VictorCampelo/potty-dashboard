import styled from 'styled-components';

export const Container = styled.div`   
    width: 315px;
    margin-bottom: 10px;

    border: 1px solid #D8D9DD;
    box-sizing: border-box;
    border-radius: 11px;

    padding: 5px 10px;

    .title {
        display: flex;
        justify-content: space-between;
        align-items: center;

        h1{
            font-style: normal;
            font-weight: 500;
            font-size: 1rem;

            color: #363F4E;            
        }
        .stars{
            display: flex;
        } 
    }

    p {
        font-style: normal;
        font-weight: normal;
        font-size: 0.80rem;
        line-height: 18px;

        color: #6C7079;
    }
   
        
    h3{
        font-style: normal;
        font-weight: normal;
        font-size: 0.85rem;

        text-align: right;
        color: #B2B5BA;

        margin: 5px 5px 0px 0px;
    }
`;
