import { createGlobalStyle } from 'styled-components';
import background from '../assets/images/background.svg';

// importacao de estilos do react-toastify
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap');

* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}

body {
    background: #191920 url(${background}) no-repeat center top;
    -webkit-font-smoothing: antialiased;
}

body , input , button {
    font: 15px Roboto, sans-serif;
}

/* que fica no index.html */
#root {
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 20px 50px;
}

button , a {
  cursor: pointer;
}

ul,li{
  list-style: none;
}

a{
  text-decoration: none;
}
`;
