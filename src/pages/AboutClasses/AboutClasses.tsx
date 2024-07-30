import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Methods from "./Sections/Methods/Methods";
import { Container, PageContent } from "./styles";

const AboutClasses = () => {
  return(
    <Container>
      <Header />
      <PageContent>
        <Methods />
      </PageContent>
      <Footer />
    </Container>
  )
}

export default AboutClasses;