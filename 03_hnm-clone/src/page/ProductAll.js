import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../component/ProductCard';

const ProductAll = ({ authenticate }) => {
  const navigate = useNavigate();

  const [productList, setProductList] = useState([]);
  const getProducts = async () => {
    const url = 'http://localhost:3000/products';
    const response = await fetch(url);
    const data = await response.json();
    setProductList(data);
    console.log('aaa', productList);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const goToDetail = id => {
    authenticate === true ? navigate(`/product/${id}`) : navigate('/login');
  };

  return (
    <div>
      <Container>
        <Row>
          {productList.map(item => {
            return (
              <Col className="col" onClick={() => goToDetail(item.id)} lg={3}>
                <ProductCard item={item} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
