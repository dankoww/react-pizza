import React from 'react';

const Categories = ({ value, onChangeCategory }) => {
  const categories = ['All', 'Meaty', 'Vegeterian', 'Grilled', 'Spicy', 'Folded'];

  return (
    <div className="categories">
      <ul>
        {categories.map((category, index) => {
          return (
            <li
              onClick={() => onChangeCategory(index)}
              className={value === index ? 'active' : ''}
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
