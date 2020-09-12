import React from 'react';
import Routes from './routes';
import { Provider } from 'react-redux';
import store from './store/index';

// import Header from './components/Header';
// import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ToastContainer />
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
