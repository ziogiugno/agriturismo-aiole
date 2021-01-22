import React from "react";
import { FormattedMessage, useIntl } from "gatsby-plugin-intl";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Header from "../components/header";
import Image from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";

const ReservationsPage = () => {
  const intl = useIntl();
  const foto = useStaticQuery(graphql`
    query {
      img1: file(relativePath: { eq: "aiole.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      img2: file(relativePath: { eq: "tramonto.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `);

  return (
    <>
      <SEO
        lang={intl.locale}
        title={intl.formatMessage({ id: "accomo_title" })}
        keywords={[`gatsby`, `application`, `react`]}
      />
      <Header siteTitle={intl.formatMessage({ id: "reserve_title" })}></Header>
      <Layout>
        <div className="mdl-grid mdl-typography--body-2-force-preferred-font">
          <div className="mdl-cell mdl-cell--6-col mdl-cell--4-col-tablet mdl-card mdl-shadow--4dp">
            <div className="mdl-card__title">
              <h2 className="mdl-card__title-text">
                <FormattedMessage id="reservations_block1_title" />
              </h2>
            </div>
            <div className="mdl-card__media">
              <Image fluid={foto.img1.childImageSharp.fluid} />
            </div>
            <div className="mdl-card__supporting-text">
              <h4>
                <FormattedMessage id="reservations_block1_body" />
              </h4>
              <ul className="mdl-list">
                <li className="mdl-list__item mdl-list__item--three-line">
                  <span className="mdl-list__item-primary-content">
                    <span>
                      <FormattedMessage id="reservations_block1_txt1" />
                    </span>
                    <span className="mdl-list__item-text-body">
                      <a
                        className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
                        href="contacts.html"
                        hreflang="it"
                      >
                        CONTATTACI!
                      </a>
                    </span>
                  </span>
                </li>
                <li className="mdl-list__item mdl-list__item--three-line">
                  <span className="mdl-list__item-primary-content">
                    <span>
                      <FormattedMessage id="reservations_block1_txt2" />
                    </span>
                    <span className="mdl-list__item-text-body">
                      <a
                        className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
                        href="contacts.html"
                        hreflang="it"
                      >
                        CONTATTACI!
                      </a>
                    </span>
                  </span>
                </li>
                <li className="mdl-list__item mdl-list__item--three-line">
                  <span className="mdl-list__item-primary-content">
                    <span>
                      <FormattedMessage id="reservations_block1_txt3" />
                    </span>
                    <span className="mdl-list__item-text-body">
                      <a
                        className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
                        href="contacts.html"
                        hreflang="it"
                      >
                        CONTATTACI!
                      </a>
                    </span>
                  </span>
                </li>
                <li className="mdl-list__item mdl-list__item--three-line">
                  <span className="mdl-list__item-primary-content">
                    <span>
                      <FormattedMessage id="reservations_block1_txt4" />
                    </span>
                    <span className="mdl-list__item-text-body">
                      <a
                        className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
                        href="contacts.html"
                        hreflang="it"
                      >
                        CONTATTACI!
                      </a>
                    </span>
                  </span>
                </li>
              </ul>
              <h4>
                <FormattedMessage id="reservations_block1_txt5" />
              </h4>
              <h4>
                <FormattedMessage id="reservations_block1_txt6" />
              </h4>
            </div>
          </div>
          <div className="mdl-cell mdl-cell--6-col mdl-cell--4-col-tablet mdl-card mdl-shadow--4dp">
            <div className="mdl-card__title">
              <h2 className="mdl-card__title-text">
                <FormattedMessage id="reservations_block2_title" />
              </h2>
            </div>
            <div className="mdl-card__media">
              <Image fluid={foto.img2.childImageSharp.fluid} />
            </div>
            <div className="mdl-card__supporting-text">
              <FormattedMessage id="reservations_block2_body" />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ReservationsPage;
