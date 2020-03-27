import { split } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import { WebSocketLink } from "apollo-link-ws";
import { getMainDefinition } from "apollo-utilities";
import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { server, client } from "./config";

export default function() {
  const httpLink = new HttpLink({
    uri: server.URI,
    headers: { Authorization: `Bearer ${client.JWT}` }
  });
  const wsLink = new WebSocketLink({
    uri: server.wsURI,
    options: {
      reconnect: true,
      connectionParams: {
        headers: { Authorization: `Bearer ${client.JWT}` }
      }
    }
  });
  const link = split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return (
        definition.kind === "OperationDefinition" &&
        definition.operation === "subscription"
      );
    },
    wsLink,
    httpLink
  );
  return new ApolloClient({
    link,
    cache: new InMemoryCache()
  });
}
