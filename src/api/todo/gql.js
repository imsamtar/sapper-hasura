import gql from "graphql-tag";

export const getTodos = gql`
  query getTodos {
    todo {
      id
      title
      completed
    }
  }
`;

export const insertTodo = gql`
  mutation insertTodo($title: String!) {
    insert_todo(objects: { title: $title }) {
      returning {
        id
      }
    }
  }
`;

export const updateTodo = gql`
  mutation updateTodo($id: Int!) {
    update_todo(where: { id: { _eq: $id } }) {
      returning {
        id
      }
    }
  }
`;

export const deleteTodo = gql`
  mutation deleteTodo($id: Int!) {
    delete_todo(where: { id: { _eq: $id } }) {
      returning {
        id
      }
    }
  }
`;
