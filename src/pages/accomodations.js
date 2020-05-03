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
      <Header siteTitle={intl.formatMessage({ id: "accomo_title" })} />
      <Layout>
        <SEO
          lang={intl.locale}
          title={intl.formatMessage({ id: "accomo_title" })}
          keywords={[`gatsby`, `application`, `react`]}
        />
        <div className="container">
          <div className="columns">
            <div className="column">
              <div className="card">
                <header className="card-header">
                  <p className="card-header-title has-text-grey">
                    <FormattedMessage id="accomo_title1" />
                  </p>
                </header>
                <div className="card-content">
                  <p className="has-background-primary has-text-weight-semibold">
                    <b>N. 1</b>
                    <br></br>
                    <FormattedMessage id="accomo_room1" />
                  </p>
                  <figure className="image is-paddingless margin-small">
                    <Image fluid={foto.cam1.childImageSharp.fluid} />
                  </figure>
                  <p className="has-background-primary has-text-weight-semibold">
                    <b>N. 2</b>
                    <br></br>
                    <FormattedMessage id="accomo_room2" />
                  </p>
                  <figure className="image is-paddingless margin-small">
                    <Image fluid={foto.cam2.childImageSharp.fluid} />
                  </figure>
                  <p className="has-background-primary has-text-weight-semibold">
                    <b>N. 3</b>
                    <br></br>
                    <FormattedMessage id="accomo_room3" />
                  </p>
                  <figure className="image is-paddingless margin-small">
                    <Image fluid={foto.cam3.childImageSharp.fluid} />
                  </figure>
                  <p className="has-background-primary has-text-weight-semibold">
                    <b>N. 4</b>
                    <br></br>
                    <FormattedMessage id="accomo_room4" />
                  </p>
                  <figure className="image is-paddingless margin-small">
                    <Image fluid={foto.cam4.childImageSharp.fluid} />
                  </figure>
                  <p className="has-background-primary has-text-weight-semibold">
                    <b>N. 5</b>
                    <br></br>
                    <FormattedMessage id="accomo_room5" />
                  </p>
                  <figure className="image is-paddingless margin-small">
                    <Image fluid={foto.cam5.childImageSharp.fluid} />
                  </figure>
                  <p className="has-background-primary has-text-weight-semibold">
                    <b>N. 6</b>
                    <br></br>
                    <FormattedMessage id="accomo_room6" />
                  </p>
                  <figure className="image is-paddingless margin-small">
                    <Image fluid={foto.cam6.childImageSharp.fluid} />
                  </figure>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <header className="card-header">
                  <p className="card-header-title has-text-grey">
                    <FormattedMessage id="accomo_title2" />
                  </p>
                </header>
                <div className="card-image">
                  <figure className="image">
                    <Image fluid={foto.img2.childImageSharp.fluid} />
                  </figure>
                </div>
                <div className="card-content">
                  <p className="section">
                    <FormattedMessage id="accomo_body2" />
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

export default AccomodationsPage;
