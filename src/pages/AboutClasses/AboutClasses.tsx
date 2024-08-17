import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Methodology from "./Sections/Methodology/Methodology";
import Methods from "./Sections/Methods/Methods";
import { Brands, Container, PageContent } from "./styles";
import brands from "../../assets/brand.svg";
import SocialMedias from "../../components/SocialMedias/SocialMedias";
import Prices from "./Sections/Prices/Prices";

const AboutClasses = () => {
  return(
    <Container>
      <Header />
      <PageContent>
        <Methods />
        <Methodology />
        <Brands src={brands}/>
        <Prices />
        <SocialMedias />
      </PageContent>
      <Footer />
    </Container>
  )
}

export default AboutClasses;