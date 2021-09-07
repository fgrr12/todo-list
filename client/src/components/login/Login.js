import { Container, Box, DataSide, ImgBox, ImgCobuildLab, Img8Base } from "./styled";
import { AuthButton } from "./AuthButton";

const Login = () => {
  return (
    <Container>
      <Box>
        <ImgBox>
          <ImgCobuildLab src="imgs/CobuildLab.png" alt="CobuildLab" />
          <span>+</span>
          <Img8Base src="imgs/8base.png" alt="8base" />
        </ImgBox>

        <DataSide>
          <AuthButton />
        </DataSide>
      </Box>
    </Container>
  );
};

export default Login;
