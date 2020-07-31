const finnhub = require('finnhub');

const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = process.env.FINHUB_API_KEY;


const finnhubClient = new finnhub.DefaultApi()

module.exports = {
  search,
  searchNews
}

async function search(req, res) {
  finnhubClient.quote(req.params.symbol, (error, data, response) => {
    if(error){
      res.status(error.status).send(error.response.text);
    } else {
      res.status(200).send({...data, symbol: req.params.symbol})
    }
  });
} 

async function searchNews(req, res) {
  let currentDate = new Date().toJSON().slice(0,10);
  let fiveDaysago = new Date();
  fiveDaysago.setDate(fiveDaysago.getDate()-5);
  let fromDate = fiveDaysago.toJSON().slice(0,10);
  finnhubClient.companyNews(req.params.symbol, fromDate, currentDate, (error, data, response) => {
    if (error) {
      res.status(error.status).send(error.response.text);
    } else {
      res.status(200).send(data)
    }
  });
}

// async function getQuotes(req, res) {
//   let result = []
  
//   req.body.stocks = req.body.stocks.filter(function (el) {
//     return el != null;
//   });
  
//   let numCalls = req.body.stocks.length

//   if(numCalls === 0){
//     res.status(200).send({})
//   }

//   req.body.stocks.forEach(async symbol => {
//     finnhubClient.quote(symbol, (error, data, response) => {
//       if(error){
//         console.log("WTF")
//       } else {
//         result.push({...data, symbol: symbol})
//         if(numCalls == result.length){
//           res.status(200).send(result);
//         }
//       }
//     });
//   });
// }
