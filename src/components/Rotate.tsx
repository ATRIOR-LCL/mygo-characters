import React from "react";
import "../style/rotate.less";
import anon from "../assets/characters/ano/img_chara_anon.webp";
import rana from "../assets/characters/rana/img_chara_rana.webp";
import taki from "../assets/characters/taki/img_chara_taki.webp";
import soyo from "../assets/characters/soyo/img_chara_soyo.webp";
import tomori from "../assets/characters/tomori/img_chara_tomori.webp";

interface RotateProps {
  deg: number;
}

type RotateState = {
  deg: number;
}

class Rotate extends React.Component<RotateProps, RotateState> {
  private rotate = React.createRef<HTMLDivElement>();
  constructor(props: RotateProps) {
    super(props);
    this.state = {
      deg: this.props.deg,
    };
  }
  componentDidUpdate(prevProps: Readonly<RotateProps>): void {
    if (this.props.deg !== prevProps.deg) {
      if(this.rotate.current) {
        this.rotate.current.style.transform = `translateY(200%) rotate(${this.props.deg}deg)`;
        this.rotate.current.style.opacity = "0";
        setTimeout(() => {
          if(this.rotate.current) {
            this.rotate.current.style.opacity = "1";
          }
        }, 300);
      }
      this.setState({
        deg: this.props.deg,
      });
    }
  }
  componentDidMount(): void {
    const imgs = [
      ...(document.querySelectorAll(".rotate-image") as NodeListOf<HTMLImageElement>),
    ];
    let deg = 0;
    imgs.forEach((img) => {
      img.style.transform = `rotate(${deg}deg) translateY(-100%)`;
      deg += 360 / imgs.length;
    });
  }
  render() {
    return (
      <div className="rotate" ref={this.rotate}>
        <img className="rotate-image" src={anon} alt="" />
        <img className="rotate-image" src={rana} alt="" />
        <img className="rotate-image" src={taki} alt="" />
        <img className="rotate-image" src={soyo} alt="" />
        <img className="rotate-image" src={tomori} alt="" />
      </div>
    );
  }
}

export default Rotate;
