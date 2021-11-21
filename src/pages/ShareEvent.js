import React from "react";
import {
  FacebookIcon,
  FacebookShareButton,
  LineIcon,
  LineShareButton,
  TumblrIcon,
  TumblrShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";

const ShareEvent = () => {
  return (
    <div className="sharePage ">
      <h1 className="text-uppercase">Share</h1>
      <div className="sharePageBox">
        <LineShareButton>
          <LineIcon size={50} />
          <p className="d-none d-lg-block">Line</p>
        </LineShareButton>
        <FacebookShareButton>
          <FacebookIcon size={50} />
          <p className="d-none d-lg-block">Facebook</p>
        </FacebookShareButton>
        <WhatsappShareButton>
          <WhatsappIcon size={50} />
          <p className="d-none d-lg-block">Whatsapp</p>
        </WhatsappShareButton>
        <TumblrShareButton>
          <TumblrIcon size={50} />
          <p className="d-none d-lg-block">Tumblr</p>
        </TumblrShareButton>
      </div>
      <div className="salinShare d-flex">
        <textarea value={window.location.href}></textarea>
        <button
          onClick={() => {
            navigator.clipboard.writeText(window.location.href);
          }}
        >
          Salin
        </button>
      </div>
    </div>
  );
};

export default ShareEvent;
