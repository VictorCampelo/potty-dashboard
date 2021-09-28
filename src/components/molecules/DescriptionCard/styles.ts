import styled from 'styled-components';

export const Container = styled.section`
    width: 35vw;
    margin-bottom: 20px;
    
    background: #FFFFFF;
    box-shadow: 0px 0px 20px rgba(54, 63, 78, 0.2);
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

            .btn-icon {
                margin-left: 4px;
            }
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

export const Modal = styled.div`
    
    .corpo-modal{
        z-index: 3;
        position: absolute;
        top: 10vh;
        left: 35vw;

        width: 30vw;
        margin-bottom: 20px;
        
        background: #FFFFFF;
        box-shadow: 0px 0px 20px rgba(54, 63, 78, 0.2);
        border-radius: 20px;

        padding: 25px;

        .topo{
            h1{
                font-style: normal;
                font-weight: 600;
                font-size: 20px;


                color: #01AC8A;
            }
            #close{
                position: absolute;
                right: 15px;
                top: 15px;

                cursor: pointer;
            }

            .icon {
                margin-top: 20px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

                img{
                    width: 100px;
                    height: 100px;
                }

                label{
                    margin-top: -25px;
                    margin-right: -70px;
                    background: #6C7079;
                    border: none;
                    border: 3px solid #FFFFFF;
                    border-radius: 30px;

                    width: 32px;
                    height: 32px;

                    display:flex;
                    justify-content: center;
                    align-items: center ;

                    cursor: pointer;
                }

                input[type=file]{
                    display: none;
                }
            }
        }

        .corpo{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .inputs{
                width: 100%;
                h2{
                    margin-top: 10px;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 15px;

                    color: #363F4E;
                }
                .nome{
                    display: flex;
                    align-items: center;
                    width: 100%;

                    border: 1px solid #363F4E;
                    border-radius: 10px;
                    
                    padding: 5px;

                    input{
                        margin-left: 5px;
                        width: 100%;
                        
                        outline: none;
                        border: none;

                        font-style: normal;
                        font-weight: 500;
                        font-size: 12px;
                        line-height: 18px;

                        color: #363F4E;
                    }
                }

                textarea{
                    margin-top: 5px;

                    width: 100%;
                    max-width: 100%;
                    min-width: 100%;
                    max-height: 140px;
                    min-height: 140px;
                    height: 140px;

                    border: 1px solid #363F4E;
                    border-radius: 10px;
                    padding: 5px;

                    outline: none;

                    font-style: normal;
                    font-weight: 500;
                    font-size: 12px;
                    line-height: 18px;

                    color: #363F4E;
                }
            }  

            button{
                margin-top: 20px;
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
    }

    #background-black{
        position: absolute;
        z-index: 2;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;

        background: rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(21px);
    }

`;
