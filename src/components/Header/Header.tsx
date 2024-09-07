import { Burguer, Container, Logo, LogoContainer, Navigation, NavigationItem } from "./styles";
import logo from "../../assets/logo.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false)

    return (
      <Container>
        <LogoContainer>
          <div onClick={() => navigate("/")}><Logo src={logo} /></div>
        </LogoContainer>
        <Burguer onClick={() => setIsOpen(!isOpen)}>
          <div/>
          <div/>
          <div/>
        </Burguer>
        <Navigation isOpen={isOpen}>
          <NavigationItem onClick={() => { setIsOpen(false); navigate("/") }}>Início</NavigationItem>     
          <NavigationItem onClick={() => { setIsOpen(false); navigate("/whoAmI")}}>Quem sou eu</NavigationItem>
          <NavigationItem onClick={() => { setIsOpen(false); navigate("/aboutClasses")}}>Sobre as aulas</NavigationItem>      
        </Navigation>
      </Container>    
    )
}

export default Header;