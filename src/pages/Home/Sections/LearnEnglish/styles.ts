import styled from 'styled-components';
import { device } from "../../../../styles/devices"

export const Container = styled.section`
  margin: 0rem 4rem 0rem 4rem;

  display:flex;
  flex-direction: row;
  justify-content: space-between;

  @media ${device.mobileM} {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  @media ${device.mobileS} {    
    display: flex;
    flex-direction: column; 
    gap: 3rem;   
  }

  @media ${device.mobileL} {    
    display: flex;
    flex-direction: column;  
    gap: 3rem;  
  }

  @media ${device.tablet} {
    display: flex;
    flex-direction: column; 
    align-items: center;  
    gap: 3rem; 
  }
`;

export const TextContent = styled.div`
  display:flex;
  flex-direction: column;
`;

export const Image = styled.img`
  width: 35rem;

  @media ${device.mobileM} {    
    max-width: 100%;
  }

  @media ${device.mobileS} {    
    max-width: 100%;  
  }

  @media ${device.mobileL} {    
    max-width: 100%;
  }
`;
