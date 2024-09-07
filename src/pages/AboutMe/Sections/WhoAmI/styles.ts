import styled from 'styled-components';
import { device } from "../../../../styles/devices"

export const Container = styled.section`
  width: 100%;
`;

export const Content = styled.div`
  position: relative;  
`;

export const Text = styled.h1`
  top: 45%;
  left: 20%;
  
  position: absolute;
  transform: translate(-50%, -50%);

  @media ${device.mobileM} {    
    max-width: 100%;
    font-size: 22px;
    margin-left: 2rem;
  }

  @media ${device.mobileL} {    
    max-width: 100%;
    font-size: 22px;
    margin-left: 2rem;
  }

  @media ${device.mobileS} {    
    max-width: 100%;
    font-size: 22px;
    margin-left: 2rem;
  }
`;

export const Image = styled.img`
  width: 100%;
`;

export const Icon = styled.img`
  width: 10%;
`;

export const Wrapper = styled.section`
  margin: 2rem 8rem 0rem;

  display: flex;
  flex-direction: row;

  @media ${device.mobileM} {    
    max-width: 100%;
    margin: 2rem;
    display: flex;
    flex-direction: column;
  }

  @media ${device.mobileS} {    
    max-width: 100%;
    margin: 2rem;
    display: flex;
    flex-direction: column;
  }
  
  @media ${device.mobileL} {    
    max-width: 100%;
    margin: 2rem;
    display: flex;
    flex-direction: column;
  }
`;

export const Column = styled.section`
  width: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3rem;

  padding-left: 1rem;  

  @media ${device.mobileM} {    
    width: 100%;
    gap: 4rem;
    margin-bottom: 4rem;
  }

  @media ${device.mobileS} {    
    width: 100%;
    gap: 4rem;
    margin-bottom: 4rem;
  }

  @media ${device.mobileL} {    
    width: 100%;
    gap: 4rem;
    margin-bottom: 4rem;
  }
  
`;

export const TextContent = styled.div` 
  display: flex;
  flex-direction: row;
  align-items: center;

  gap: 10px;
`;

export const Label = styled.div`
  margin-left: 31px;

  font-size: 20px;
  font-weight: 300;
`;