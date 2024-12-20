import React from 'react';

import Card from '../UI/Card/Card';
import classes from './Home.module.css';

const Home = (props) => {
  return (
    <Card className={classes.home}>
      <h1>Welcome back! {`${process.env.REACT_APP_NAME}`} 🍉</h1>
    </Card>
  );
};

export default Home;
