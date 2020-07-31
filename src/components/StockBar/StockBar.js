import React from 'react';
import Table from 'react-bootstrap/Table'

const StockBar = (props) => {



  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Stock</th> 
          <th>Open price of the day</th>
          <th>High price of the day</th>
          <th>Low price of the day</th>
          <th>Current price</th>
          <th>Previous close price</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{props.symbol}</td>
          <td>{props.quote.o}</td>
          <td> {props.quote.h}</td>
          <td>{props.quote.l}</td>
          <td>{props.quote.c}</td>
          <td>{props.quote.pc}</td>
        </tr>
      </tbody>
    </Table>
  )
}

export default StockBar;