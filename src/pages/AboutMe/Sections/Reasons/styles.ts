import styled from 'styled-components';

export const Container = styled.section`
  width: 100%; 
`;

export const Text = styled.h1` 
  display: flex;
  justify-content: center;
`;

export const Icon = styled.img`
  width: 4rem;
`;

export const Wrapper = styled.section`
  margin: 2rem 4rem 0rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Row = styled.section`
  width: 50%;

  display: flex;
  flex-direction: row;
  align-items: center;

  margin-bottom: 35px;
  gap: 20px;
`;

export const TextContent = styled.div`  
  margin-bottom: 35px;

  display: flex;
  flex-direction: row;
  align-items: center;
`;