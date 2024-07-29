import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
`;

export const Content = styled.div`
  position: relative;
`;

export const Text = styled.div`
  font-size: 36px;
  font-weight: 300;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 45%;
  left: 20%;
`;

export const Image = styled.img`
  width: 100%;
`;

export const Icon = styled.img`
  width: 10%;
`;

export const Wrapper = styled.section`
  margin: 2rem 5rem;

  display: flex;
  flex-direction: row;
`;

export const Column = styled.section`
  width: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding-left: 1rem;
`;

export const TextContent = styled.div`  
  margin-bottom: 35px;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Label = styled.div`
  margin-left: 31px;

  font-size: 20px;
  font-weight: 300;
`;