import "./Footer.css";

function FooterAbout() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <span className="span-hover">
          <a href="https://github.com/elinzer/NotYelp">
            <i className="fab fa-github" />
            GitHub Repository - Not Yelp
          </a>
        </span>
        <span>
          Hazel Guzzetti
          <span> </span>
          <a href="https://github.com/hazeluwuz">
            <i className="fab fa-github" />
          </a>
          <span> </span>
          <a href="https://www.linkedin.com/in/hazel-guzzetti-50445b23b/">
            <i className="fab fa-linkedin" />
          </a>
        </span>
        <span>
          Edgar Lee
          <span> </span>
          <a href="https://github.com/EdgarMLee">
            <i className="fab fa-github" />
          </a>
          <span> </span>
          <a href="https://www.linkedin.com/in/edgar-lee-1357el135/">
            <i className="fab fa-linkedin" />
          </a>
        </span>
        <span>
          El Linzer
          <span> </span>
          <a className="git" href="https://github.com/elinzer">
            <i className="fab fa-github" />
          </a>
          <span> </span>
          <a href="https://www.linkedin.com/in/elinzer/">
            <i className="fab fa-linkedin" />
          </a>
        </span>
        <span>
          Giordan Maniti
          <span> </span>
          <a href="https://github.com/giordanferda">
            <i className="fab fa-github" />
          </a>
          <span> </span>
          <a href="https://www.linkedin.com/in/giordanmaniti/">
            <i className="fab fa-linkedin" />
          </a>
        </span>
      </div>
    </footer>
  );
}

export default FooterAbout;
