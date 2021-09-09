import { act, fireEvent, render } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import Navbar from "../Navbar";
import { CURRENT_USER_QUERY } from "../../../../functionalComponents/shared/graphql";

const currentUser = [
  {
    request: {
      query: CURRENT_USER_QUERY,
      variables: {
        query: {},
      },
    },
    result: {
      data: {
        id: "ckt4ksbcw005109l14m2f1h40",
        firstName: "Fabricio",
        lastName: "Rojas",
        email: "fgrr12@gmail.com",
      },
    },
  },
];

test("renders without crashing", () => {
  act(() => {
    const { getByTestId } = render(
      <MockedProvider mocks={currentUser} addTypename={false}>
        <Navbar />
      </MockedProvider>
    );
    const h3 = getByTestId("user");
    setTimeout(() => {
      expect(h3.innerHTML).toBe("Welcome " + currentUser.result.data.firstName + "!");
    }, 500);
  });
});
