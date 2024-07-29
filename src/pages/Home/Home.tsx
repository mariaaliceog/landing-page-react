import Header from "../../components/Header/Header";
import { 
  Container, 
  PageContent, 
} from "./styles";

import Slider from "../../components/Slider/Slider";
import AboutClasses from "./Sections/AboutClasses/AboutClasses";
import LearnEnglish from "./Sections/LearnEnglish/LearnEnglish";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
      <Container>
        <Header />
        <PageContent>
          <LearnEnglish />
          <AboutClasses />
          <Slider />
        </PageContent>
        <Footer />
      </Container>    
  );
}

export default Home;
