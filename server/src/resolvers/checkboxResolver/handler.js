import gql from "graphql-tag";

const EDIT_COMPLETED_MUTATION = gql`
  mutation TaskUpdate($id: ID, $completed: Boolean) {
    taskUpdate(filter: { id: $id }, data: { completed: $completed }) {
      completed
    }
  }
`;

module.exports = (event, ctx) => {
  console.log(event.data);
  try {
    ctx.api.gqlRequest(
      EDIT_COMPLETED_MUTATION,
      {
        id: event.data.id,
        completed: event.data.completed,
      },
      { checkPermissions: false }
    );
  } catch (error) {
    return {
      data: { success: false },
    };
  }

  return {
    data: { success: true },
  };
};
