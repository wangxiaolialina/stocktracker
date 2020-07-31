import tokenService from "./tokenService";

const BASE_URL = "/api/watchlist/";

export default {
  getWatchlist,
  addToWatchlist,
  removeFromWatchlist,
  removeAllFromWatchlist,
};

function getWatchlist() {
  const options = {
    method: "GET",
    headers: {
      Authorization: "Bearer " + tokenService.getToken(),
    },
  };

  let url = BASE_URL;
  return fetch(url, options).then((res) => res.json());
}

function addToWatchlist(symbol) {
  const options = {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      Authorization: "Bearer " + tokenService.getToken(),
    },
    body: JSON.stringify({symbol: symbol})
  };

  let url = BASE_URL;
  return fetch(url, options).then((res) => res.json());
}

function removeFromWatchlist(symbol) {
  const options = {
    method: "DELETE",
    headers: {
      Authorization: "Bearer " + tokenService.getToken(),
    },
  };

  let url = BASE_URL + symbol;
  return fetch(url, options).then((res) => res.json());
}

function removeAllFromWatchlist() {
  const options = {
    method: "DELETE",
    headers: {
      Authorization: "Bearer " + tokenService.getToken(),
    },
  };

  let url = BASE_URL;
  return fetch(url, options).then((res) => res.json());
}
