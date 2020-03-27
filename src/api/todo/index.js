import client from "../graphql-client";
import * as gql from "./gql";

export function getTodos() {
  try {
    return client().query({
      query: gql.getTodos
    });
  } catch (error) {
    return error;
  }
}

export function insertTodo(title) {
  try {
    return client().mutate({
      mutation: gql.insertTodo,
      variables: {
        title
      }
    });
  } catch (error) {
    return error;
  }
}

export function updateTodo(id) {
  try {
    return client().mutate({
      mutation: gql.updateTodo,
      variables: {
        id
      }
    });
  } catch (error) {
    return error;
  }
}

export function deleteTodo(id) {
  try {
    return client().mutate({
      mutation: gql.deleteTodo,
      variables: {
        id
      }
    });
  } catch (error) {
    return error;
  }
}
