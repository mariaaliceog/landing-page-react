import Header from "../../components/Header/Header";
import { Container, PageContent } from "./styles"
import WhoAmI from "./Sections/WhoAmI/WhoAmI";
import Reasons from "./Sections/Reasons/Reasons";
import SocialMedias from "../../components/SocialMedias/SocialMedias";

const AboutMe = () => {
  return (
    <Container>
        <Header />
        <PageContent>
          <WhoAmI />
          <Reasons />
          <SocialMedias />
        </PageContent>
      </Container>   
  )
}

export default AboutMe;