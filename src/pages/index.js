import React from "react";
import { FormattedMessage, Link, useIntl } from "gatsby-plugin-intl";
import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import Header from "../components//header";

const IndexPage = () => {
  const intl = useIntl();
  return (
    <>
      <Header siteTitle={intl.formatMessage({ id: "index_title" })} />
      <Layout>
        <SEO
          lang={intl.locale}
          title={intl.formatMessage({ id: "index_title" })}
          keywords={[`gatsby`, `application`, `react`]}
        />
        <div class="columns">
          <div class="column">
            <div class="card">
              <header class="card-header">
                <p class="card-header-title">
                  <FormattedMessage id="index_block1_title" />
                </p>
              </header>
              <div class="card-image">
                <figure class="image is-4by3">
                  <img
                    src="https://bulma.io/images/placeholders/256x256.png"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div class="card-content">
                <p class="section">
                  <FormattedMessage id="index_block1_body" />
                </p>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <header class="card-header">
                <p class="card-header-title">
                  <FormattedMessage id="index_block2_title" />
                </p>
              </header>
              <div class="card-image">
                <figure class="image is-4by3">
                  <img src="images/piscina.jpg" alt="" />
                </figure>
              </div>
              <div class="card-content">
                <p class="section">
                  <FormattedMessage id="index_block2_body" />
                </p>
              </div>
            </div>{" "}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default IndexPage;
