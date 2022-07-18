import React, { useState } from 'react';

const Categories = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const categories = ['All', 'Meaty', 'Vegeterian', 'Grilled', 'Spicy', 'Folded'];

  return (
    <div className="categories">
      <ul>
        {categories.map((category, index) => {
          return (
            <li
              onClick={() => setActiveIndex(index)}
              className={activeIndex === index ? 'active' : ''}
              key={index}>
              {category}
            </li>
          );
        })}

        {/* <li onClick={() => onClickCategoryHandler(0)} className={activeIndex === 0 ? 'active' : ''}>
          All
        </li> */}
      </ul>
    </div>
  );
};

export default Categories;
