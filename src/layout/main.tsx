import React from "react";
import ReactDOM from "react-dom";
import Rotate from "../components/Rotate";
import Aside from "../components/Aside";
import Detail from "../components/Detail";
import Share from "../components/Share";
import "./index.less";

import logo from "../assets/logo_mygo.png";
import lb from "../assets/textture/img_loading_light_01.png";
import rt from "../assets/textture/img_loading_light_02.png";
import rb from "../assets/textture/img_loading_light_03.png";
import anons from "../assets/characters/ano/img_chara_anon_02.webp";
import tomoris from "../assets/characters/tomori/img_chara_tomori_02.webp";
import soyos from "../assets/characters/soyo/img_chara_soyo_02.webp";
import takis from "../assets/characters/taki/img_chara_taki_02.webp";
import ranas from "../assets/characters/rana/img_chara_rana_02.webp";
import background from "../configs/background";
import personalities from "../configs/personalities";
import characters from "../configs/characters";
import { Character } from "../configs/characters";
import bg_textture from "../assets/bg/img_emblem_blue.svg";
import next from '../assets/next/bg_scrolldown.png';

import anonsign from '../assets/sign/anon/txt_name_anon.svg'
import tomorisign from '../assets/sign/tomori/txt_name_tomori.svg'
import soyosign from '../assets/sign/soyo/txt_name_soyo.svg'
import takisign from '../assets/sign/taki/txt_name_taki.svg'
import ranasign from '../assets/sign/rana/txt_name_rana.svg'

import colors from "../configs/colors";

type AppState = {
  currentIndex: number;
  characters: Character[];
  bgs: string[];
  background: string[];
  personalities: string[];
  deg: number;
  signs:string[];
  colors: string[];
};

class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      currentIndex: 0,
      characters: characters,
      bgs: [anons, tomoris, soyos, takis, ranas],
      background: background,
      personalities: personalities,
      deg: 0,
      signs:[anonsign,tomorisign,soyosign,takisign,ranasign],
      colors: colors
    };
  }
  private next = () => {
    this.setState((prev) => ({
      currentIndex:
        prev.currentIndex + 1 == prev.characters.length
          ? 0
          : prev.currentIndex + 1,
      deg: prev.deg + 360 / prev.characters.length,
    }));
  };
  render() {
    return (
      <div className="app">
        <Share />
        <img src={logo} alt="" className="logo" />
        <img src={bg_textture} className="bg_textture" alt="" />
        <Aside
          ct={this.state.characters[this.state.currentIndex]}
          bg={this.state.bgs[this.state.currentIndex]}
          sign={this.state.signs[this.state.currentIndex]}
          color={this.state.colors[this.state.currentIndex]}
        />
        <Rotate deg={this.state.deg} />
        <Detail
          background={this.state.background[this.state.currentIndex]}
          personalities={this.state.personalities[this.state.currentIndex]}
        />
        <img src={lb} alt="" className="lb" />
        <img src={rt} alt="" className="rt" />
        <img src={rb} alt="" className="rb" />
        <div className="btn" onClick={this.next}>
          <img src={next} className="next" alt="" />
          <span>TGW~~~</span>
          <p>next</p>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
