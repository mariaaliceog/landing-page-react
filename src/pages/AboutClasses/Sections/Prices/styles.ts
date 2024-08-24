import styled from 'styled-components';


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
`;

export const Content = styled.div`
  width: 65%;

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
`;

export const Text = styled.h4`
  text-align: center;

  font-size: 22px;
  font-weight: 600;
  color: #FFFFFF;
`;

