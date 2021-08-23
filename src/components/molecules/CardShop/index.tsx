import { Container } from './styles'; 


const  DrawerLateral: React.FC = () => {
    return (
        <Container>
            <h1>Produtos mais vendidos</h1>   

            <select name="select" id="select-data-info">
                <option value="diario">Diário</option>
                <option value="semanal" selected>Semanal</option>
                <option value="mensal">Mensal</option>
            </select>

            <div className="product">

                <div className="info">
                    <div className="left-area">
                        <img src="/images/coffee.png"/>

                        <div className="titles">
                            <h2>café preto</h2>
                            <h3>cod: 6932</h3>
                        </div>
                    </div>

                    <p>Qnt.: 10.569</p>
                </div>
                <div className="info">
                    <div className="left-area">
                        <img src="/images/coffee.png"/>

                        <div className="titles">
                            <h2>café preto</h2>
                            <h3>cod: 6932</h3>
                        </div>
                    </div>

                    <p>Qnt.: 10.569</p>
                </div>
                <div className="info">
                    <div className="left-area">
                        <img src="/images/coffee.png"/>

                        <div className="titles">
                            <h2>café preto</h2>
                            <h3>cod: 6932</h3>
                        </div>
                    </div>

                    <p>Qnt.: 10.569</p>
                </div>
                <div className="info">
                    <div className="left-area">
                        <img src="/images/coffee.png"/>

                        <div className="titles">
                            <h2>café preto</h2>
                            <h3>cod: 6932</h3>
                        </div>
                    </div>
                    
                    <p>Qnt.: 10.569</p>
                </div>

            </div>

        </Container>
    );
};

export default DrawerLateral;