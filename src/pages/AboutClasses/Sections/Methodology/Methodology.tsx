import { Container, Content, Icon, PlusIcon, Subtitle, TextContent, Title } from "./styles";
import approach from "../../../../assets/abordagem_comunicativa.svg";
import materials from "../../../../assets/material_didatico.svg";
import sites from "../../../../assets/sites.svg";
import plus from "../../../../assets/plus.svg";


const Methodology = () => {
  return(
    <Container>
      <h1>Metodologia</h1>
      <Content>
        <TextContent>
          <Icon src={approach}></Icon>
          <Title>Abordagem comunicativa</Title>
          <Subtitle>Trazendo a gramática de forma contextualizada, com o inglês da vida real</Subtitle>
        </TextContent>
        <PlusIcon src={plus}/>
        <TextContent>
          <Icon src={materials}></Icon>
          <Title>Material didático incluso</Title>
          <Subtitle>Pasta no Google Drive e caderno online</Subtitle>
        </TextContent>
        <PlusIcon src={plus}/>
        <TextContent>
          <Icon src={sites}></Icon>
          <Title>Diversos sites e plataformas</Title>
          <Subtitle>Para deixar a aula mais descontraída</Subtitle>
        </TextContent>
      </Content>      
    </Container>
  )
}

export default Methodology;