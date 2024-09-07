import styled from 'styled-components';
import { device } from "../../styles/devices"

export const Container = styled.div`
  width: 100%;  

  gap: 10px;
  
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media ${device.mobileL} {    
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  @media ${device.mobileS} {    
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  @media ${device.mobileM} {    
    display: flex;
    flex-direction: column;
    text-align: center;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  width: 7rem;
  height: 5rem;
`;

export const Title = styled.div`
  font-size: 36px;
`;
