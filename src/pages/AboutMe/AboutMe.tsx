import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import WhoAmI from "./Sections/WhoAmI/WhoAmI";
import Reasons from "./Sections/Reasons/Reasons";
import SocialMedias from "../../components/SocialMedias/SocialMedias";
import { Container, PageContent } from "./styles"

const AboutMe = () => {
  return (
    <Container>
        <Header />
        <PageContent>
          <WhoAmI />
          <Reasons />
          <SocialMedias />
        </PageContent>
        <Footer />
    </Container>   
  )
}

export default AboutMe;