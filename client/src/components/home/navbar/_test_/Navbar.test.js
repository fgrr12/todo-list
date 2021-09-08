import { render, act } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import Navbar from "../Navbar";
import { CURRENT_USER_QUERY } from "../../../../functionalComponents/shared/graphql";

const mocks = [
  {
    request: {
      query: CURRENT_USER_QUERY,
      variables: {
        query: {},
      },
    },
    result: {
      data: {},
    },
  },
];

test("renders without crashing", () => {
  let rendered;
  act(() => {
    rendered = render(
      <MockedProvider mocks={mocks} addTypename={true}>
        <Navbar />
      </MockedProvider>
    );
  });
  expect(rendered).toMatchSnapshot();
});
