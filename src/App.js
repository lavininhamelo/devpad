import React from 'react';
import Routes from './routes/index';
import { Provider as ReduxProvider } from 'react-redux';
import { AuthProvider } from './contexts/auth';
import store from './store/index';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <ReduxProvider store={store}>
      <AuthProvider>
        <BrowserRouter>
          <ToastContainer />
          <Routes />
        </BrowserRouter>
      </AuthProvider>
    </ReduxProvider>
  );
}

export default App;
