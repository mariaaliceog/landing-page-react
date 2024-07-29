import { Container, Image, Text, TextContent } from "./styles";
import photos from "../../../../assets/london_photos.svg"

const LearnEnglish = () => {
  return( 
    <Container>
      <TextContent>
        <h1>Aulas de Inglês</h1>
        <h2>Aprenda inglês e ganhe o mundo</h2><br/>
        <Text>Imagina poder bater papo com pessoas de todos os cantos<br/>do planeta, entender memes internacionais e até fazer<br/>amigos durante aquela viagem dos sonhos.</Text><br/>
        <Text>Na área dos estudos, inglês abre um mundo de<br/>possibilidades. As melhores universidades do mundo<br/>oferecem cursos em inglês. Se você sonha em estudar fora ou<br/>conseguir uma bolsa de estudos, dominar o idioma é<br/>fundamental. E não só para estudar: é uma chance de viver<br/>novas experiências e conhecer culturas diferentes.</Text>
      </TextContent>
      <Image src={photos}/>
    </Container>
  )
}

export default LearnEnglish;