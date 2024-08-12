import styled from 'styled-components';

export const Container = styled.div<{ isPromotion?: boolean }>`
  width: 518px;
  height: 671px;
  
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;

  border-radius: 10px;
  background-color: ${({ isPromotion }) => (isPromotion ? '#3273DB' : '#FFFFFF')};
  border: ${({ isPromotion }) => (isPromotion ? '10px solid #2843A1' : '1px solid #3273DB')};  
  
  gap: 20px;
`;

export const Title = styled.div<{ isPromotion?: boolean }>`
  font-size: 48px;
  color: ${({ isPromotion }) => (isPromotion ? '#FFFFFF' : '#3273DB')};
`;

export const Subtitle = styled.div<{ isPromotion?: boolean }>`
  font-size: 24px;
  color: ${({ isPromotion }) => (isPromotion ? '#FFFFFF' : '#3273DB')};
`;

export const Price = styled.div<{ isPromotion?: boolean }>`
  font-size: 48px;
  color: ${({ isPromotion }) => (isPromotion ? '#3273DB' : '#FFFFFF')};
`;

export const Parcel = styled.div<{ isPromotion?: boolean }>`
  font-size: 24px;
  color: ${({ isPromotion }) => (isPromotion ? '#3273DB' : '#FFFFFF')};
`;

export const Description = styled.div<{ isPromotion?: boolean }>`
  font-size: 24px;
  color: ${({ isPromotion }) => (isPromotion ? '#FFFFFF' : '#3273DB')};
`;

export const PriceContainer = styled.div<{ isPromotion?: boolean }>`
  width: 351px;
  height: 91px;
  
  display:flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  gap: 5px;
  background-color: ${({ isPromotion }) => (isPromotion ? '#FFFFFF' : '#3273DB')};
  border-radius: 10px;
`;

export const Image = styled.img`
  width: 303px;  
`;