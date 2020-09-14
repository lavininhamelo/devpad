import React from 'react';
import Routes from './routes/index';
import { Provider as ReduxProvider } from 'react-redux';
import { AuthProvider } from './contexts/auth';
import store from './store/index';
import { useAuth } from './contexts/auth';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <ReduxProvider store={store}>
      <AuthProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </AuthProvider>
    </ReduxProvider>
  );
}

export default App;
