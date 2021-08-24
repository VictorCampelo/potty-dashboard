import DrawerLateral from "../../components/molecules/DrawerLateral";
import CardShop from "../../components/molecules/CardShop";
import { Container } from "../../styles/pages/shopkeeper";
import CardProduct from "../../components/molecules/CardProduct";
import CardFeedback from "../../components/molecules/CardFeedback";

const shopkeeper = () => {
  return (
    <Container>
      <DrawerLateral/>
      <div className="cards-area">
        <CardShop title="Produtos mais vendidos" dataSelector>
                <CardProduct srcImg="/images/coffee.png" name="Café Preto" cod="cod: 6932" quant="10.569"/>
                <CardProduct srcImg="/images/coffee.png" name="Café Preto" cod="cod: 6932" quant="10.569"/>
                <CardProduct srcImg="/images/coffee.png" name="Café Preto" cod="cod: 6932" quant="10.569"/>
                <CardProduct srcImg="/images/coffee.png" name="Café Preto" cod="cod: 6932" quant="10.569"/>
        </CardShop>

        <CardShop title="Rendimentos" dataSelector>
                <img src="/images/grafico.png" />
        </CardShop>
        
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
                <CardProduct srcImg="/images/coffee.png" name="Café Preto" cod="cod: 6932" quant="10.569"/>
                <CardProduct srcImg="/images/coffee.png" name="Café Preto" cod="cod: 6932" quant="10.569"/>
                <CardProduct srcImg="/images/coffee.png" name="Café Preto" cod="cod: 6932" quant="10.569"/>
                
        </CardShop>

        <CardShop title="Quantidade de acessos a loja" dataSelector>
      
        </CardShop>

      </div>
    </Container>
  );
};

export default shopkeeper;