import insta from "../../assets/insta.svg"
import whatsapp from "../../assets/whatsapp.svg"
import linkedin from "../../assets/linkedin.svg"
import { Container, Image, ImageContainer, SubTitle, TextContainer, Title } from "./styles"

const SocialMedias = () => {
  return (
    <Container>
        <TextContainer>
          <Title>O que você está esperando?</Title>
          <SubTitle>Entre em contato comigo!</SubTitle>
        </TextContainer>
        <ImageContainer>
          <Image src={insta} />
          <Image src={whatsapp} />
          <Image src={linkedin} />
        </ImageContainer>
    </Container>
  )
}

export default SocialMedias;