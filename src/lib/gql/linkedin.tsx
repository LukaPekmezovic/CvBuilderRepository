/* eslint-disable @typescript-eslint/no-unused-vars */
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

const client = new ApolloClient({
  uri: 'https://api.linkedin.com/v2/graphql',
  headers: {
    Authorization: `Bearer AQWBWPMtfH1AUhUQJL3eQqiLzxLs8PpOFSUcP2ggbb91ZVqbB5avGhchAq0J1TGBaXVdfdd27cKnSjbs9RJzXxPFM9WU-SoF2c7bUqaM1d_sFtgkmLbciW9k6UFnHJ3JRwaiGns1M30TOLoijNPDXYT9x7xi6HCyo9urO7ihUWndK5_oQoE3ppTDGU_IeXO99gnGdjreQm5VgkQwIX3Bp7QuU-s5kub2VdEKl1aISX-6RCNcJDn0gHQhM3pg6Pk-kYyJXJD7_Av8Xnevh6Yt1jFa3PqcrUdoJADwRpRjGJH5TRJT4syOkpcv49HYsa3bo-RwyosOqURxb6g0EXhgZJYbpwL4IA`,
    'Content-Type': 'application/json',
    'Accept-Language': 'en-US',
  },
  cache: new InMemoryCache(),
});
