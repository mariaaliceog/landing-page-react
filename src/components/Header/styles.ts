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

export const Navigation = styled.div<{isOpen?: boolean }>`
  display: flex;
  gap: 5rem;  

  @media (max-width: 768px) {
    width: 200px;
    height: fit-content;
    z-index: 1000;

    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    margin-top: 2rem;
    gap: 1.5rem;
    top: 0;
    right: 2rem;

    position: absolute;
    flex-flow: column nowrap;
    padding: 3rem 0rem 1rem 1rem;

    box-shadow: 10px 9px 5px -6px rgba(133,133,133,0.5);
    background-color: #ffffff;
    border-radius: 5px;
  }
`;

export const NavigationItem = styled.div`
  &:hover {
    cursor: pointer;
    color: #3273DB;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    border-bottom: 1px solid #3273DB63;
    padding-bottom: 1rem;
  
    &:last-child {
      border-bottom: none;
    }
  }
`;

export const Burguer = styled.div`
 @media (max-width: 768px) {
    width: 2rem;
    height: 2rem;

    display: flex;
    position: fixed;
    top: 3rem;
    right: 3rem;
    flex-direction: column;
    justify-content: space-between;
    z-index: 1001;

    div{
      width: 2rem;
      height: 0.25rem;
      background-color: #3273DB;
      border-radius: 10px;
    }
  }
`;




