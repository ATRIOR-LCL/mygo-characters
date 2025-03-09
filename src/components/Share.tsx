import React from "react";
import "../style/share.less";

import x from "../assets/X.png";
import Youtube from "../assets/Youtube.png";

class Share extends React.Component {
  render() {
    return (
      <div className="share">
        <div className="x">
          <img src={x} alt="" />
          <a href="https://x.com/bangdreamgbp_EN" target="_blank">
            Official X
          </a>
          <span></span>
        </div>
        <div className="youtube">
          <img src={Youtube} alt="" />
          <a
            href="https://www.youtube.com/channel/UCPityslSknKsWUq9iy8p9fw"
            target="_blank"
          >
            Official Youtube
          </a>
          <span></span>
        </div>
      </div>
    );
  }
}

export default Share;
