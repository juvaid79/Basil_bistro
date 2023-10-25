import React from 'react'
import { Container } from 'react-bootstrap';


function Footer() {
  return (
    <>
      {/* Footer Start From Here  */}
      <footer id="footer" className="footer">
        <Container>
          <div className="footer-menu">
            <div className="row">
              <div className="col-sm-3">
                <div className="navbar-header">
                  <a className="navbar-brand" href="/">
                    Basil<span style={{ color: '#32a9d8' }}>Bistro</span>
                  </a>
                </div>
              </div>
              <div className="col-sm-9">
                <ul className="footer-menu-item">
                  <li className="scroll"><a href="/">Home</a></li>
                  <li className="scroll"><a href="/explore">Explore</a></li>
                  <li className="scroll"><a href="/review">Review</a></li>
                  <li className="scroll"><a href="/blog">Blog</a></li>
                  <li className="scroll"><a href="/contact">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="hm-footer-copyright">
            <div className="row">
              <div className="col-sm-5">
                <p>
                  &copy; copyright. designed and developed by <a href="https://www.instagram.com/Ju_vaid">: Juvaid </a>
                </p>
              </div>
              <div className="col-sm-7">
                <div className="footer-social">
                  <div>
                    <span><i className="fa fa-phone"> +91 9876541230</i></span>
                  </div>
                  <a href="#https://www.facebook.com/"><i className="fa fa-facebook"></i></a>
                  <a href="https://www.instagram.com/Ju_vaid"><i className="fa fa-instagram"></i></a>
                  <a href="#twitter"><i className="fa fa-twitter"></i></a>
                  <a href="#google"><i className="fa fa-google"></i></a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </footer>
      {/* Footer End From Here  */}
    </>
  )
}

export default Footer