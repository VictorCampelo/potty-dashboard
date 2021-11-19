import styled from 'styled-components';

export const Container = styled.section`
    width: 35vw;
    margin-bottom: 20px;
    
    background: #FFFFFF;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 20px;
    
    .top{
        display: flex;
        justify-content: space-between;
        margin: 20px 20px;

        .icon{
            margin-left: 5vw;
            

            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            img{
                width: 100px;
                height: 100px;
            }

            h1{
                font-style: normal;
                font-weight: normal;
                font-size: 24px;
                line-height: 36px;
                text-align: center;

                color: #000000;
            }
        }

        button{
            width: 100px;
            height: 35px;
            background: transparent;

            border: 2px solid #2DD1AC;
            box-sizing: border-box;
            border-radius: 30px;

            font-style: normal;
            font-weight: normal;
            font-size: 1rem;

            color: #2DD1AC;

            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    .bottom{
        margin: 20px 25px;
        h1{
            font-style: normal;
            font-weight: 600;
            font-size: 24px;

            color: #01AC8A;
        }

        p{
            font-style: normal;
            font-weight: 500;
            font-size: 12px;
            line-height: 18px;
        }
    }
`;

