import React from "react";
import "../style/aside.less";
import { Character } from "../configs/characters";

interface ContentProps {
  bg:string;
  sign:string;
}

type ContentState = {
  bg: string;
  sign:string
};

class Content extends React.Component<ContentProps, ContentState> {
  private bg = React.createRef<HTMLImageElement>();
  private sign = React.createRef<HTMLImageElement>();
  constructor(props: AsideProps) {
    super(props);
    this.state = {
      bg: this.props.bg,
      sign:this.props.sign
    };
  }

  componentDidUpdate(prevProps: AsideProps): void {
    if (this.props.bg !== prevProps.bg) {
      if (this.bg.current && this.sign.current) {
        this.bg.current.classList.add("fade-in");
        this.sign.current.classList.add("sign-fade-in");
        setTimeout(() => {
          this.setState({
            bg: this.props.bg,
            sign:this.props.sign
          });
          setTimeout(() => {
            this.bg.current?.classList.remove("fade-in");
            this.sign.current?.classList.remove("sign-fade-in");
          }, 0);
        }, 500);
      }
    }
  }
  render() {
    return (
      <>
      <div className="aside-content-picture">
        <img src={this.state.bg} alt="" className="s-img" ref={this.bg} />
        <div className="mask">
          <div className="mask-div"></div>
          <div className="mask-div"></div>
          <div className="mask-div"></div>
          <div className="mask-div"></div>
          <div className="mask-div"></div>
        </div>
        <img src={this.state.sign}className="aside-content-picture-sign" ref={this.sign} alt="" />
      </div>
      
      </>
    );
  }
}
interface AsideProps {
  bg: string;
  ct: Character;
  sign:string;
  color: string;
}

type AsideState = {
  ct: Character;
  color: string
};

class Aside extends React.Component<AsideProps, AsideState> {
  private group = React.createRef<HTMLElement>();
  private name = React.createRef<HTMLHeadingElement>();
  constructor(props: AsideProps) {
    super(props);
    this.state = {
      ct: this.props.ct,
      color: ""
    };
  }

  componentDidUpdate(prevProps: Readonly<AsideProps>): void {
    if (this.props.ct !== prevProps.ct) {
      if (this.group.current) {
        this.group.current.classList.add("group-fade-in");
        setTimeout(() => {
          this.setState({
            ct: this.props.ct,
            color: this.props.color
          });
          if(this.group.current && this.name.current){
            this.group.current.classList.remove("group-fade-in");
            this.name.current.style.color = this.state.color;
          }
        }, 500);
      }
    }
  }

  render() {
    return (
      <div className="aside">
        <hgroup ref={this.group}>
          <h1 ref={this.name}>{this.state.ct.name}</h1>
          <h2>{this.state.ct.doing}</h2>
        </hgroup>
        <div className="aside-content">
          <Content bg={this.props.bg} sign={this.props.sign} />
        </div>
      </div>
    );
  }
}

export default Aside;
