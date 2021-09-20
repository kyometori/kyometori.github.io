import React from 'react';
import avatar from '../../../asset/img/avatar.png';
import github from '../../../asset/icon/github-icon.png';
import facebook from '../../../asset/icon/facebook-icon.png';
import email from '../../../asset/icon/email-icon.png';
import './style.css';

export default function About() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItem: 'center'
    }}>
      <Profile />
    </div>
  );
}

function Profile() {
  return (
    <div id="profile">
      <div id="profile-left">
        <div>
          <img src={avatar} id="profile-avatar" alt="" />
          <span id="profile-name">AC0xRPFS001</span>
        </div>
        <div id="profile-icon-links">
          <a href="https://github.com/kyometori"><img src={github} alt="" /></a>
          <a href="https://www.facebook.com/ac.chen.5817"><img src={facebook} alt=""/ ></a>
          <a href="mailto:ac0xrpfs001@vivaldi.net"><img src={email} alt="" /></a>
        </div>
      </div>
      <div id="profile-right">
        <div id="profile-right-inner">
          <div>
            語言：C++、Java、JavaScript
          </div>
          <div>
            專案：<a href="https://hizollo.ddns.net">Junior HiZollo</a>、<a href="https://github.com/kyometori/djsmusic">@kyometori/djsmusic</a>
          </div>
          <div>
            興趣：睡覺吧awa，偶爾會寫點小程式
          </div>
        </div>
        <div id="profile-right-description">
          這裡原本是要給我放短介紹的地方，結果我不知道到底要寫些什麼，所以我決定先用這串毫無意義的文字填空一下，然後恭喜你浪費了一堆時間看這串字。
        </div>
      </div>
    </div>
  );
}
