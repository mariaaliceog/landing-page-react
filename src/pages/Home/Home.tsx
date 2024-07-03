import Header from "../../components/Header/Header";
import { 
  Container, 
  Content, 
  Icon, 
  IconsContent, 
  Image, 
  Label, 
  LabelContent, 
  PageContent, 
  Text, 
  TextContent, 
  Wrapper
} from "./styles";
import photos from "../../assets/london_photos.svg"
import icon1 from "../../assets/aulas_ao_vivo.svg"
import icon2 from "../../assets/study_plan.svg"
import icon3 from "../../assets/atividades_diarias.svg"
import icon4 from "../../assets/foco_nas_habilidades.svg"
import Slider from "../../components/Slider/Slider";

const Home = () => {
  return (
      <Container>
        <Header />
        <PageContent>
          <Content>
            <TextContent>
              <h1>Aulas de Inglês</h1>
              <h2>Aprenda inglês e ganhe o mundo</h2><br/>
              <Text>Imagina poder bater papo com pessoas de todos os cantos<br/>do planeta, entender memes internacionais e até fazer<br/>amigos durante aquela viagem dos sonhos.</Text><br/>
              <Text>Na área dos estudos, inglês abre um mundo de<br/>possibilidades. As melhores universidades do mundo<br/>oferecem cursos em inglês. Se você sonha em estudar fora ou<br/>conseguir uma bolsa de estudos, dominar o idioma é<br/>fundamental. E não só para estudar: é uma chance de viver<br/>novas experiências e conhecer culturas diferentes.</Text>
            </TextContent>
            <Image src={photos}/>
          </Content>
          <Wrapper>
            <h1>Como funcionam as aulas?</h1>
            <IconsContent>
              <LabelContent>
                <Icon src={icon1}></Icon>
                <Label>Aulas ao vivo</Label>
                <div>1 hora de duração</div>
              </LabelContent>
              <LabelContent>
                <Icon src={icon2}></Icon>
                <Label>Study Plan</Label>
                <div>Planos de estudos semanal</div>
              </LabelContent>
              <LabelContent>
                <Icon src={icon3}></Icon>
                <Label>Atividades diárias</Label>
                <div>Atividades rápidas para a correria do dia a dia</div>
              </LabelContent>
              <LabelContent>
                <Icon src={icon4}></Icon>
                <Label>Foco nas 4 habilidades</Label>
                <div>Leitura, escrita, fala e escuta</div>
              </LabelContent>            
            </IconsContent>
          </Wrapper>
          <Slider />
        </PageContent>
      </Container>    
  );
}

export default Home;
