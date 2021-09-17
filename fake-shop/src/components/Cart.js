import React, { useState,useEffect } from "react";
import { useSelector } from "react-redux";
import "./Cart.css";
import { Row, Col, Card } from "react-bootstrap";
const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
 const [toplamTutar,setToplamTutar]=useState()
 const [urunSayisi,setUrunSayisi]=useState()
 let _toplamTutar=0
 let _urunSayisi=0
  cart ? (cart.map((cartElement)=>{
    _toplamTutar+=cartElement.price
    _urunSayisi+=1
    console.log(_toplamTutar);
  })):console.log("devam")

  useEffect(() => {
    setToplamTutar(_toplamTutar)
    setUrunSayisi(_urunSayisi)
  }, [cart])
  return (
    <div className="card justify-content-center">
      <Row className="row justify-content-center">
        <Col lg="8" className=" cart">
          <div className="title">
            <Row className="row">
              <Col className="col">
                <h4>
                  <b>Sepetim</b>
                </h4>
              </Col>
              <Col className="col align-self-center text-right text-muted">
                {urunSayisi} Adet ürün var
              </Col>
            </Row>
          </div>
          <Row className="row">
        {
            cart ?
            cart.map((cart) => {
                return(
                <Row className="row main align-items-center">
                <Col lg="2" className="col-2">
                  <img
                    className="img-fluid"
                    src={cart.image}
                  />
                </Col>
                <Col className="col">
                  <Row className="row text-muted">Shirt</Row>
                  <Row className="row">{cart.title}</Row>
                </Col>
                <Col className="col">
                  <a href="#">-</a>
                  <a href="#" className="border">
                    1
                  </a>
                  <a href="#">+</a>{" "}
                </Col>
                <Col className="col">
                  &#8378; {cart.price} <span className="close">&#10005;</span>
                </Col>
              </Row>)
            }):"Sepetiniz Boş"}
            
          </Row>

          <div className="back-to-shop">
            <a href="#">
              <i class="fas fa-arrow-left"></i>
            </a>
            <span className="text-muted">Alışverişe devam et</span>
          </div>
        </Col>
        <Col lg="4" className="col-md-4 summary">
          <div>
            <h5>
              <b>Özet</b>
            </h5>
          </div>
          <hr />
          <Row className="row">
            <Col className="col" style={{ paddingLeft: "0" }}>
            {urunSayisi}
            </Col>
            <Col className="col text-right">&#8378; {toplamTutar}</Col>
          </Row>
          <form>
            <p>KARGO</p>{" "}
            <select>
              <option className="text-muted">Standart Kargo &#8378;5.00</option>
              <option className="text-muted">Hızlı Kargo &#8378;10.00</option>
            </select>
            <p>İNDİRİM KUPONU</p>{" "}
            <input id="code" placeholder="Kodunuzu Giriniz" />
          </form>
          <Row
            className="row"
            style={{ borderTop: "1px solid rgba(0,0,0,.1)", padding: "2vh 0;" }}
          >
            <Col className="col">TOPLAM TUTAR</Col>
            <Col className="col text-right">&#8378;
            {toplamTutar}
            </Col>
          </Row>{" "}
          <button className="btn">SATIN AL</button>
        </Col>
      </Row>
    </div>
  );
};
export default Cart;
