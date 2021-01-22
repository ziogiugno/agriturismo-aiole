import React from "react";
import { FormattedMessage, useIntl } from "gatsby-plugin-intl";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Header from "../components/header";
import Image from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";

const IndexPage = () => {
  const intl = useIntl();
  const foto = useStaticQuery(graphql`
    query {
      img1: file(relativePath: { eq: "piscina.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      img2: file(relativePath: { eq: "casale2.jpg" }) {
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
        title={intl.formatMessage({ id: "index_title" })}
        keywords={[`gatsby`, `application`, `react`]}
      />
      <Header siteTitle={intl.formatMessage({ id: "index_title" })}></Header>
      <Layout>
        <div className="mdl-grid mdl-typography--body-2-force-preferred-font">
          <div className="mdl-cell mdl-cell--6-col mdl-cell--4-col-tablet mdl-card mdl-shadow--4dp">
            <div className="mdl-card__title">
              <h2 className="mdl-card__title-text">
                <FormattedMessage id="index_block1_title" />
              </h2>
            </div>
            <div className="mdl-card__media">
              <Image fluid={foto.img1.childImageSharp.fluid} />
            </div>
            <div className="mdl-card__supporting-text">
              <FormattedMessage id="index_block1_body" />
            </div>
          </div>
          <div className="mdl-cell mdl-cell--6-col mdl-cell--4-col-tablet mdl-card mdl-shadow--4dp">
            <div className="mdl-card__title">
              <h2 className="mdl-card__title-text">
                <FormattedMessage id="index_block2_title" />
              </h2>
            </div>
            <div className="mdl-card__media">
              <Image fluid={foto.img2.childImageSharp.fluid} />
            </div>
            <div className="mdl-card__supporting-text">
              <FormattedMessage id="index_block2_body" />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default IndexPage;
