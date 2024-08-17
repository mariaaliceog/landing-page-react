import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 5rem;
  margin-top: 2rem;
  padding: 0rem 4rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  height: auto;
  
  &:hover {
    cursor: pointer;
  }
`;

export const Navigation = styled.div`
  display: flex;
  gap: 5rem;  
`;

export const NavigationItem = styled.div` 
  &:hover {
    cursor: pointer;
    color: #3273DB;
    font-weight: bold;
  }
`;

