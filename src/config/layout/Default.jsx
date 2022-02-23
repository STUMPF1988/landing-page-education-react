import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import { StyledMain, GlobalStyle } from './styleds';

function DefaultLayout({ children }) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <StyledMain>{children}</StyledMain>
      <Footer />
    </>
  );
}

export default DefaultLayout;
