import styled from 'styled-components';

export const Container = styled.div`
  margin: 0rem 1rem 0rem 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;
`;

export const Content = styled.div`
  margin: 5rem 2rem 0rem 2rem;

  display: flex;
  flex-direction: row;

  gap: 20px;
`;

export const TextContent = styled.div` 
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  gap: 15px;
`;

export const Icon = styled.img`
  width: 84px;
  height: 84px;

`;

export const Title = styled.h1`
  font-size: 24px;
  text-align: center;
`;

export const Subtitle = styled.h4`  
  text-align: center;
`;

export const PlusIcon = styled.img`
  width: 64px;
`;


