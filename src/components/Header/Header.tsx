import { Container, Logo, Navigation } from "./styles";
import logo from "../../assets/logo.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

    return (
        <Container>
            <Navigation onClick={() => navigate("/")}>         
              <Logo src={logo} />
            </Navigation>
            <Navigation onClick={() => navigate("/whoAmI")}>          
              <div>Quem sou eu</div>
            </Navigation>
            <Navigation onClick={() => navigate("/aboutClasses")}>          
              <div>Sobre as aulas</div>
            </Navigation>
            <Navigation onClick={() => navigate("/prices")}>          
              <div>Preços</div>
            </Navigation>       
        </Container>
    )
}

export default Header;