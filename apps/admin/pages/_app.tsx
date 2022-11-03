import "../styles/globals.css";
import { AppProps } from "next/app";
import { SWRConfig } from "swr";
import fetchJson from "lib/fetchJson";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "ui/theme";
import { ThemeToggler } from "ui";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        fetcher: fetchJson,
        onError: (err) => {
          console.error(err);
        },
      }}
    >
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </SWRConfig>
  );
}

export default MyApp;
