import React from 'react';
import Table from 'react-bootstrap/Table'

const StockBar = (props) => {

  let contents = props.contents.map((quote, idx) => {
    return (
      <tr key={idx}>
          <td>{quote.symbol}</td>
          <td>{quote.o}</td>
          <td> {quote.h}</td>
          <td>{quote.l}</td>
          <td>{quote.c}</td>
          <td>{quote.pc}</td>
        </tr>
    )
  })


  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Symbol</th>
          <th>Open price of the day</th>
          <th>High price of the day</th>
          <th>Low price of the day</th>
          <th>Current price</th>
          <th>Previous close price</th>
        </tr>
      </thead>
      <tbody>
       {contents}
      </tbody>
    </Table>
  )
}

export default StockBar;