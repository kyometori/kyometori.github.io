import React from 'react';
import Header from './Structure/header.js';
import Content from './Structure/content.js';
import Footer from './Structure/footer.js';
import './style.css';

export default function App() {
  return (
    <React.Fragment>
      <Header />
      <Content />
      <Footer />
    </React.Fragment>
  );
}
