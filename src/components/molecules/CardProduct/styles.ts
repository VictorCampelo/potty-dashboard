import styled from 'styled-components';

export const Container = styled.div`
    
    .info{
            width: 25vw;
            padding: 10px 20px 10px 10px;

            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 10px;
            background: #F4F4F6;

            border-radius: 8px;
            margin-right: 10px;

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

                text-align: right;
                letter-spacing: 0.095em;

                color: #6598D9;
            }
        }

`;

