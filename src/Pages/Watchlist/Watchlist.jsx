import React, { Component } from 'react';
import styles from '../HomePage/HomePage.module.css';
import NavBar from '../../components/NavBar/NavBar';
import watchlistService from '../../utils/watchlistService';
import stockService from '../../utils/stockService';
import StockBar from '../../components/StockBar/StockBar';


class Watchlist extends Component {
  constructor(){
    super();

    this.state={
      stocks: [],
      contents: []
    }
  }

  async componentDidMount(){
    try {
      const watchlist = await watchlistService.getWatchlist();
      const stocks = await watchlist.stocks;
      const contents = await stockService.getAllQuotes(stocks)
      this.setState({stocks: stocks,
      contents: contents})
      

    } catch(err) {
      console.log(err)
    }
  }
  
  render() {
    return (
      <div className={styles.dataBody}>
        <NavBar user={this.props.user} handleLogout={this.props.handleLogout}/>
        <StockBar contents={this.state.contents} />
      </div>
    )
  }
}

export default Watchlist;