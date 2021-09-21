import React from 'react';
import juniorhizollo from '../../../asset/img/junior_hizollo.png';
import djsmusic from '../../../asset/img/npm-logo.png';
import hzindex from '../../../asset/img/hzindex.png';
import chocomint from '../../../asset/img/chocomint.png';
import { Link, Switch, Route } from 'react-router-dom';
import './style.css';

export default function Portfolio() {
  return (
    <Switch>
      <Route exact path="/portfolio">
        <WorkList />
      </Route>
      <Route path="/portfolio/:work" component={Test} />
    </Switch>
  );
}

function WorkList() {
  return (
    <div id="portfolio">
      <WorkBox
        pic={juniorhizollo}
        title="Junior HiZollo"
        description="一個在 Discord 上的多功能機器人，可以協助你管理身份組和成員，以及播放音樂給你聽，還有許多娛樂項目......"
        url="/portfolio/juniorhizollo"
      />
      <WorkBox
        pic={hzindex}
        title="HiZollo 官方網站"
        description="用純 HTML CSS JavaScript 寫出來的響應式網站，還記得當初在那邊喬 CSS 的顯示方式弄了老半天"
        url="/portfolio/hzindex"
      />
      <WorkBox
        pic={djsmusic}
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
    <div className="workbox">
      <div className="workbox-pic">
        <img src={props.pic} alt="" />
      </div>
      <div className="workbox-description">
        <span className="workbox-description-title">{props.title}</span>
        {props.description}
      </div>
      <div className="workbox-button">
        <Link to={props.url}>
          <div>
            查看介紹
          </div>
        </Link>
      </div>
    </div>
  )
}

function Test(props) {
  return (
    <React.Fragment>
      {props.match.params.work}
    </React.Fragment>
  )
}
