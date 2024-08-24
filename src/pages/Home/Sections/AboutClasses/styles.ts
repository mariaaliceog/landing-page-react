import styled from 'styled-components';

export const Container = styled.section`
  padding: 2rem;

  display:flex;
  flex-direction: column;
  align-items: center;

  gap: 5rem;
`;

export const IconsContent = styled.div`
  height: 80%;

  display:flex;
  flex-direction: row;  
  justify-content: space-between;
  align-items: center;

  gap: 3rem;
`;

export const LabelContent = styled.div`
  width: 100%;
  height: 300px;

  display:flex;
  flex-direction: column;  
  align-items: center;
  text-align: center;
  position: relative;

  background-color: #66BADE59;
  border-radius: 10px;
  gap: 3px;
  padding: 0rem 1rem;
`;

export const Icon = styled.img`
  width: 12rem;
  height: 12rem;

  position: relative;
  top: -50px;
`;

export const Label = styled.div`
  font-size: 20px;
  font-weight: bold;
 
  border-radius: 5px;
  padding: 0rem 0.5rem;
`;
