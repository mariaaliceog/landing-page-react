import styled from 'styled-components';
import { device } from "../../../../styles/devices"

export const Container = styled.section`
  padding: 2rem;

  display:flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  gap: 5rem;
`;

export const IconsContent = styled.div`
  height: 80%;

  display:flex;
  flex-direction: row;  
  justify-content: space-between;
  align-items: center;

  gap: 3rem;

  @media ${device.mobileM} {
    display: flex;
    flex-direction: column;
  }

  @media ${device.mobileS} {    
    display: flex;
    flex-direction: column;
  }

  @media ${device.mobileL} {    
    display: flex;
    flex-direction: column; 
  }

  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
  }
`;

export const LabelContent = styled.div`
  width: 100%;
  height: auto;

  display:flex;
  flex-direction: column;  
  align-items: center;
  text-align: center;
  position: relative;

  background-color: #66BADE59;
  border-radius: 10px;
  gap: 3px;
  padding: 1rem;

  @media ${device.mobileM} {
    height: auto;
  }

  @media ${device.mobileS} {    
    height: auto;
  }

  @media ${device.mobileL} {    
    height: auto;
  }
`;

export const Icon = styled.img`
  width: 12rem;
  height: 12rem;

  margin-bottom: 1rem;
`;

export const Label = styled.div`
  font-size: 20px;
  font-weight: bold;
`;
