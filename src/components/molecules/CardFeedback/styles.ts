import styled from 'styled-components';

export const Container = styled.div`   
    width: 350px;
    margin-bottom: 10px;

    border: 1px solid #D8D9DD;
    box-sizing: border-box;
    border-radius: 11px;

    padding: 5px 5px;

    .title {
        display: flex;
        justify-content: space-between;
        align-items: center;

        h1{
            font-style: normal;
            font-weight: 500;
            font-size: 22px;

            color: #363F4E;            
        }
        .stars{
            display: flex;
        } 
    }

    p {
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 18px;

        color: #6C7079;
    }
   
        
    h3{
        font-style: normal;
        font-weight: normal;
        font-size: 15px;

        text-align: right;
        color: #B2B5BA;

        margin: 10px 5px 0px 0px;
    }
`;
