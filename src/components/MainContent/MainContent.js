import React, { Component } from 'react';
import StockBar from '../StockBar/StockBar';

class MainContent extends Component {
  
  render() {
    return (
      <StockBar {...this.props} />
    )
  }
}

export default MainContent;