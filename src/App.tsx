import './index.css';

import { store } from '@app/store';
import AppLayout from '@layout/AppLayout';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import Router from './Router';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppLayout>
          <Router />
        </AppLayout>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
