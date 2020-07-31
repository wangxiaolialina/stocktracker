import React, { Component } from 'react';
import StockBar from '../StockBar/StockBar';
import News from '../News/News';
import styles from './MainContent.module.css';
import AddtoWatchlistButton from '../AddtoWatchlistButton/AddtoWatchlistButton'
class MainContent extends Component {
  render() {
    return (
      <>
      <div><StockBar contents={[this.props.quote]} /></div>
      <div className={styles.newscard}><News {...this.props} /></div>
      <div><AddtoWatchlistButton {...this.props}/></div>
      </>
    )
  }
}

export default MainContent;