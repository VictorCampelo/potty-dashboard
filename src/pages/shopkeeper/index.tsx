import React, { useState } from 'react';
import DrawerLateral from "../../components/molecules/DrawerLateral";
import CardShop from "../../components/molecules/CardShop";
import { Container } from "../../styles/pages/shopkeeper";
import CardProduct from "../../components/molecules/CardProduct";
import CardFeedback from "../../components/molecules/CardFeedback";

import { Chart} from "react-google-charts";

const shopkeeper = () => {
  const [options, setOptions] = useState({});

  
  return (
    <Container>
      <DrawerLateral greenOption={0}/>

      <div className="cards-area">

        <div className="top-area">
          <CardShop title="Produtos mais vendidos" dataSelector>
            <CardProduct 
              srcImg="/images/coffee.png" 
              name="Café Preto" 
              cod="cod: 6932" 
              quant="10.569"
            />
            
            <CardProduct 
              srcImg="/images/cheese-bread.png" 
              name="Pão de queijo" 
              cod="cod: 5686" 
              quant="4.860"
            />

            <CardProduct 
              srcImg="/images/coffee2.png" 
              name="Cappuccino" 
              cod="cod: 583" 
              quant="2.956"
            />

            <CardProduct 
              srcImg="/images/coffee1.png" 
              name="Chá verde" 
              cod="cod: 6972" 
              quant="1.658"
            />
          </CardShop>

          <CardShop 
            title="Rendimentos" 
            dataSelector 
            style={{width: '100%'}}
          >

          <Chart
              width={'600px'}
              height={'170px'}
              chartType="LineChart"
              loader={<div>Loading Chart</div>}
              data={[
                ['Mês', 'Valores'],
                ["Fev", 10360],
                ["Mar", 13405],
                ["Abr", 12580],
                ["Mai", 12900],
                ["Jun", 14562],
                ["Jul", 16892],
              ]}
              options={{
                hAxis: {
                  title: 'mês',
                },
                vAxis: {
                  title: 'vendas',
                },
              }}
              rootProps={{ 'data-testid': '1' }}
            />
          </CardShop>
        </div>

        <div className="bottom-area">
          <CardShop title="Últimos Feedbacks">
                  <CardFeedback 
                    name="Henrique Soares" 
                    quantStar={5} //max stars is 5
                    text="Entrega extremamente rápida, entregador educado e gentil, produto exatamente como o descrito. Parabéns! Com certeza voltarei a comprar!"
                    time="Há 30 minutos"
                  />
                  <CardFeedback 
                    name="Sara Sousa" 
                    quantStar={2} //max stars is 5
                    text="Infelizmente o produto veio errado, acabei me perjudicando por esse erro bobo."
                    time="Há 2 horas"
                  />
                  <CardFeedback 
                    name="Francisco José" 
                    quantStar={5} //max stars is 5
                    text="Produto perfeito!! Parabéns aos responsáveis"
                    time="Há 3 horas"
                  />
          </CardShop>

          <CardShop title="Últimos produtos vendidos">
                  <CardProduct srcImg="/images/coffee.png" name="Café Preto" cod="cod: 6932" quant="10.569" tipo={2} preco="2,00"/>
                  <CardProduct srcImg="/images/cheese-bread.png" name="Pão de queijo" cod="cod: 6932" quant="10.569" tipo={2} preco="3,00"/>
                  <CardProduct srcImg="/images/coffee2.png" name="Cappuccino" cod="cod: 6932" quant="10.569" tipo={2} preco="10,00"/>
                  <CardProduct srcImg="/images/coffee1.png" name="Chá verde" cod="cod: 6932" quant="10.569" tipo={2} preco="2,00"/>
                  
          </CardShop>

          <CardShop title="Quantidade de acessos a loja" dataSelector>
          
          <Chart
            width={'350px'}
            height={'150px'}
            chartType="ColumnChart"
            loader={<div>Loading Chart</div>}
            data={[
              ['', '', { role: 'style' }],
              ['Qua', 995, ' #6598D9'],
              ['Qui', 440, ' #01AC8A'],
              ['Sex', 1200, ' #6598D9'],
              ['Sáb', 796, ' #01AC8A'],
              ['Dom', 1300, ' #6598D9'],
              ['Seg', 422, ' #01AC8A'],
              ['Ter', 778, ' #6598D9'],
              ['Hoje', 582, '#3C8EFC'], 
            ]}

          
          />
         
          </CardShop>
        </div>

      </div>
    </Container>
  );
};

export default shopkeeper;