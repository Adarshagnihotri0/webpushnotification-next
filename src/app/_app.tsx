// src/app/_app.tsx or pages/_app.tsx
import '../styles/globals.css'; // Adjust path according to your folder structure
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
