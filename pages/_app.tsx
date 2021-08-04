import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import Layout from '../components/Layout/Layout';
import { Provider } from 'next-auth/client';
import { useState } from 'react';

const sessionOptions = {
  clientMaxAge: 2 * 60 * 60, // Re-fetch session if cache is older than 2 hours
  keepAlive: 60 * 60, // Send keepAlive message every hour
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider options={sessionOptions} session={pageProps.session}>
      <ThemeProvider attribute='class'>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Provider>
  );
}
export default MyApp;
