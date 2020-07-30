import React from 'react';
import Card from 'react-bootstrap/Card';



const News = (props) => {
  const threeNews = props.news.slice(0,3);
  return (
    threeNews.map((news)=>(
        <Card
          bg={ 'Light'.toLowerCase()}
          text={ 'Light'.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '18rem',display:"flex"}}
          className="mb-2">
          <Card.Header>{new Date(news.datetime * 1000).toJSON().slice(0,10)}</Card.Header>
          <Card.Body>
            <Card.Title>{'Light'} {news.headline} </Card.Title>
            <Card.Text>
            {news.summary}
            </Card.Text>
          </Card.Body>
        </Card>
    ))
  )
}

export default News;