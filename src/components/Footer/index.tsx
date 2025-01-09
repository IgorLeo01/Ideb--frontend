import { BodyContainer, Container, Content } from "./style";
import ar from "../../assets/IDEB - Logo transparente.png";
import ButtonContact from "../Button";
export default function Footer() {
  return (
    <>
      {/* <BodyContainer id="footer">
        <Container>
          <img src={ar} className="Ponto" alt="logo" />
          <Content>
            <p>
              Precisa de ajuda? Entre em contato conosco
            </p>
            <ButtonContact text="teste" handleClick={() => console.log("Hello")} />
            <p>&copy; {new Date().getFullYear()} Plataforma-Ideb. Todos os direitos reservados.</p>
          </Content>
        </Container>
      </BodyContainer> */}
    </>
  );
}
