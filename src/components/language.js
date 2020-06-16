import React from "react";
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl";
import Img from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";

const languageName = {
  de: "Deutsch",
  en: "English",
  fr: "Français",
  it: "Italiano",
};

const Language = () => {
  const data = useStaticQuery(graphql`
    query LanguageQuery {
      itFlag: file(relativePath: { eq: "italy.png" }) {
        childImageSharp {
          fixed(width: 40, height: 22) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      frFlag: file(relativePath: { eq: "france.png" }) {
        childImageSharp {
          fixed(width: 40, height: 22) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      enFlag: file(relativePath: { eq: "great_britain.png" }) {
        childImageSharp {
          fixed(width: 40, height: 22) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      deFlag: file(relativePath: { eq: "germany.png" }) {
        childImageSharp {
          fixed(width: 40, height: 22) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <div>
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) => (
          <>
            <a key="de" onClick={() => changeLocale("de")}>
              <Img fixed={data.deFlag.childImageSharp.fixed} />
            </a>
            <a key="en" onClick={() => changeLocale("en")}>
              <Img fixed={data.enFlag.childImageSharp.fixed} />
            </a>
            <a key="fr" onClick={() => changeLocale("fr")}>
              <Img fixed={data.frFlag.childImageSharp.fixed} />
            </a>
            <a key="it" onClick={() => changeLocale("it")}>
              <Img fixed={data.itFlag.childImageSharp.fixed} />
            </a>
          </>
        )}
      </IntlContextConsumer>
    </div>
  );
};

export default Language;
