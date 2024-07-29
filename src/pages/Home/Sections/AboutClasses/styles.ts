import styled from 'styled-components';

export const Container = styled.section`
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
