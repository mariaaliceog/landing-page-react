import { Container, Logo } from "./styles";
import logo from "../../assets/logo.svg";

const Header = () => {
    return (
        <Container>
            <Logo src={logo} />
            <div>Quem sou eu</div>
            <div>Sobre as aulas</div>     
            <div>Preços</div>    
        </Container>
    )
}

export default Header;