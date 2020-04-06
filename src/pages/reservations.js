import React from "react";
import { FormattedMessage, Link, useIntl } from "gatsby-plugin-intl";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Header from "../components/header";
import Image from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";

const ReservationsPage = () => {
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

  return (
    <>
      <Header siteTitle={intl.formatMessage({ id: "index_title" })} />
      <Layout>
        <SEO
          lang={intl.locale}
          title={intl.formatMessage({ id: "reserve_title" })}
          keywords={[`gatsby`, `application`, `react`]}
        />
      </Layout>
    </>
  );
};

export default ReservationsPage;
