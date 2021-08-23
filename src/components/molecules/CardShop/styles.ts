import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    min-height: 200px;

    background: #FFFFFF;

    box-shadow: 0px 0px 20px rgba(54, 63, 78, 0.2);
    border-radius: 30px;
    padding: 15px 30px;

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
        width: 500px;
        margin-top: 40px;
        
        height: 400px;
        overflow-y: auto;
        

        .left-area {
            display: flex;
            align-items: center;

            .titles{
                margin-left: 20px;

                display: flex;
                flex-direction: column;

                
                h2{
                    font-weight: 600;
                    font-size: 15px;
                    line-height: 22px; 

                    color: var(--black-800);
                }
                h3{
                    font-family: Poppins;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 12px;
                    line-height: 18px;

                    /* Neutral Dark */

                    color: var(--black-800);
                }
            }
        }

        p{
            font-family: Poppins;
            font-style: normal;
            font-weight: 600;
            font-size: 15px;
            line-height: 22px;
            /* identical to box height */

            text-align: right;
            letter-spacing: 0.095em;

            /* Secondary Dark */

            color: #6598D9;
        }

        .info{
            padding: 10px 20px 10px 10px;

            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 10px;
            background: #F4F4F6;

            border-radius: 8px;
            margin-right: 10px;
        }

    }

    
`;

