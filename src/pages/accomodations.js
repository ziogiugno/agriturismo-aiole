import React from "react";
import { FormattedMessage, Link, useIntl } from "gatsby-plugin-intl";
import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import Header from "../components/header";

const AccomodationsPage = () => {
  const intl = useIntl();
  return (
    <>
      <Header siteTitle={intl.formatMessage({ id: "accomo_title" })} />
      <Layout>
        <SEO
          lang={intl.locale}
          title={intl.formatMessage({ id: "accomo_title" })}
          keywords={[`gatsby`, `application`, `react`]}
        />
      </Layout>
    </>
  );
};

export default AccomodationsPage;
