import styled from 'styled-components';

export const Container = styled.main`
  width: 100vw;
  height: 100vh;

  overflow-x: auto;
`;

export const PageContent = styled.main`
  margin: 5rem 0rem;

  display:flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Content = styled.section`
  margin: 0rem 2rem 5rem 2rem;

  display:flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const TextContent = styled.div`
  display:flex;
  flex-direction: column;
`;

export const Text = styled.div`
  font-size: 22px;
  font-weight: 300;
`;

export const Image = styled.img`
  width: 35rem;
`;

export const Wrapper = styled.section`
  padding: 2rem;
  display:flex;
  flex-direction: column;
  align-items: center;

  background-color: #66BADE;
`;

export const IconsContent = styled.div`
  margin-top: 2rem;

  display:flex;
  flex-direction: row;  
  justify-content: space-between;
  align-items: center;
  gap: 5rem;

`;

export const LabelContent = styled.div`
  display:flex;
  flex-direction: column;  
  align-items: center;
`;

export const Icon = styled.img`
  width: 10rem;
`;

export const Label = styled.div`
  font-size: 16px;
  font-weight: bold;
`;
