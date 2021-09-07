import { gql } from "@apollo/client";

// Get current user
export const CURRENT_USER_QUERY = gql`
  query CurrentUser {
    user {
      id
      email
      lastName
      firstName
    }
  }
`;

// Get tasks
export const GET_TASKS_QUERY = gql`
  query tasks {
    tasksList(sort: { deadline: DESC }) {
      items {
        id
        name
        description
        completed
        deadline
        initialDate
      }
    }
  }
`;

// Add new tasks
export const ADD_TASK_MUTATION = gql`
  mutation TaskCreate(
    $name: String
    $description: String
    $initialDate: Date
    $deadline: Date
  ) {
    taskCreate(
      data: {
        name: $name
        description: $description
        initialDate: $initialDate
        deadline: $deadline
        completed: false
      }
    ) {
      name
      description
      initialDate
      deadline
      completed
    }
  }
`;

// Edit tasks
export const EDIT_TASK_MUTATION = gql`
  mutation TaskUpdate(
    $id: ID
    $name: String
    $description: String
    $initialDate: Date
    $deadline: Date
    $completed: Boolean
  ) {
    taskUpdate(
      filter: { id: $id }
      data: {
        name: $name
        description: $description
        initialDate: $initialDate
        deadline: $deadline
        completed: $completed
      }
    ) {
      name
      description
      initialDate
      deadline
      completed
    }
  }
`;

// delete tasks
export const DELETE_TASK_MUTATION = gql`
  mutation TaskDelete($id: ID) {
    taskDelete(filter: { id: $id }) {
      success
    }
  }
`;

// checkbox resolver, cloud function - update data
export const CHECKBOX_RESOLVER_MUTATION = gql`
  mutation CheckboxResolver($id: ID, $completed: Boolean) {
    checkboxResolver(id: $id, completed: $completed) {
      success
    }
  }
`;

// Sign up a new user mutation.
export const USER_SIGN_UP_MUTATION = gql`
  mutation UserSignUp($user: UserCreateInput!, $authProfileId: ID) {
    userSignUpWithToken(user: $user, authProfileId: $authProfileId) {
      id
      email
      lastName
      firstName
    }
  }
`;
