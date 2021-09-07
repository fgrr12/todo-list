import gql from "graphql-tag";

// edit variable completed of task
const EDIT_COMPLETED_MUTATION = gql`
  mutation TaskUpdate($id: ID, $completed: Boolean) {
    taskUpdate(filter: { id: $id }, data: { completed: $completed }) {
      completed
    }
  }
`;

// fill id and completed and call EDIT_COMPLETED_MUTATION
module.exports = (event, ctx) => {
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
