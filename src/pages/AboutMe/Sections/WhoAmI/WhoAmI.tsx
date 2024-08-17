import { Column, Container, Content, Icon, Image, Label, Text, TextContent, Wrapper } from "./styles"
import photo from "../../../../assets/who_am_i.svg"
import baby from "../../../../assets/bebe.svg"
import star from "../../../../assets/estrela.svg"
import graduate from "../../../../assets/formacao.svg"
import nieces from "../../../../assets/sobrinhas.svg"
import plane from "../../../../assets/aviao.svg"
import london from "../../../../assets/londres.svg"

const WhoAmI = () => {
  return (  
    <Container>      
      <Content>
        <Text>Quem sou eu?</Text>
        <Image src={photo}/>      
      </Content>
      <Wrapper>
        <Column>
          <TextContent>
            <Icon src={nieces} />
            <h4>Comecei a ensinar inglês como um hobby para minhas sobrinhas</h4>
          </TextContent>
          <TextContent>
            <Icon src={star} />
            <h4>Possuo mais de 5 anos de experiência como professora</h4>
          </TextContent>
          <TextContent>
            <Icon src={graduate} />
            <h4>Formada em Letras com pós graduação em ensino de Língua Inglesa</h4>
          </TextContent>
        </Column>
        <Column>
          <TextContent>
            <Icon src={baby} />
            <h4>Comecei estudar inglês com 14 anos</h4>
          </TextContent>          
          <TextContent>
            <Icon src={plane} />
            <h4>Em 2017 fiz meu tão sonhado intercâmbio, 1 mês em Toronto, no Canadá.</h4>
          </TextContent>
          <TextContent>
            <Icon src={london} />
            <h4>Em 2019 realizei mais um sonho e viajei para Londres</h4>
          </TextContent>
        </Column>
      </Wrapper>
    </Container>
  )
}

export default WhoAmI;