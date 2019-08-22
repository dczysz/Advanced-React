// import React from 'react'; // Next.js takes care of importing React
import Items from '../components/Items';

const Home = props => (
  <div>
    <Items page={parseFloat(props.query.page) || 1} />
  </div>
);

export default Home;
