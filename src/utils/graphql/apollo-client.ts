import {ApolloClient, InMemoryCache} from '@apollo/client';
import {baseURL} from './apollo-constant';

export const client = new ApolloClient({
  uri: baseURL,
  cache: new InMemoryCache(),
});
