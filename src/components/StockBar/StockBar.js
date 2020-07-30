import React from 'react';

const StockBar = (props) => {



  return (
    <div>
      Open: {props.quote.o}
      High: {props.quote.h}
      Low: {props.quote.l}
      Current: {props.quote.c}
      Previous Closing: {props.quote.pc}
    </div>
  )
}

export default StockBar;