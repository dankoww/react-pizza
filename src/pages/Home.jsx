import React, { useState, useEffect } from 'react';

import Categories from '../components/Categories';
import Pagination from '../components/pagination';
import PizzaBlock from '../components/PizzaBlock/';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Sort from '../components/Sort';

const Home = ({ searchValue }) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortType, setSortType] = useState({ name: 'Popularity', sortProperty: 'rating' });

  const search = searchValue ? `&search=${searchValue}` : '';
  //  https://62d53c43d4406e5235560553.mockapi.io/items

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://62d53c43d4406e5235560553.mockapi.io/items?page=${currentPage}&limit=4&${
        categoryId > 0 ? `category=${categoryId}` : ''
      }&sortBy=${sortType.sortProperty}${search}`
    )
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType, search, currentPage]);

  const pizzas = items.map((pizza) => <PizzaBlock {...pizza} key={pizza.id} />);
  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={setCategoryId} />
        <Sort value={sortType} onChangeSort={setSortType} />
      </div>
      <h2 className="content__title">All pizza</h2>
      <div className="content__items">
        {isLoading ? [...new Array(4)].map((_, index) => <Skeleton key={index} />) : pizzas}
      </div>
      <Pagination onChangePage={(number) => setCurrentPage(number)} />
    </div>
  );
};

export default Home;
