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
            <h2 class="is-size-3">
              <FormattedMessage id="index_block1_title" />
            </h2>
            <p class="section">
              <FormattedMessage id="index_block1_body" />
            </p>
          </div>
          <div class="column">
            <h2 class="is-size-3">
              <FormattedMessage id="index_block2_title" />
            </h2>
            <p class="section">
              <FormattedMessage id="index_block2_body" />
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default IndexPage;
