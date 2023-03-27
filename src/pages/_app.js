import { wrapper } from '../redux/store';

import '@/styles/globals.css';

// Import components styles
import 'src/components/Button/styles.scss';

// Import views styles
import 'src/views/Header/styles.scss';
import 'src/views/Banner1/styles.scss';
import 'src/views/Banner2/styles.scss';
import 'src/views/Banner3/styles.scss';
import 'src/views/Footer/styles.scss';
import 'src/views/Mask/styles.scss';
import 'src/views/ShowBook/styles.scss';

function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(App);
