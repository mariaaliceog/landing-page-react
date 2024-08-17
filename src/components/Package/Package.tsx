import { Container, ContainerPromotion, Description, Image, Parcel, Price, PriceContainer, Subtitle, TextPromotion, Title } from "./styles";

interface Props{
  title: string;
  parcel: string;
  price: string;
  subtitle: string;
  image: string;
  isPromotion?: boolean;
  description: string;
}

const Package = ({ title, parcel, price, subtitle, image, isPromotion, description }: Props) => {
  return (
    <Container isPromotion={isPromotion}>
       {isPromotion && (      
        <ContainerPromotion isPromotion={isPromotion}>
          <TextPromotion>RECOMENDADO</TextPromotion>
        </ContainerPromotion>      
       )}
      <Title isPromotion={isPromotion}>{title}</Title>
      <Subtitle isPromotion={isPromotion}>{subtitle}</Subtitle>
      <PriceContainer isPromotion={isPromotion}>
        <Parcel isPromotion={isPromotion}>{parcel}</Parcel>
        <Price isPromotion={isPromotion}>{price}</Price>
      </PriceContainer>
      <Description isPromotion={isPromotion}>{description}</Description>
      <Image src={image} />
    </Container>
  );
}

export default Package;