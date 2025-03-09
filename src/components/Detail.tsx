import React from "react";
import "../style/detail.less";

interface DetailProps {
  background: string;
  personalities: string;
}

type DetailState = {
  background: string;
  personalities: string;
};

class Detail extends React.Component<DetailProps, DetailState> {
  private section1 = React.createRef<HTMLDivElement>();
  private section2 = React.createRef<HTMLDivElement>();
  constructor(props: DetailProps) {
    super(props);
    this.state = {
      background: this.props.background,
      personalities: this.props.personalities,
    };
  }
  componentDidUpdate(prevProps: Readonly<DetailProps>): void {
    if (
      this.props.background !== prevProps.background &&
      this.props.personalities !== prevProps.personalities
    ) {
      if (this.section1.current && this.section2.current) {
        this.section1.current.classList.add("detail-fade-in");
        this.section2.current.classList.add("detail-fade-in");
        setTimeout(() => {
          this.setState({
            background: this.props.background,
            personalities: this.props.personalities,
          });
          this.section1.current?.classList.remove("detail-fade-in");
          this.section2.current?.classList.remove("detail-fade-in");
        }, 500);
      }
    }
  }
  render() {
    return (
      <div className="detail">
        <section ref={this.section1}>
          <h3>Background 🧸</h3>
          <p>{this.state.background}</p>
        </section>
        <section ref={this.section2}>
          <h3>Personality 🎉</h3>
          <p>{this.state.personalities}</p>
        </section>
      </div>
    );
  }
}

export default Detail;
