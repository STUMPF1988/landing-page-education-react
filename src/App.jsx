import { ThemeProvider } from 'styled-components';
import Theme from './config/Theme/Theme';
import Router from './Routes/Router';
import DefaultLayout from './config/layout/Default';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <DefaultLayout>
        <Router />
      </DefaultLayout>
    </ThemeProvider>
  );
}

export default App;