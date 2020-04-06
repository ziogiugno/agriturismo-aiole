import React from "react";
import { FormattedMessage, Link, useIntl } from "gatsby-plugin-intl";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Header from "../components/header";
import Image from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";

const ContactsPage = () => {
  const intl = useIntl();
  const images = useStaticQuery(graphql`
    query {
      banner: file(relativePath: { eq: "banner05.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img1: file(relativePath: { eq: "paolonoella.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img2: file(relativePath: { eq: "cani.jpg" }) {
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
      <Header siteTitle={intl.formatMessage({ id: "contacts_title" })} />
      <Layout>
        <SEO
          lang={intl.locale}
          title={intl.formatMessage({ id: "contacts_title" })}
          keywords={[`gatsby`, `application`, `react`]}
        />
        <div className="container">
          {/*           <section className="hero">
            <Image fluid={images.banner.childImageSharp.fluid} />
          </section> */}
          <div className="columns">
            <div className="column">
              <div class="card">
                <header class="card-header">
                  <p class="card-header-title">
                    <FormattedMessage id="info_title" />
                  </p>
                </header>
                <div class="card-image">
                  <figure class="image">
                    <Image fluid={images.img1.childImageSharp.fluid} />
                  </figure>
                </div>
                <div class="card-content">
                  <p class="section">
                    <FormattedMessage id="contacs_block1_body" />
                  </p>
                </div>
              </div>
            </div>
            <div className="column">
              <div class="card">
                <header class="card-header">
                  <p class="card-header-title">
                    <FormattedMessage id="howto_title" />
                  </p>
                </header>
                <div class="card-image">
                  <figure class="image">
                    <Image fluid={images.img2.childImageSharp.fluid} />
                  </figure>
                </div>
                <div class="card-content">
                  <p class="section">
                    <FormattedMessage id="contacs_block2_body" />
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

export default ContactsPage;
