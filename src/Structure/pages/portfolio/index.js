import React from 'react';
import jhz from '../../../asset/img/junior_hizollo.png';
import npm from '../../../asset/img/npm-logo.png';
import chocomint from '../../../asset/img/chocomint.png';
import { Link, Switch, Route } from 'react-router-dom';
import './style.css';

export default function Portfolio() {
  return (
    <Switch>
      <Route exact path="/portfolio">
        <WorkList />
      </Route>
      <Route path="/portfolio/:work" render={props => props.match.params.work} />
    </Switch>
  );
}

function WorkList() {
  return (
    <div id="portfolio">
      <WorkBox
        pic={jhz}
        title="Junior HiZollo"
        description="一個在 Discord 上的多功能機器人，可以協助你管理身份組和成員，以及播放音樂給你聽，還有許多娛樂項目......"
        url="/portfolio/juniorhizollo"
      />
      <WorkBox
        pic={npm}
        title="@kyometori/djsmusic"
        description="一個 @discordjs/voice 套件的 wrapper，可以幫助你更高速方便的建立一台屬於自己的音樂機器人，又不失彈性"
        url="/portfolio/djsmusic"
      />
      <WorkBox
        pic={chocomint}
        title="chocomint ice"
        description="使用 @kyometori/djsmusic 套件製作的音樂機器人，作為該套件的示範使用存在，同時也包含了各種 discord.js v13 的示範"
        url="/portfolio/chocomint"
      />
    </div>
  );
}

function WorkBox(props) {
  return (
    <div class="workbox">
      <div class="workbox-pic">
        <img src={props.pic} alt="" />
      </div>
      <div class="workbox-description">
        <span class="workbox-description-title">{props.title}</span>
        {props.description}
      </div>
      <div class="workbox-button">
        <Link to={props.url}>
          <div>
            查看介紹
          </div>
        </Link>
      </div>
    </div>
  )
}
