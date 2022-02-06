import {
  ApolloClient,
  createHttpLink,
  InMemoryCache
} from '@apollo/client';
import { httpUrlGraphql } from "../constants/ExternalSources";
  
  
  export const link = createHttpLink({
    uri: httpUrlGraphql
  });
  
  export const client = new ApolloClient({
    cache: new InMemoryCache(),
    link,
  });

  export default client;
  