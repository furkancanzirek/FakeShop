import React,{useState} from "react";
import { Link } from "react-router-dom";
import { useSelector} from "react-redux";

import { Card } from "react-bootstrap";
const ProductComponent =  () => {
  const products =  useSelector((state) => state.allProducts.products);
  
 return ( products.map((product) => {
    let { id, title, image, price, category, description } = product;
    
    description = description.slice(0, 125);
    return (
      <div
        className="col-md-3 mb-3"
        onClick={() => {

        }}
      >
        <Link to={"product/"+id} style={{ textDecoration: 'none',color:"black" }}>
          <Card style={{ width: "18rem" }} >
            <Card.Img variant="top" src={image} height="300" width="300" />
            <Card.Body>
              <Card.Title>{title}</Card.Title>

              <Card.Text>{description}</Card.Text>

              <Card.Footer>{price} TL</Card.Footer>
            </Card.Body>
          </Card>
        </Link>
      </div>
    );
  }))
  
  
};

export default ProductComponent;
