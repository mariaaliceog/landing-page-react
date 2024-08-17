import { useNavigate } from 'react-router-dom';
import { StyledButton } from './styles';

interface Props {
  label: string;
  isPrimary: boolean;
  to: string;
  onClick?: () => void;
}

const Button = ({ label, isPrimary, to } : Props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <StyledButton onClick={handleClick} isPrimary={isPrimary}>
      {label}
    </StyledButton>
  );
};

export default Button;
