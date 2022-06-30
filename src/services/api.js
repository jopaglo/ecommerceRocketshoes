import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

export default api;

/*
para iniciar api json-server usar o comando abaixo:
json-server server.json -p 3333 -w
o -w é para refletir as alteracoes
*/
