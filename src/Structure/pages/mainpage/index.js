import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default function Mainpage() {
  return (
    <React.Fragment>
      <Name />
    </React.Fragment>
  );
}

function Name () {
  setTimeout(() => {
    try {
      document.getElementById('author-subtitle').style.opacity = 1;
    } catch(err) {}
  }, 1000);
  return (
    <div id="page-author">
      <Author />
    </div>
  );
}

function Author() {
  return (
    <React.Fragment>
      <div id="author-title">
        AC0xRPFS001
      </div>
      <div id="author-subtitle">
        @kyometori
      </div>
      <div id="author-aboutme">
        <Link to="/about">
          <div id="aboutme-button">
            關於我
          </div>
        </Link>
      </div>
      <hr id="author-line" />
    </React.Fragment>
  );
}
