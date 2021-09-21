import React from 'react';

export default function Footer() {
  return (
    <footer>
      <Copyright author="AC0xRPFS001" from="2021" />
    </footer>
  );
}

function Copyright(props) {
  return (
    <div style={{ color: 'white' }}>
      &copy; {props.author} {props.from} - {new Date().getFullYear()}
    </div>
  )
}
