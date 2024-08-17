import { Container, Logo, LogoContainer, Navigation, NavigationItem } from "./styles";
import logo from "../../assets/logo.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

    return (
      <Container>
        <LogoContainer>
          <div onClick={() => navigate("/")}><Logo src={logo} /></div>
        </LogoContainer>
        <Navigation>
          <NavigationItem><div onClick={() => navigate("/")}>Início</div></NavigationItem>     
          <NavigationItem><div onClick={() => navigate("/whoAmI")}>Quem sou eu</div></NavigationItem>
          <NavigationItem><div onClick={() => navigate("/aboutClasses")}>Sobre as aulas</div></NavigationItem>      
        </Navigation>
      </Container>    
    )
}

export default Header;