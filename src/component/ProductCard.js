import React from 'react';

const ProductCard = ({ item }) => {
  return (
    <div>
      <img className="card-img" width="264" src={item?.img} />
      <div>{item?.choice == true ? 'Conscious choice' : ''}</div>
      <div>{item?.title}</div>
      <div>\{item?.price}</div>
      <div>{item?.new == true ? '신제품' : ''}</div>
    </div>
  );
};

export default ProductCard;
