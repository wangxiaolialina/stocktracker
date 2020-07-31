
import React from 'react';
import Button from 'react-bootstrap/Button';
import watchlistService from '../../utils/watchlistService';


const AddtoWatchlistButton = (props) => {
  const handleAdd = async (e) => {
    e.preventDefault()

    try {
      await watchlistService.addToWatchlist(props.quote.symbol)

    } catch (err) {
      console.log(err)
    }
  }
  const button = props.quote && props.user ?
    <div>
      <form method="POST" onSubmit={handleAdd} >
       <Button variant="secondary" size="lg" type="submit" block>Add to Watchlist </Button>
       </form>
    </div>
    :
    <div>
       <Button href="./login" variant="secondary" size="lg"  block>Log in or Search to add Stock to Watchlist</Button>
    </div>;

  return (
    <div>
      {button}
    </div>)

}
export default AddtoWatchlistButton ;