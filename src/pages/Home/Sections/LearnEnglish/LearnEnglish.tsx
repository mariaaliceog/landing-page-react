import { Container, Image, TextContent } from "./styles";
import photos from "../../../../assets/photos.svg";
import Button from "../../../../components/Button/Button";

const LearnEnglish = () => {
  return( 
    <Container>
      <TextContent>
        <h1>Aulas de Inglês</h1>
        <h2>Aprenda inglês e ganhe o mundo</h2><br/>
        <h4>Imagina poder bater papo com pessoas de todos os cantos<br/>do planeta, entender memes internacionais e até fazer<br/>amigos durante aquela viagem dos sonhos.</h4><br/>
        <h4>Na área dos estudos, inglês abre um mundo de<br/>possibilidades. As melhores universidades do mundo<br/>oferecem cursos em inglês. Se você sonha em estudar fora ou<br/>conseguir uma bolsa de estudos, dominar o idioma é<br/>fundamental. E não só para estudar: é uma chance de viver<br/>novas experiências e conhecer culturas diferentes.<br/><br/></h4>
        <Button
        isPrimary={false}
        label="Vem conhecer!" 
        to={"/whoAmI"}      
        />
      </TextContent>
      <Image src={photos}/>      
    </Container>
  )
}

export default LearnEnglish;