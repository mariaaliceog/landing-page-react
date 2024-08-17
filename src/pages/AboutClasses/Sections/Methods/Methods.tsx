import { Container, Content, Image, ImageContent, Text, TextContent } from "./styles";
import general_english from "../../../../assets/ingles_geral.svg";
import travel from "../../../../assets/viagem.svg";
import conversation from "../../../../assets/conversação.svg";
import business from "../../../../assets/negocios.svg";

const Methods = () => {
  return(
    <Container>
      <h1 style={{ display: 'flex', justifyContent: 'center'}}>Sobre as aulas</h1>
      <Content>
        <h2>Modalidades</h2>
        <ImageContent>
          <TextContent>            
            <Image src={general_english}></Image>
            <Text>Inglês Geral</Text>
          </TextContent>
          <TextContent>
            <Image src={travel}></Image>
            <Text>Viagem</Text>
          </TextContent>
          <TextContent>
            <Image src={conversation}></Image>
            <Text>Conversação</Text>
          </TextContent>
          <TextContent>
            <Image src={business}></Image>
            <Text>Negócios</Text>
          </TextContent>
        </ImageContent>
      </Content>      
    </Container>
  )
}

export default Methods;