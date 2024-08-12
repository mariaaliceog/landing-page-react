import { Container, Description, Image, Parcel, Price, PriceContainer, Subtitle, Title } from "./styles";

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