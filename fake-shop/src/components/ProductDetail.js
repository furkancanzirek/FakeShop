import React, { useEffect, useState,useRef} from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectedProduct } from "../redux/actions/productActions";
import { addProduct } from "../redux/actions/productActions";
import "./productDetail.css";
import axios from "axios";

import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Alert,
  ButtonGroup,
} from "react-bootstrap";

const ProductDetail = () => {
  const alert = useRef()
  const dispatch = useDispatch();
  const { productId } = useParams();
  const fetchProduct = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products/" + productId)
      .catch((err) => console.log(err));
    dispatch(selectedProduct(response.data));
  };
  useEffect(() => {
    fetchProduct();
  }, [productId]);

  const product = useSelector((state) => state.product);
  const cartRedux = useSelector((state) => state.cart.cart);
  const [cart, setCart] = useState([]);

  const addCart = (product) => {
    dispatch(addProduct(product));
    console.log(cartRedux);
  };

  // useEffect(() => dispatch(addProduct(cart)),[cart])

  if (product) {
    var { id, title, description, price, image, category, rating } = product;
  }
  return product.id == productId ? (
    <Container>
      <Row className="d-flex justify-content-around mt-5">
        <Col lg="6">
          <Card className="align-items-center">
            <Card.Img variant="top" style={{ width: "50%" }} src={image} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>{description}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="4">
          <div className="product-information">
            <Card body outline color="danger">
              <Card.Title tag="h5">{title}</Card.Title>
              <div className="d-flex">
                {" "}
                <p style={{ color: "#FF671D" }}>Satıcı: </p>Ahmet Ticaret
              </div>
              <div className="d-flex">
                <p style={{ color: "#FF671D" }}>Kategori: </p> {category}
              </div>
              <div style={{ display: "flex" }}>
                <p style={{ color: "#FF671D" }}>Değerlendirme Sayısı:</p>

                <p style={{ marginLeft: "5px" }}> {rating?rating.count:""} </p>
              </div>
              <div style={{ display: "flex" }}>
                <p style={{ color: "#FF671D" }}>Puan:</p>

                <p style={{ marginLeft: "5px" }}> {rating?rating.rate:""} </p>
              </div>
              <div class="row">
                <div className="col-md-12">
                  <div className="stars">
                    <form action="">
                      <input
                        className="star star-5"
                        id="star-5"
                        type="radio"
                        name="star"
                      />
                      <label className="star star-5" for="star-5"></label>
                      <input
                        className="star star-4"
                        id="star-4"
                        type="radio"
                        name="star"
                      />
                      <label className="star star-4" for="star-4"></label>
                      <input
                        className="star star-3"
                        id="star-3"
                        type="radio"
                        name="star"
                      />
                      <label className="star star-3" for="star-3"></label>
                      <input
                        className="star star-2"
                        id="star-2"
                        type="radio"
                        name="star"
                      />
                      <label className="star star-2" for="star-2"></label>
                      <input
                        className="star star-1"
                        id="star-1"
                        type="radio"
                        name="star"
                      />
                      <label className="star star-1" for="star-1"></label>
                    </form>
                  </div>
                </div>
              </div>

              <button
                id="foot"
                className="mb-3"
                onClick={(e) => {
                  e.preventDefault();
                  addCart(product);
                  
                    alert.current.style.display="block"
                    
                      setTimeout(() => {
                        alert.current.style.display="none"
                      }, 500);
                    
                   
                  
                 
                }}
              >
                <button className="button-os">
                  <a href="#">Sepete Ekle</a>
                </button>
              </button>
              <Alert className="mt-2" style={{display:"none"}} ref={alert} variant="warning">
                
               Ürün Sepete Başarıyla Eklendi!
              </Alert>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  ) : (
    <Container>
      <Row className="d-flex justify-content-around mt-5">
        <Col lg="6">
          <Card className="align-items-center">
            <Card.Img variant="top" style={{ width: "50%" }} src="" />
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="4">
          <div className="product-information">
            <Card body outline color="danger">
              <Card.Title tag="h5"></Card.Title>
              <div className="d-flex">
                {" "}
                <p style={{ color: "#FF671D" }}>Satıcı: </p>
              </div>
              <div className="d-flex">
                <p style={{ color: "#FF671D" }}>Kategori: </p>
              </div>
              <div style={{ display: "flex" }}>
                <p style={{ color: "#FF671D" }}>Değerlendirme Sayısı:</p>

                <p style={{ marginLeft: "5px" }}> </p>
              </div>
              <div style={{ display: "flex" }}>
                <p style={{ color: "#FF671D" }}>Puan:</p>

                <p style={{ marginLeft: "5px" }}> </p>
              </div>
              <div class="row">
                <div className="col-md-12">
                  <div className="stars">
                    <form action="">
                      <input
                        className="star star-5"
                        id="star-5"
                        type="radio"
                        name="star"
                      />
                      <label className="star star-5" for="star-5"></label>
                      <input
                        className="star star-4"
                        id="star-4"
                        type="radio"
                        name="star"
                      />
                      <label className="star star-4" for="star-4"></label>
                      <input
                        className="star star-3"
                        id="star-3"
                        type="radio"
                        name="star"
                      />
                      <label className="star star-3" for="star-3"></label>
                      <input
                        className="star star-2"
                        id="star-2"
                        type="radio"
                        name="star"
                      />
                      <label className="star star-2" for="star-2"></label>
                      <input
                        className="star star-1"
                        id="star-1"
                        type="radio"
                        name="star"
                      />
                      <label className="star star-1" for="star-1"></label>
                    </form>
                  </div>
                </div>
              </div>

              <button id="foot" className="mb-3">
                <button className="button-os">Sepete Ekle</button>
              </button>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
