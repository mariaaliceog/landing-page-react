import numberOne from "../../../../assets/1.svg"
import numberTwo from "../../../../assets/2.svg"
import numberThree from "../../../../assets/3.svg"
import numberFour from "../../../../assets/4.svg"
import { Container, Icon, Row, Text, Wrapper } from "./styles"

const Reasons = () => {
  return (  
    <Container>     
        <Text>Por que fazer aulas comigo?</Text>
      <Wrapper>
        <Row>          
          <Icon src={numberOne} />
          <h4>Comecei a ensinar inglês como um hobby para minhas sobrinhas</h4>          
        </Row>
        <Row>          
          <Icon src={numberTwo} />
          <h4>Aulas dinâmicas, com jogos, músicas, vídeos e muito conteúdo do dia a dia</h4>          
        </Row>
        <Row>          
          <Icon src={numberThree} />
          <h4>Inglês no seu ritmo, respeitando seu tempo</h4>          
        </Row>
        <Row>          
          <Icon src={numberFour} />
          <h4>Ambiente descontraído para você falar em inglês sem medo, desde o primeiro dia</h4>          
        </Row>
      </Wrapper>
    </Container>
  )
}

export default Reasons;