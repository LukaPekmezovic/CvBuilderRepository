import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { FC, ReactNode, useMemo } from 'react';

import { FixMe } from '../types';

const createApolloClient = (uri: string, token: string): ApolloClient<FixMe> =>
  new ApolloClient({
    cache: new InMemoryCache(),
    link: ApolloLink.from([
      onError(({ graphQLErrors, networkError }) => {
        if (networkError) {
          // eslint-disable-next-line no-console
          console.error(`[Network error]: ${networkError}`);
          // eslint-disable-next-line no-console
          console.error(graphQLErrors);
        }
      }),
      setContext((_, { headers: previousHeaders }) => ({
        headers: {
          ...previousHeaders,
          Authorization: `bearer ${token}`,
        },
      })),
      createHttpLink({
        uri,
      }),
    ]),
    connectToDevTools: true,
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'cache-and-network',
        pollInterval: 60 * 1000,
      },
    },
  });

export interface GitHubApolloProviderProps {
  children: ReactNode | ReactNode[];
}

export const GitHubApolloProvider: FC<GitHubApolloProviderProps> = ({
  children,
}) => {
  const client = useMemo(
    () =>
      createApolloClient(
        process.env.NEXT_PUBLIC_GITHUB_GRAPHQL_URL,
        process.env.NEXT_PUBLIC_GITHUB_GRAPHQL_TOKEN
      ),
    []
  );

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
