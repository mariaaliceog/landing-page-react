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
            <Label>Comecei a ensinar inglês como um hobby para minhas sobrinhas</Label>
          </TextContent>
          <TextContent>
            <Icon src={star} />
            <Label>Possuo mais de 5 anos de experiência como professora</Label>
          </TextContent>
          <TextContent>
            <Icon src={graduate} />
            <Label>Formada em Letras com pós graduação em ensino de Língua Inglesa</Label>
          </TextContent>
        </Column>
        <Column>
          <TextContent>
            <Icon src={baby} />
            <Label>Comecei estudar inglês com 14 anos</Label>
          </TextContent>          
          <TextContent>
            <Icon src={plane} />
            <Label>Em 2017 fiz meu tão sonhado intercâmbio, 1 mês em Toronto, no Canadá.</Label>
          </TextContent>
          <TextContent>
            <Icon src={london} />
            <Label>Em 2019 realizei mais um sonho e viajei para Londres</Label>
          </TextContent>
        </Column>
      </Wrapper>
    </Container>
  )
}

export default WhoAmI;