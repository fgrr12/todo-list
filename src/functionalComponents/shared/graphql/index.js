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

//Get tasks
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

export const ADD_TASK_QUERY = gql`
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

export const EDIT_TASK_QUERY = gql`
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

export const DELETE_TASK_QUERY = gql`
  mutation TaskDelete($id: ID) {
    taskDelete(filter: { id: $id }) {
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
