import styled from 'styled-components';

export const Container = styled.section`
    padding: 30px 20px ;
    
    background: #FEFAEF;

    display: flex;
    justify-content: space-between;  
    align-items: center;

    div{
        height: 20px;
        width: 80px;
        background: grey;
        cursor: pointer;
    }

    ul{
        width: 80%;
        display: flex;
        align-iems: center;
        justify-content: space-between;
        list-style-type: none;
        

        li{
            text-decoration: none;
            cursor: pointer;

           

            a{
                text-decoration: none; 
                font-family: 'Poppins', sans-serif;
                font-style: normal;
                font-weight: normal;
                font-size: 26px;
    
                color: #000000; 
            }
        }

        button {
            padding: 2px 20px;
            
            border-radius: 15px;
            border: none;
            background: #2DD1AC;
            margin-left: 30px;
            cursor: pointer;
      
            font-family: Poppins;
            font-style: normal;
            font-weight: normal;
            font-size: 26px;
      
            color: #FFFFFF;
          }
    }
`;