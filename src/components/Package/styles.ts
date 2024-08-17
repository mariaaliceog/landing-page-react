import styled from 'styled-components';

export const Container = styled.div<{ isPromotion?: boolean }>`
  width: ${({isPromotion}) => (isPromotion ? '350px' : '310px')};
  height: ${({isPromotion}) => (isPromotion ? '500px' : '450px')};
  
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;
  position: relative;

  border-radius: 10px;
  background-color: ${({ isPromotion }) => (isPromotion ? '#3273DB' : '#FFFFFF')};
  border: ${({ isPromotion }) => (isPromotion ? '10px solid #2843A1' : '1px solid #3273DB')};  
  
  gap: 20px;
`;

export const Title = styled.div<{ isPromotion?: boolean }>`
  font-size: 32px;
  color: ${({ isPromotion }) => (isPromotion ? '#FFFFFF' : '#3273DB')};
`;

export const Subtitle = styled.div<{ isPromotion?: boolean }>`
  font-size: 24px;
  color: ${({ isPromotion }) => (isPromotion ? '#FFFFFF' : '#3273DB')};
`;

export const Price = styled.div<{ isPromotion?: boolean }>`
  font-size: 32px;
  color: ${({ isPromotion }) => (isPromotion ? '#3273DB' : '#FFFFFF')};
`;

export const Parcel = styled.div<{ isPromotion?: boolean }>`
  font-size: 18px;
  color: ${({ isPromotion }) => (isPromotion ? '#3273DB' : '#FFFFFF')};
`;

export const Description = styled.div<{ isPromotion?: boolean }>`
  font-size: 20px;
  color: ${({ isPromotion }) => (isPromotion ? '#FFFFFF' : '#3273DB')};
`;

export const PriceContainer = styled.div<{ isPromotion?: boolean }>`
  width: 200px;
  height: auto;
  
  display:flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  gap: 5px;
  background-color: ${({ isPromotion }) => (isPromotion ? '#FFFFFF' : '#3273DB')};
  border-radius: 10px;
`;

export const Image = styled.img`
  width: 200px;  
`;

export const ContainerPromotion = styled.div<{ isPromotion?: boolean }>`
  top: -20px;
  left: 50%;
  padding: 5px 10px;

  position: absolute;
  transform: translateX(-50%);

  background-color: #2843A1;
  border-radius: 5px;
`;

export const TextPromotion = styled.h5`  
  color: #FFFFFF;
`;