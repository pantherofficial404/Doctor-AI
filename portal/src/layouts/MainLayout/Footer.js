import Config from 'Config';
import React from 'react';

const Footer = (props) => {
  return (
    <footer className="footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">{Config.FOOTER_COPYRIGHT}</div>
          <div className="col-md-6 text-md-right">
            {Config.VERSION}
            {/* <div className="text-md-right footer-links d-none d-md-block">
              <a href="#">About</a>
              <a href="#">Support</a>
              <a href="#">Contact Us</a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
