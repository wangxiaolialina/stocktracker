
import React from 'react';
import Button from 'react-bootstrap/Button';


const AddtoWatchlistButton = (props) => {
  const button = props.quote ?
    <div>
       <Button variant="secondary" size="lg" block>Add to Watchlist </Button>
    </div>
    :
    <div>
       <Button href="./login" variant="secondary" size="lg" block>Log in to add Stock to Watchlist</Button>
    </div>;

  return (
    <div>
      {button}
    </div>)

}
export default AddtoWatchlistButton ;