import React from "react";
import { FormattedMessage, useIntl } from "gatsby-plugin-intl";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Header from "../components/header";
import Image from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";

const ProductsPage = () => {
  const intl = useIntl();
  const orto = useStaticQuery(graphql`
    query OrtoQuery {
      file(relativePath: { eq: "orto.jpg" }) {
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
      <Header siteTitle={intl.formatMessage({ id: "products_title" })} />
      <Layout>
        <SEO
          lang={intl.locale}
          title={intl.formatMessage({ id: "products_title" })}
          keywords={[`gatsby`, `application`, `react`]}
        />
        <div className="columns">
          <div className="column">
            <h2 className="is-size-3">
              <FormattedMessage id="products_block1_title" />
            </h2>
            <p className="section">
              <Image fluid={orto.file.childImageSharp.fluid} />
              <FormattedMessage id="products_block1_body" />
            </p>
          </div>
          <div className="column">
            <h2 className="is-size-3">
              <FormattedMessage id="products_block2_title" />
            </h2>
            <p className="section">
              <Image fluid={orto.file.childImageSharp.fluid} />
              <FormattedMessage id="products_block2_body" />
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ProductsPage;
