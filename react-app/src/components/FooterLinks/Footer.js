import "./Footer.css";

function FooterAbout() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <span className="span-hover">
          <a href="https://github.com/elinzer/NotYelp" target="_blank">
            NotYelp Github
            <span> </span>
            <i className="fab fa-github" />
          </a>
        </span>
        <span>
          Hazel Guzzetti
          <span> </span>
          <a href="https://github.com/hazeluwuz" target="_blank">
            <i className="fab fa-github" />
          </a>
          <span> </span>
          <a
            href="https://www.linkedin.com/in/hazel-guzzetti-50445b23b/"
            target="_blank"
          >
            <i className="fab fa-linkedin" />
          </a>
        </span>
        <span>
          Edgar Lee
          <span> </span>
          <a href="https://github.com/EdgarMLee" target="_blank">
            <i className="fab fa-github" />
          </a>
          <span> </span>
          <a
            href="https://www.linkedin.com/in/edgar-lee-1357el135/"
            target="_blank"
          >
            <i className="fab fa-linkedin" />
          </a>
        </span>
        <span>
          El Linzer
          <span> </span>
          <a className="git" href="https://github.com/elinzer" target="_blank">
            <i className="fab fa-github" />
          </a>
          <span> </span>
          <a href="https://www.linkedin.com/in/elinzer/" target="_blank">
            <i className="fab fa-linkedin" />
          </a>
        </span>
        <span>
          Giordan Maniti
          <span> </span>
          <a href="https://github.com/giordanferda" target="_blank">
            <i className="fab fa-github" />
          </a>
          <span> </span>
          <a href="https://www.linkedin.com/in/giordanmaniti/" target="_blank">
            <i className="fab fa-linkedin" />
          </a>
        </span>
      </div>
    </footer>
  );
}

export default FooterAbout;
