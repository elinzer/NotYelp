import "./Footer.css";

function FooterAbout() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <span>
          <div className="devTitle">Not Yelp Github</div>
          <a href="https://github.com/elinzer/NotYelp" id="repo" target="_blank">
            <i className="fab fa-github fa-2xl" />
          </a>
        </span>
        <span>
          <div className="devTitle">Hazel Guzzetti</div>
          <div className="dev-links">
            <a href="https://github.com/hazeluwuz" target="_blank">
              <i className="fab fa-github fa-2xl" />
            </a>
            <a href="https://www.linkedin.com/in/hazel-guzzetti-50445b23b/" target="_blank">
              <i className="fab fa-linkedin fa-2xl" />
            </a>
          </div>
        </span>
        <span>
          <div className="devTitle">Edgar Lee</div>
          <div className="dev-links">
            <a href="https://github.com/EdgarMLee" target="_blank">
              <i className="fab fa-github fa-2xl" />
            </a>
            <a href="https://www.linkedin.com/in/edgar-lee-1357el135/" target="_blank">
              <i className="fab fa-linkedin fa-2xl" />
            </a>
          </div>
        </span>
        <span>
          <div className="devTitle">El Linzer</div>
          <div className="dev-links">
            <a href="https://github.com/elinzer" target="_blank">
              <i className="fab fa-github fa-2xl" />
            </a>
            <a href="https://www.linkedin.com/in/elinzer/" target="_blank">
              <i className="fab fa-linkedin fa-2xl" />
            </a>
          </div>
        </span>
        <span>
          <div className="devTitle">Giordan Maniti</div>
          <div className="dev-links">
            <a href="https://github.com/giordanferda" target="_blank">
              <i className="fab fa-github fa-2xl" />
            </a>
            <a href="https://www.linkedin.com/in/giordanmaniti/" target="_blank">
              <i className="fab fa-linkedin fa-2xl" />
            </a>
          </div>
        </span>
      </div>
    </footer>
  );
}

export default FooterAbout;
