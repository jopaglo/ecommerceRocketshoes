import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// o provider vai deixar disponivel para todos os components utilizarem
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import Header from './components/Header';
import './config/ReactotronConfig';
// para que funcione o reactotron e precisa vir antes do store

import GlobalStyle from './styles/global';

import Routes from './routes';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes />
        <GlobalStyle />
        <ToastContainer autoClose={3000} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;

/* o BrowserRouter fica nessa tela para que o Header da aplicacao
    tenha acesso as rotas de navegacao
*/

/* o react-router-dom vai ouvir as informacoes que vao ocorrer no history da nossa aplicacao
e a partir daí ele vai efetuar a navegacao das telas */
