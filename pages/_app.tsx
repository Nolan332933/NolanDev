// pages/_app.tsx
import '../app/globals.css'; // Import global styles
import { useEffect } from 'react';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.documentElement.classList.add(savedTheme === 'dark' ? 'dark' : '');
    }
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
