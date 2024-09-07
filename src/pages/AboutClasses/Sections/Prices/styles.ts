import styled from 'styled-components';
import { device } from "../../../../styles/devices";

export const Container = styled.div`  
  display: flex;
  align-items: center;
  justify-content: center;

  background-image: url("src/assets/earth.jpg");
  background-repeat: no-repeat;
  background-size: cover;

  flex-direction: column;
  padding: 3rem 0;
  gap: 60px;

  @media ${device.mobileL} {
    padding: 2rem 2rem;
  }
  
  @media ${device.mobileS} {
    padding: 2rem 2rem;
  }

  @media ${device.mobileM} {
    padding: 2rem 2rem;
  }
`;

export const Content = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 60px;
`;

export const PackageContainer = styled.section`
  width: 80%;
  height: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  gap: 50px;  

  @media ${device.mobileL} {
    display: flex;
    flex-direction: column;
  }

  @media ${device.mobileS} {
    display: flex;
    flex-direction: column;
  }

  @media ${device.mobileM} {
    display: flex;
    flex-direction: column;
  }
`;

export const Text = styled.h4`
  margin: 0rem 20rem;
  text-align: center;

  font-size: 22px;
  font-weight: 600;
  color: #FFFFFF;

  @media ${device.mobileL} {
    margin: auto;
  }

  @media ${device.mobileS} {
    margin: auto;
  }

  @media ${device.mobileM} {
    margin: auto;
  }

  @media ${device.tablet} {
    margin: auto;
  }
`;

