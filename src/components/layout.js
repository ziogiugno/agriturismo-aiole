import React from "react";
import PropTypes from "prop-types";
import { injectIntl } from "gatsby-plugin-intl";
import "./aiole.scss";

const Layout = ({ children, intl }) => {
  return (
    <div>
      <main className="">{children}</main>
      <footer className="footer level">
        <div class="level-left">
          © {new Date().getFullYear()}, Built with
          {` `}
          <a className="link" target="_blank" href="https://www.gatsbyjs.org">
            Gatsby
          </a>
        </div>
        <div class="level-right">
          <div
            class="fb-page"
            data-href="https://www.facebook.com/Agriturismo-Aiole-439576552768282/"
            data-tabs="timeline"
            data-width="130"
            data-height="70"
            data-small-header="true"
            data-adapt-container-width="true"
            data-hide-cover="false"
            data-show-facepile="false"
          >
            <blockquote
              cite="https://www.facebook.com/Agriturismo-Aiole-439576552768282/"
              class="fb-xfbml-parse-ignore"
            >
              <a href="https://www.facebook.com/Agriturismo-Aiole-439576552768282/">
                Agrit. Aiole
              </a>
            </blockquote>
          </div>
          {/*           <div id="TA_cdsratingsonlynarrow440" class="TA_cdsratingsonlynarrow">
            <ul id="ZknVvg" class="TA_links W3twVeEH6">
              <li id="mf7QRMQj" class="7rM7zl1gd">
                <a target="_blank" href="https://www.tripadvisor.it/">
                  <img
                    src="https://www.tripadvisor.it/img/cdsi/img2/branding/tripadvisor_logo_transp_340x80-18034-2.png"
                    alt="TripAdvisor"
                  />
                </a>
              </li>
            </ul>
          </div>
          <script src="https://www.jscache.com/wejs?wtype=cdsratingsonlynarrow&amp;uniq=440&amp;locationId=2334152&amp;lang=it&amp;border=true&amp;display_version=2"></script>
 */}{" "}
        </div>
      </footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default injectIntl(Layout);
