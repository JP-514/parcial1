import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Banner from './components/Banner/Banner';
import reportWebVitals from './reportWebVitals';

import Container from "react-bootstrap/Container";
import bannerImg from "./images/coffeeBanner.png";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Container className="mt-3">
    <Banner imageUrl={bannerImg}/>
  </Container>
);

reportWebVitals();