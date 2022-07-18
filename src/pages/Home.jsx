import React, { useState, useEffect } from 'react';

import Categories from '../components/Categories';
import PizzaBlock from '../components/PizzaBlock/';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Sort from '../components/Sort';

const Home = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  //  https://62d53c43d4406e5235560553.mockapi.io/items

  useEffect(() => {
    fetch('https://62d53c43d4406e5235560553.mockapi.io/items')
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">All pizza</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(4)].map((_, index) => <Skeleton key={index} />)
          : items.map((pizza) => <PizzaBlock {...pizza} key={pizza.id} />)}
      </div>
    </div>
  );
};

export default Home;
