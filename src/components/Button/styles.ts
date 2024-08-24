import styled from 'styled-components';

export const StyledButton = styled.div<{isPrimary?: boolean }>`
  width: 200px;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ isPrimary }) => (isPrimary ? '#FFFFFF' : '#3273DB')};
  border: ${({ isPrimary }) => (isPrimary ? '' : '2px solid #3273DB')};
  background-color: ${({ isPrimary }) => (isPrimary ? '#3273DB' : '#FFFFFF')};
  border-radius: 10px;
  
  font-size: 22px;
  
  cursor: pointer;

  &:hover {
    background-color: ${({ isPrimary }) => (isPrimary ? '#FFFFFF' : '#3273DB')};
    border: 2px solid #3273DB;
    color: ${({ isPrimary }) => (isPrimary ? '#3273DB' : '#FFFFFF')};
  }
`;