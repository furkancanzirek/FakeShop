import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

const Header = () => {
  let [kategoriler, setKategoriler] = useState([]);
  const fetchCategories = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products/categories")
      .catch((err) => console.log(err));

    return response;
  };
  useEffect(async () => {}, []);
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link to="/">
          {" "}
          <Navbar.Brand>FakeShop</Navbar.Brand>{" "}
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" style={{ textDecoration: "none", fontSize: "1rem",color:"#A0A0A0"}}>
              {" "}
              Ürünler{" "}
            </Link>
          </Nav>
          <Nav>
            <Link to="/login" style={{ textDecoration: "none", fontSize: "1rem",color:"#A0A0A0"}}>
              <div className="d-flex">
                <i className="fa fa-user mt-1" aria-hidden="true">
                  {" "}
                </i>
                <p style={{ marginLeft: "5px", fontSize: "0.9rem" }}>
                  {" "}
                  Giriş Yap
                </p>
              </div>
            </Link>
            
              <Link to="/cart"  style={{ textDecoration: "none", fontSize: "1rem",color:"#A0A0A0"}}>
              <div className="d-flex">
                <i className="fa fa-shopping-cart mt-1" aria-hidden="true">
                  {" "}
                </i>
                <p style={{ marginLeft: "5px", fontSize: "0.9rem" }}>
                  {" "}
                  Sepetim
                </p>
                </div>
              </Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
