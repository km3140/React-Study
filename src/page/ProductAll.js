import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate, useSearchParams } from 'react-router-dom';
import ProductCard from '../component/ProductCard';

const ProductAll = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useSearchParams();
  let searchQuery = query.get('q') || '';
  const [productList, setProductList] = useState([]);

  const getProducts = async () => {
    const url = `https://my-json-server.typicode.com/km3140/react-practice-hnm/products?q=${searchQuery}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log('data', data);
    setProductList(data);
  };

  useEffect(() => {
    getProducts();
  }, [query]);

  const goToDetail = (id) => {
    // authenticate === true ? navigate(`/product/${id}`) : navigate('/login');
    navigate(`/product/${id}`);
  };

  return (
    <div>
      <Container>
        <Row>
          {productList.map((item) => {
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
