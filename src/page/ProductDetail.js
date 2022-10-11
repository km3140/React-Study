import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Dropdown, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const [product, setProduct] = useState();
  const { id } = useParams();
  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/km3140/react-practice-hnm/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <div>
      <Container className="container">
        <Row>
          <Col className="product-img">
            <img src={product?.img} />
          </Col>
          <Col>
            <div>{product?.title}</div>
            <div>{product?.price}</div>
            <div>{product?.choice ? 'Conscious choice' : ''}</div>
            <div>
              <Dropdown>
                <Dropdown.Toggle
                  variant="white"
                  id="dropdown-basic"
                  className="dropdown"
                >
                  사이즈 선택
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">
                    {product?.size[0]}
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    {product?.size[1]}
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    {product?.size[2]}
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div>
              <Button className="product-detail-button" variant="dark">
                Dark
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductDetail;
