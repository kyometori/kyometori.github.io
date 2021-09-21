import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <React.Fragment>
      <header>
        <div style={{
            display: 'flex',
            flexDirection: 'row'
        }}>
          <Author name="AC0xRPFS001" over="@kyometori" />
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
            width: '100%'
          }}>
            <HeaderLink text="個人介紹" href="/about" />
            <HeaderLink text="作品集" href="/portfolio" />
            <HeaderLink text="聯絡方式" href="/contact" />
          </div>
        </div>
      </header>
      <div id="header-space" />
    </React.Fragment>
  );
}

function Author(props) {
  return (
    <Link id="author" to="/">
      {props.name}
    </Link>
  );
}

function HeaderLink(props) {
  return (
    <Link className="header-link" to={props.href}>
      {props.text}
    </Link>
  );
}
