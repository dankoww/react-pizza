import React, { useEffect, useState } from 'react';
import Categories from './components/Categories';
import Header from './components/Header';
import PizzaBlock from './components/PizzaBlock';
import Sort from './components/Sort';

import './scss/app.scss';

function App() {
  const [items, setItems] = useState([]);
  //  https://62d53c43d4406e5235560553.mockapi.io/items

  useEffect(() => {
    fetch('https://62d53c43d4406e5235560553.mockapi.io/items')
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">All pizza</h2>
          <div className="content__items">
            {items.map((pizza) => (
              <PizzaBlock {...pizza} key={pizza.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
