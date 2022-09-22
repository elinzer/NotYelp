import "./Footer.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function FooterAbout() {
  // const user = useSelector((state) => state.session.user);

  return (
    <footer className="footer">
      <div className="footer-container">
        <span>
          <a href="https://github.com/elinzer/NotYelp">
            <i className="fab fa-github" />
            GitHub Repository - Not Yelp
          </a>
        </span>
        <span>
          <a href="https://github.com/hazeluwuz">
            <i className="fab fa-github" />
            Hazel Guzzetti
          </a>
          <a href="https://www.linkedin.com/in/hazel-guzzetti-50445b23b/">
            <i className="fab fa-linkedin" />
          </a>
        </span>
        <span>
          <a href="https://github.com/EdgarMLee">
            <i className="fab fa-github" />
            Edgar Lee
          </a>
          <a href="https://www.linkedin.com/in/edgar-lee-1357el135/">
            <i className="fab fa-linkedin" />
          </a>
        </span>
        <span>
          <a href="https://github.com/elinzer">
            <i className="fab fa-github" />
            El Linzer
          </a>
          <a href="https://www.linkedin.com/in/elinzer/">
            <i className="fab fa-linkedin" />
          </a>
        </span>
        <span>
          <a href="https://github.com/giordanferda">
            <i className="fab fa-github" />
            Giordan Maniti
          </a>
          <a href="https://www.linkedin.com/in/giordanmaniti/">
            <i className="fab fa-linkedin" />
          </a>
        </span>
      </div>
    </footer>
  );
}
export default FooterAbout;
