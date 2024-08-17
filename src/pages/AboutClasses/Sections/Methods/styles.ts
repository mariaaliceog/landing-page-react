import styled from 'styled-components';

export const Container = styled.div`
  margin: 0rem 2rem 0rem 2rem;
`;

export const Content = styled.div`
  margin: 5rem 2rem 0rem 2rem;
`;

export const ImageContent = styled.section`
  margin-top: 2rem;
  gap: 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TextContent = styled.div`
  position: relative;
`;

export const Text = styled.h4`
  width: 100%;
  height: 58px;
  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;

  bottom: 0;
  font-weight: bold;
  color: #FFFFFF;

  background-color: #3273DB;
  border-radius: 0px 0px 10px 10px;
`

export const Image = styled.img`
  width: 288px;
  height: 391px;
`;