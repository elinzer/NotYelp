import "./Footer.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function FooterAbout() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <span>
          GitHub Repository - Not Yelp
          <a href="https://github.com/elinzer/NotYelp">
            <i className="fab fa-github fa-2xl" />
          </a>
        </span>
        <span>
          Hazel Guzzetti
          <div className="dev-links">
            <a href="https://github.com/hazeluwuz">
              <i className="fab fa-github fa-2xl" />
            </a>
            <a href="https://www.linkedin.com/in/hazel-guzzetti-50445b23b/">
              <i className="fab fa-linkedin fa-2xl" />
            </a>
          </div>
        </span>
        <span>
          Edgar Lee
          <div className="dev-links">
            <a href="https://github.com/EdgarMLee">
              <i className="fab fa-github fa-2xl" />
            </a>
            <a href="https://www.linkedin.com/in/edgar-lee-1357el135/">
              <i className="fab fa-linkedin fa-2xl" />
            </a>
          </div>
        </span>
        <span>
          El Linzer
          <div className="dev-links">
            <a href="https://github.com/elinzer">
              <i className="fab fa-github fa-2xl" />
            </a>
            <a href="https://www.linkedin.com/in/elinzer/">
              <i className="fab fa-linkedin fa-2xl" />
            </a>
          </div>
        </span>
        <span>
          Giordan Maniti
          <div className="dev-links">
            <a href="https://github.com/giordanferda">
              <i className="fab fa-github fa-2xl" />
            </a>
            <a href="https://www.linkedin.com/in/giordanmaniti/">
              <i className="fab fa-linkedin fa-2xl" />
            </a>
          </div>
        </span>
      </div>
    </footer>
  );
}
export default FooterAbout;
