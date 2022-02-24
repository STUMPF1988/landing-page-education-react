import React from 'react';
import { TiSocialLinkedin, TiSocialFacebook, TiSocialInstagram } from 'react-icons/ti';
import FooterStyle from './styled';

export default function Footer(props) {
  return (
    <FooterStyle>
      <div className="divContainer">
        <h4>
          <span>About</span> . <span>Contact</span> . <span>Terms of Use</span> . {'   '}
          <span>Privacy Policy</span>
        </h4>

        <p> &copy; Your Website 2022. All Rights Reserved </p>
      </div>
      <div className="icons">
        <TiSocialLinkedin className="pointer" />
        <TiSocialFacebook className="pointer" />
        <TiSocialInstagram className="pointer" />
      </div>
    </FooterStyle>
  );
}
