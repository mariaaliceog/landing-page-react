import { Container, PackageContainer, PageContent } from "./styles";
import package1 from "../../assets/price_1.svg";
import package2 from "../../assets/price_2.svg";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Package from "../../components/Package/Package";
import SocialMedias from "../../components/SocialMedias/SocialMedias";

const Prices = () => {
  return (
    <Container>
      <Header />     
      <PageContent>
        <h1>Preços</h1>
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
        <SocialMedias />
      </PageContent> 
      <Footer />
    </Container>
  )
}

export default Prices;