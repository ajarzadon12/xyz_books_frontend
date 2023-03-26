import '@/styles/globals.css';

// Import components styles
import 'src/components/Button/styles.scss';

// Import views styles
import 'src/views/Header/styles.scss';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
