import tokenService from './tokenService';

const BASE_URL = '/api/stock/';


export default {
  getQuote,
  getNews,
  getAllQuotes,
};

function getQuote(symbol) {
  const options = {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + tokenService.getToken()
    }
  };
  
  let url = BASE_URL + symbol.toUpperCase()
  return fetch(url, options).then(res => res.json());
}

function getNews(symbol) {
  const options = {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + tokenService.getToken()
    }
  };
  
  let url = BASE_URL + "companynews/" + symbol.toUpperCase()
  return fetch(url, options).then(res => res.json());
}

function getAllQuotes(symbols) {
    const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + tokenService.getToken()
        },
        body: JSON.stringify({stocks: [...symbols]})
      };
      
      let url = BASE_URL + "getAll"
      return fetch(url, options).then(res => res.json());
}