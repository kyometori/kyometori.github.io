import React from 'react';
import './style.css';

export default function Contact () {
  return (
    <div id="contact-table">
      <h1 id="contact-title">聯絡我</h1>
      <div id="contact-content">
        <ContactItem
          name="Discord"
          value="AC0xRPFS001#5007"
        />
        <ContactItem
          name="Mail"
          value="ac0xrpfs001@vivaldi.net"
          url="mailto:ac0xrpfs001@vivaldi.net"
        />
        <ContactItem
          name="Facebook"
          value="AC Chen"
          url="https://www.facebook.com/ac.chen.5817"
        />
        <ContactItem
          name="Github"
          value="kyometori"
          url="https://github.com/kyometori"
        />
        <ContactItem
          name="Replit"
          value="@AC0xRPFS001"
          url="https://replit.com/@AC0xRPFS001"
        />
        <ContactItem
          name="osu!"
          value="AC0xRPFS001"
          url="https://osu.ppy.sh/u/AC0xRPFS001"
        />
      </div>
    </div>
  );
}

function ContactItem(props) {
  let output;
  if (!props.url) {
    output = <div className="contact-method">{props.value}</div>;
  } else {
    output = <a href={props.url}><div className="contact-method">{props.value}</div></a>;
  }
  return (
    <div className="contact-item">
      <div className="contact-name">
        {props.name}
      </div>
      {output}
    </div>
  );
}
