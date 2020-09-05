import React from 'react';
import Routes from './routes';
import { Provider } from 'react-redux';
import store from './store/index';

// import Header from './components/Header';
// import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
