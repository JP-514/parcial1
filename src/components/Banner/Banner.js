import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './Banner.css'; 

function Banner(props) {
    return ( 
        <div className="banner">
            <Row>
                <Col md={6} className="d-flex justify-content-start">
                    <h1 className="banner-title">El aroma mágico</h1>
                </Col>
            </Row>
            <Row className="align-items-center">
                <Col md={6} className="d-flex justify-content-start">
                    <img src={props.imageUrl} alt="Logo" className="banner-logo"/>
                </Col>
            </Row>
        </div>
    );
}

export default Banner;