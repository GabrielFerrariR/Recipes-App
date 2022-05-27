import React from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../Styles/ExploreNacionality.css';

function Explore() {
  const history = useHistory();

  const handleClickFood = () => {
    history.push('/explore/foods');
  };

  const handleClickDrinks = () => {
    history.push('/explore/drinks');
  };
  return (
    <>
      <Header Title="Explore" />
      <div style={ { 'margin-top': '58px', height: '640px' } }>
        <button
          data-testid="explore-foods"
          className="explore-foods-btn"
          type="submit"
          name="enterButton"
          onClick={ handleClickFood }
        >
          Explore Foods
        </button>
        {' '}
        <button
          data-testid="explore-drinks"
          className="explore-drinks-btn"
          type="submit"
          name="enterButton"
          onClick={ handleClickDrinks }
        >
          Explore Drinks
        </button>
      </div>
      <Footer />
    </>
  );
}

export default Explore;
