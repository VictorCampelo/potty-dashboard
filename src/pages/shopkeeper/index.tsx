import DrawerLateral from "../../components/molecules/DrawerLateral";
import CardShop from "../../components/molecules/CardShop";
import { Container } from "../../styles/pages/shopkeeper";

const shopkeeper = () => {
  return (
    <Container>
      <DrawerLateral/>
      <div className="cards-area">
        <CardShop/>
      </div>
    </Container>
  );
};

export default shopkeeper;