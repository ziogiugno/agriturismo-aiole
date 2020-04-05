import React from "react";
import { FormattedMessage, useIntl } from "gatsby-plugin-intl";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Header from "../components/header";
import Image from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";

const ProductsPage = () => {
  const intl = useIntl();
  const images = useStaticQuery(graphql`
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
  console.log(images);
  return (
    <>
      <Header siteTitle={intl.formatMessage({ id: "products_title" })} />
      <Layout>
        <SEO
          lang={intl.locale}
          title={intl.formatMessage({ id: "products_title" })}
          keywords={[`gatsby`, `application`, `react`]}
        />
        <section className="hero">
          <Image fluid={images.banner.childImageSharp.fluid} />
        </section>
        <div className="columns">
          <div className="column">
            <h2 className="is-size-3">
              <FormattedMessage id="products_block1_title" />
            </h2>
            <Image fluid={images.img1.childImageSharp.fluid} />
            <p className="section">
              <FormattedMessage id="products_block1_body" />
            </p>
          </div>
          <div className="column">
            <h2 className="is-size-3">
              <FormattedMessage id="products_block2_title" />
            </h2>
            <Image fluid={images.img2.childImageSharp.fluid} />
            <p className="section">
              <FormattedMessage id="products_block2_body" />
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ProductsPage;
