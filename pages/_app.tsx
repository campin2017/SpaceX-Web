import { ApolloProvider } from "@apollo/client";
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import client from "../graphql/client";
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider>
      <Component {...pageProps} />
      </ChakraProvider>
    </ApolloProvider>
  )
}

export default MyApp
