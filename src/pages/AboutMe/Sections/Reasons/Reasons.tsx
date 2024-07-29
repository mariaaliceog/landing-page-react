import numberOne from "../../../../assets/1.svg"
import numberTwo from "../../../../assets/2.svg"
import numberThree from "../../../../assets/3.svg"
import numberFour from "../../../../assets/4.svg"
import { Container, Icon, Label, Row, Text, Wrapper } from "./styles"

const Reasons = () => {
  return (  
    <Container>     
        <Text>Por que fazer aulas comigo?</Text>
      <Wrapper>
        <Row>          
          <Icon src={numberOne} />
          <Label>Comecei a ensinar inglês como um hobby para minhas sobrinhas</Label>          
        </Row>
        <Row>          
          <Icon src={numberTwo} />
          <Label>Aulas dinâmicas, com jogos, músicas, vídeos e muito conteúdo do dia a dia</Label>          
        </Row>
        <Row>          
          <Icon src={numberThree} />
          <Label>Inglês no seu ritmo, respeitando seu tempo</Label>          
        </Row>
        <Row>          
          <Icon src={numberFour} />
          <Label>Ambiente descontraído para você falar em inglês sem medo, desde o primeiro dia</Label>          
        </Row>
      </Wrapper>
    </Container>
  )
}

export default Reasons;