import { Container, Content, PackageContainer, Text } from "./styles";
import package1 from "../../../../assets/price_1.svg";
import package2 from "../../../../assets/price_2.svg";
import Package from "../../../../components/Package/Package";

const Prices = () => {
  return (
    <Container>  
        <h1>Destrave seu Futuro com o Inglês! 🌍</h1>
        <Content>
          <Text>Quer avançar na carreira, viajar pelo mundo,ou simplesmente dominar um novo idioma? As nossas aulas de inglês são a chave que você precisa!</Text>
          <PackageContainer>               
            <Package
              isPromotion={false}
              title="Pacote Individual"
              parcel="6x"
              price="R$ 250,00"
              subtitle="23 aulas"
              description="R$ 1.425,00 à vista"
              image={package1}
            />                    
            <Package
              isPromotion={true}
              title="Pacote Dupla"
              parcel="6x"
              price="R$ 300,00"
              subtitle="23 aulas"
              description="R$ 1.800,00 à vista"
              image={package2}
            />            
          </PackageContainer>  
        </Content>      
    </Container>
  )
}

export default Prices;