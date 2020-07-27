const finnhub = require('finnhub');

const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = process.env.FINHUB_API_KEY;


const finnhubClient = new finnhub.DefaultApi()

module.exports = {
  search
}

async function search(req, res) {
  finnhubClient.quote(req.params.symbol, (error, data, response) => {
    if(error){
      res.status(error.status).send(error.response.text);
    } else {
      res.status(200).send(data)
    }
  });
}

