import insta from "../../assets/insta.svg"
import whatsapp from "../../assets/whatsapp.svg"
import linkedin from "../../assets/linkedin.svg"
import { Container, Image, SubTitle, TextContainer, Title } from "./styles"

const SocialMedias = () => {
  return (
    <Container>
        <TextContainer>
          <Title>O que você está esperando?</Title>
          <SubTitle>Entre em contato comigo!</SubTitle>
        </TextContainer>
        <a href="https://www.instagram.com/teacherdenise.ap/" target="_blank" rel="noopener noreferrer">       
          <Image src={insta} />        
        </a>
        <a href="https://www.whatsapp.com/" target="_blank" rel="noopener noreferrer">       
          <Image src={whatsapp} />        
        </a>
        <a href="https://www.linkedin.com/in/denise-oliveira-aguiar-a9316b33/" target="_blank" rel="noopener noreferrer">       
          <Image src={linkedin} />        
        </a>
        
                
    </Container>
  )
}

export default SocialMedias;