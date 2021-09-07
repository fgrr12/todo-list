import { useState } from "react";
import { Container, ButtonContainer, AddButton } from "./styled";
import Navbar from "./navbar/Navbar";
import InfoContainer from "./infoContainer/InfoContainer";
import AddTasks from "../addOrEditTasks/AddTasks";
const Home = () => {
  const [openPopUp, setOpenPopUp] = useState(false);

  return (
    <>
      <Navbar />
      <Container>
        <ButtonContainer>
          <AddButton onClick={() => setOpenPopUp(true)}>
            Add other task
          </AddButton>
        </ButtonContainer>
        <InfoContainer />
        {openPopUp && <AddTasks setOpenPopUp={setOpenPopUp} />}
      </Container>
    </>
  );
};

export default Home;
