import React from 'react';
import juniorhizollo from '../../../../asset/img/junior_hizollo.png';
import djsmusic from '../../../../asset/img/npm-logo.png';
import hzindex from '../../../../asset/img/hzindex.png';
import chocomint from '../../../../asset/img/chocomint.png';
import acgen from '../../../../asset/img/acgen.png';

const img_api = 'https://github-readme-stats.vercel.app/api/pin/?bg_color=DCDCDC&title_color=1143CD&border_color=A0A0A0'

export default function DetailBox(props) {
  const { work } = props.match.params;
  const { image, owner, name, text, isPrivate } = resolveRepo(work);
  const githubLink = `https://github.com/${owner}/${name}`;
  const imgLink = `${img_api}&username=${owner}&repo=${name}`;
  return (
    <div id="detailbox">
      <div id="detailbox-header">
        <img src={image} />
        <div>
          {text}
        </div>
      </div>
      <div id="detailbox-repoimg">
        {
          !isPrivate ? <a href={githubLink}><img src={imgLink} /></a> : ''
        }
      </div>
      <div id="detailbox-buttons">
        <Button text="回前頁" url="#/portfolio" />
        { !isPrivate ? <Button text="repo" url={githubLink} /> : '' }
      </div>
    </div>
  )
}

function resolveRepo(work) {
  switch(work) {
    case 'juniorhizollo':
      return { image: juniorhizollo, text: 'Junior HiZollo', isPrivate: true };
    case 'hzindex':
      return { image: hzindex, owner: 'hizollo', name: 'hizollo.github.io', text: 'HiZollo 官方網站', isPrivate: false }
    case 'djsmusic':
      return { image: djsmusic, owner: 'kyometori', name: 'djsmusic', text:'@kyometori/djsmusic 套件', isPrivate: false }
    case 'chocomint':
      return { image: chocomint, owner: 'kyometori', name: 'chocomint', text: 'Chocomint Ice', isPrivate: false }
    case 'acgen':
      return { image: acgen, owner: 'kyometori', name: 'acgen', text: 'AC 訊息產生器', isPrivate: false }
  }
}

function Button(props) {
  return (
    <a href={props.url}>
      <div class="button">
        {props.text}
      </div>
    </a>
  );
}
