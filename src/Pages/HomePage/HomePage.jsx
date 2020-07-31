import React from 'react';
import styles from './HomePage.module.css';
import NavBar from '../../components/NavBar/NavBar';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import stockService from '../../utils/stockService'
import MainContent from '../../components/MainContent/MainContent';

export default function HomePage(props) {
  const handleSearch = async (e) => {
    e.preventDefault()

    try {
      let [quote, news] = await Promise.allSettled([stockService.getQuote(props.symbol), stockService.getNews(props.symbol)]);
      props.handleUpdateQuote(quote.value);
      props.handleUpdateNews(news.value);

    } catch (err) {
      console.log(err)
    }
    // try {
    //   let quote = await stockService.getQuote(props.symbol)
    //   props.handleUpdateQuote(quote);
    // } catch (err) {
    //   // Invalid user data (probably duplicate email)
    //   alert(err);
    // }

    // try {
    //   let news = await stockService.getNews(props.symbol)
    //   props.handleUpdateNews(news);

    // } catch (err) {
    //   // Invalid user data (probably duplicate email)
    //   alert(err);
    // }
  }

  return (
    <div className={styles.dataBody}>
      <NavBar user={props.user} handleLogout={props.handleLogout}/>
      <div className={styles.HomePageBackground}>
        <form method="POST" onSubmit={handleSearch}>
          <div className={styles.inline}>
            <FormControl 
              type="text" 
              name="symbol"
              placeholder="Search" 
              className="mr-sm-2" 
              value={props.symbol}
              onChange={props.handleChange}/>
              
            <Button type="submit" variant="info">Search</Button>
          </div>
        </form>
      </div>
      <MainContent quote={props.quote} news = {props.news} />
    </div>
  )
}
