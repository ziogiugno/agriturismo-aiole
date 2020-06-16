import React from "react";
import { FormattedMessage, useIntl } from "gatsby-plugin-intl";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Header from "../components/header";
import Image from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";

const ProductsPage = () => {
  const intl = useIntl();
  const foto = useStaticQuery(graphql`
    query {
      banner: file(relativePath: { eq: "banner07.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img1: file(relativePath: { eq: "orto.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img2: file(relativePath: { eq: "prodotti.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <>
      <SEO
        lang={intl.locale}
        title={intl.formatMessage({ id: "products_title" })}
        keywords={[`gatsby`, `application`, `react`]}
      />
      <Header siteTitle={intl.formatMessage({ id: "products_title" })}></Header>
      <Layout>
        <div className="mdl-grid mdl-typography--body-2-force-preferred-font">
          <div className="mdl-cell mdl-cell--12-col">
            <Image fluid={foto.banner.childImageSharp.fluid} />
          </div>
          <div className="mdl-cell mdl-cell--6-col mdl-cell--4-col-tablet mdl-card mdl-shadow--4dp">
            <div className="mdl-card__title">
              <h2 className="mdl-card__title-text">
                <FormattedMessage id="products_block1_title" />
              </h2>
            </div>
            <div className="mdl-card__media">
              <Image fluid={foto.img1.childImageSharp.fluid} />
            </div>
            <div className="mdl-card__supporting-text">
              <FormattedMessage id="products_block1_body" />
            </div>
          </div>
          <div className="mdl-cell mdl-cell--6-col mdl-cell--4-col-tablet mdl-card mdl-shadow--4dp">
            <div className="mdl-card__title">
              <h2 className="mdl-card__title-text">
                <FormattedMessage id="products_block2_title" />
              </h2>
            </div>
            <div className="mdl-card__media">
              <Image fluid={foto.img2.childImageSharp.fluid} />
            </div>
            <div className="mdl-card__supporting-text">
              <FormattedMessage id="products_block2_body" />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ProductsPage;
