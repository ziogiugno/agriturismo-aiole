import React from "react";
import { injectIntl, Link, FormattedMessage } from "gatsby-plugin-intl";
import "./layout.css";

const IndexPage = ({ intl }) => {
  return (
    <Layout>
      <SEO title={intl.formatMessage({ id: "title" })} />
      <Link to="/page-2/">{intl.formatMessage({ id: "go_page2" })}</Link>
    </Layout>
  );
};
export default injectIntl(IndexPage);
