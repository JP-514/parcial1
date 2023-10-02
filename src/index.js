import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer'
import reportWebVitals from './reportWebVitals';

import Container from "react-bootstrap/Container";
import bannerImg from "./images/coffeeBanner.png";
import Cafes from './components/Cafes/Cafes';
import { Row } from 'react-bootstrap';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Container className="mt-3">
    <Banner imageUrl={bannerImg}></Banner>
    <Row>
      <Cafes></Cafes>
    </Row>
    <Footer></Footer>
  </Container>
);

reportWebVitals();