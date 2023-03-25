import { EuiErrorBoundary } from '@elastic/eui';
import { Global } from '@emotion/react';
import 'core-js/stable';
import { GitHubApolloProvider } from 'lp-project-1/lib/gql/github';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { FunctionComponent } from 'react';
import 'regenerator-runtime/runtime';

import Chrome from '../components/chrome';
import { Theme } from '../components/theme';
import { globalStyes } from '../styles/global.styles';
import './../styles/app.scss';

/**
 * Next.js uses the App component to initialize pages. You can override it
 * and control the page initialization. Here use use it to render the
 * `Chrome` component on each page, and apply an error boundary.
 *
 * @see https://nextjs.org/docs/advanced-features/custom-app
 */
const EuiApp: FunctionComponent<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      {/* You can override this in other pages - see index.tsx for an example */}
      <title>Next.js EUI Starter</title>
    </Head>
    <Global styles={globalStyes} />
    <Theme>
      <GitHubApolloProvider>
        <Chrome>
          <EuiErrorBoundary>
            <Component {...pageProps} />
          </EuiErrorBoundary>
        </Chrome>
      </GitHubApolloProvider>
    </Theme>
  </>
);

export default EuiApp;
