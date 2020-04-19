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

  console.log(foto);

  return (
    <>
      <Header siteTitle={intl.formatMessage({ id: "index_title" })}></Header>
      <Layout>
        <SEO
          lang={intl.locale}
          title={intl.formatMessage({ id: "index_title" })}
          keywords={[`gatsby`, `application`, `react`]}
        />
        <div className="container">
          <div className="columns">
            <div className="column">
              <div className="card">
                <header className="card-header">
                  <p className="card-header-title">
                    <FormattedMessage id="index_block1_title" />
                  </p>
                </header>
                <div className="card-image">
                  <figure className="image">
                    <Image fluid={foto.img1.childImageSharp.fluid} />
                  </figure>
                </div>
                <div className="card-content">
                  <p className="section">
                    <FormattedMessage id="index_block1_body" />
                  </p>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <header className="card-header">
                  <p className="card-header-title">
                    <FormattedMessage id="index_block2_title" />
                  </p>
                </header>
                <div className="card-image">
                  <figure className="image">
                    <Image fluid={foto.img2.childImageSharp.fluid} />
                  </figure>
                </div>
                <div className="card-content">
                  <p className="section">
                    <FormattedMessage id="index_block2_body" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default IndexPage;
