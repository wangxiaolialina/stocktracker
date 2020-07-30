import tokenService from './tokenService';

const BASE_URL = '/api/stock/';

export default {
  getQuote,
};

function getQuote(symbol) {
  const options = {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + tokenService.getToken()
    }
  };
  
  let url = BASE_URL + symbol.toUpperCase()
  console.log(url);
  return fetch(url, options).then(res => res.json());
}

