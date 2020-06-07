import React from "react";
import { FormattedMessage, Link, useIntl } from "gatsby-plugin-intl";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Header from "../components/header";
import Image from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";
import Skype from "../images/skype-line.svg";
import Smart from "../images/smartphone-line.svg";
import Phone from "../images/phone-line.svg";
import Plane from "../images/send-plane-line.svg";
import Msg from "../images/messenger-line.svg";
import Maps from "../images/maps-globe.svg";

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
              <div className="card">
                <header className="card-header">
                  <p className="card-header-title has-text-grey">
                    <FormattedMessage id="info_title" />
                  </p>
                </header>
                <div className="card-image">
                  <figure className="image">
                    <Image fluid={images.img1.childImageSharp.fluid} />
                  </figure>
                </div>
                <div className="card-content">
                  <h1 className="is-size-5">
                    <FormattedMessage id="contacts_block1_body" />
                  </h1>
                  <article className="media">
                    <figure className="media-left">
                      <p className="image is-32x32"></p>
                    </figure>
                    <div className="media-content">
                      <div className="content">
                        <p>
                          <b>Agriturismo Aiole</b>
                          <br />
                          s.p. 22 della Grossola 53023 Castiglione d'Orcia
                          (Siena) ITALY
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="media">
                    <figure className="media-left">
                      <p className="image is-32x32">
                        <img src={Phone} alt="Phone icon" />
                      </p>
                    </figure>
                    <div className="media-content">
                      <div className="content">
                        <p>
                          <b>Telefono: </b>
                          <br />
                          +39 0577 887454
                        </p>
                      </div>
                    </div>
                    <div className="media-right">
                      <a
                        className="button is-primary"
                        href="call:+390577887454"
                      >
                        <img src={Phone} alt="Phone" />
                      </a>
                    </div>
                  </article>
                  <article className="media">
                    <figure className="media-left">
                      <p className="image is-32x32">
                        <img src={Plane} alt="Plane icon" />
                      </p>
                    </figure>
                    <div className="media-content">
                      <div className="content">
                        <p>
                          <b>E-Mail: </b>
                          <br />
                          aiole@agriturismo-aiole.com
                          <br />
                          agriturismoaiole@alice.it
                        </p>
                      </div>
                    </div>
                    <div className="media-right">
                      <a
                        className="button is-primary"
                        href="mailto:aiole@agriturismo-aiole.com"
                      >
                        <img src={Plane} alt="E-Mail" />
                      </a>
                    </div>
                  </article>
                  <article className="media">
                    <figure className="media-left">
                      <p className="image is-32x32">
                        <img src={Smart} alt="SMart icon" />
                      </p>
                    </figure>
                    <div className="media-content">
                      <div className="content">
                        <p>
                          <b>Mobile: </b>
                          <br />
                          +39 334 297 1968
                          <br />
                          +39 339 358 6429
                        </p>
                      </div>
                    </div>
                    <div className="media-right">
                      <a className="button is-primary" href="">
                        <img src={Msg} alt="Msg chat" />
                      </a>
                    </div>
                  </article>
                  <article className="media">
                    <figure className="media-left">
                      <p className="image is-32x32">
                        <img src={Skype} alt="Skype icon" />
                      </p>
                    </figure>
                    <div className="media-content">
                      <div className="content">
                        <p>
                          <b>Skype: </b>
                          <br />
                          agriturismo.aiole
                        </p>
                      </div>
                    </div>
                    <div className="media-right">
                      <a
                        className="button is-primary"
                        href="skype:agriturismo.aiole?chat"
                      >
                        <img src={Skype} alt="Skype chat" />
                      </a>
                    </div>
                  </article>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <header className="card-header">
                  <p className="card-header-title has-text-grey">
                    <FormattedMessage id="info_title" />
                  </p>
                </header>
                <div className="card-image">
                  <figure className="image">
                    <Image fluid={images.img2.childImageSharp.fluid} />
                  </figure>
                </div>
                <div className="card-content">
                  <h1 className="is-size-5">
                    <FormattedMessage id="howto_title" />
                  </h1>
                  <p>
                    <FormattedMessage id="howto1" />
                  </p>
                  <p>
                    <FormattedMessage id="howto2" />
                    <a
                      className="button is-primary"
                      href="https://goo.gl/maps/UHcYoUZDKX92"
                      target="_blank"
                    >
                      <img src={Maps} alt="Google Maps" />
                    </a>
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
