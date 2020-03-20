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
        <h2>
          <FormattedMessage id="index_block1_title" />
        </h2>
        <p>
          <FormattedMessage id="index_block1_body" />
        </p>
        <h2>
          <FormattedMessage id="index_block2_title" />
        </h2>
        <p>
          <FormattedMessage id="index_block2_body" />
        </p>
      </Layout>
    </>
  );
};

export default IndexPage;
