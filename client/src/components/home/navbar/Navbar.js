import { Header, ImgContainer, ImgCobuildLab, Img8Base } from "./styled";
import { AuthButton } from "../../login/AuthButton";
import { CURRENT_USER_QUERY } from "../../../functionalComponents/shared/graphql/index";
import { useQuery } from "@apollo/client";

const Navbar = () => {
  const { data } = useQuery(CURRENT_USER_QUERY);
  console.log(data);
  return (
    <Header>
      <ImgContainer>
        <ImgCobuildLab src="imgs/CobuildLab.png" alt="CobuildLab" />
        <span>+</span>
        <Img8Base src="imgs/8base.png" alt="8base" />
      </ImgContainer>
      <h3 data-testid="user">Welcome {data?.user?.firstName}!</h3>
      <AuthButton/>
    </Header>
  );
};

export default Navbar;
