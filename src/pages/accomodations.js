import React from "react";
import { FormattedMessage, Link, useIntl } from "gatsby-plugin-intl";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Header from "../components/header";
import Image from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";

const AccomodationsPage = () => {
  const intl = useIntl();
  const foto = useStaticQuery(graphql`
    query {
      cam1: file(relativePath: { eq: "camera-1.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      cam2: file(relativePath: { eq: "camera-2.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      cam3: file(relativePath: { eq: "camera-3.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      cam4: file(relativePath: { eq: "camera-4.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      cam5: file(relativePath: { eq: "camera-5.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      cam6: file(relativePath: { eq: "camera-6.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      img2: file(relativePath: { eq: "salacomune.jpg" }) {
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
      <Header siteTitle={intl.formatMessage({ id: "accomo_title" })}></Header>
      <Layout>
        <div className="mdl-grid mdl-typography--body-2-force-preferred-font">
          <div className="mdl-cell mdl-cell--6-col mdl-cell--4-col-tablet mdl-card mdl-shadow--4dp">
            <div className="mdl-card__title">
              <h2 className="mdl-card__title-text">
                <FormattedMessage id="accomo_title1" />
              </h2>
            </div>
            <div className="mdl-grid">
              <div className="mdl-cell mdl-cell--6-col mdl-cell--12-col-phone mdl-cell--12-col-tablet mdl-cell--stretch mdl-card__media">
                <Image fluid={foto.cam1.childImageSharp.fluid} />
                <p>
                  <b>N. 1</b> Camera: 14,13 &#x33a1; - Bagno: 2,80 &#x33a1;
                </p>
              </div>
              <div className="mdl-cell mdl-cell--6-col mdl-cell--12-col-phone mdl-cell--12-col-tablet mdl-cell--stretch mdl-card__media">
                <Image fluid={foto.cam2.childImageSharp.fluid} />
                <p>
                  <b>N. 2</b> Camera: 14,13 &#x33a1; - Bagno: 2,80 &#x33a1;
                </p>
              </div>
              <div className="mdl-cell mdl-cell--6-col mdl-cell--12-col-phone mdl-cell--12-col-tablet mdl-cell--stretch mdl-card__media">
                <Image fluid={foto.cam3.childImageSharp.fluid} />
                <p>
                  <b>N. 3</b> Camera: 14,13 &#x33a1; - Bagno: 2,80 &#x33a1;
                </p>
              </div>
              <div className="mdl-cell mdl-cell--6-col mdl-cell--12-col-phone mdl-cell--12-col-tablet mdl-cell--stretch mdl-card__media">
                <Image fluid={foto.cam4.childImageSharp.fluid} />
                <p>
                  <b>N. 4</b> Camera: 14,13 &#x33a1; - Bagno: 2,80 &#x33a1;
                </p>
              </div>
              <div className="mdl-cell mdl-cell--6-col mdl-cell--12-col-phone mdl-cell--12-col-tablet mdl-cell--stretch mdl-card__media">
                <Image fluid={foto.cam5.childImageSharp.fluid} />
                <p>
                  <b>N. 5</b> Camera: 14,13 &#x33a1; - Bagno: 2,80 &#x33a1;
                </p>
              </div>
              <div className="mdl-cell mdl-cell--6-col mdl-cell--12-col-phone mdl-cell--12-col-tablet mdl-cell--stretch mdl-card__media">
                <Image fluid={foto.cam6.childImageSharp.fluid} />
                <p>
                  <b>N. 6</b> Camera: 14,13 &#x33a1; - Bagno: 2,80 &#x33a1;
                </p>
              </div>
            </div>
            <div className="mdl-card__supporting-text">
              <FormattedMessage id="accomo_body1" />
            </div>
          </div>
          <div className="mdl-cell mdl-cell--6-col mdl-cell--4-col-tablet mdl-card mdl-shadow--4dp">
            <div className="mdl-card__title">
              <h2 className="mdl-card__title-text">
                <FormattedMessage id="accomo_title2" />
              </h2>
            </div>
            <div className="mdl-card__media">
              <Image fluid={foto.img2.childImageSharp.fluid} />
            </div>
            <div className="mdl-card__supporting-text">
              <h4>
                <FormattedMessage id="accomo_body2_t1" />
              </h4>
              <FormattedMessage id="accomo_body2" />
              <h4>
                <FormattedMessage id="accomo_body2_t3" />
              </h4>
              <FormattedMessage id="accomo_body2_t4" />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default AccomodationsPage;
