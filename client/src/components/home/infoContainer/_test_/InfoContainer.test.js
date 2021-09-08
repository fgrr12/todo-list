import { render, act } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import InfoContainer from "../InfoContainer";
import { GET_TASKS_QUERY } from "../../../../functionalComponents/shared/graphql";

const mocks = [
  {
    request: {
      query: GET_TASKS_QUERY,
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
        <InfoContainer />
      </MockedProvider>
    );
  });
  expect(rendered).toMatchSnapshot();
});
