import React from 'react';
import styles from './HomePage.module.css';
import NavBar from '../../components/NavBar/NavBar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const HomePage = () => (
    <>
      <NavBar/>
      <div className={styles.HomePageBackground}>
        <Form className="">
          <div className={styles.inline}>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="info">Search</Button>
          </div>
        </Form>
      </div>
    </>
  )

  export default HomePage;