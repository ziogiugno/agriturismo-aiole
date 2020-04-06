import React from "react";
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl";
import Image from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";

const languageName = {
  de: "Deutsch",
  en: "English",
  fr: "Français",
  it: "Italiano",
};

const Language = () => {
  const images = useStaticQuery(graphql`
    query {
      de: file(relativePath: { eq: "banner07.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      en: file(relativePath: { eq: "orto.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      fr: file(relativePath: { eq: "prodotti.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      it: file(relativePath: { eq: "prodotti.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <div>
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) =>
          languages.map((language) => (
            <a key={language} onClick={() => changeLocale(language)}>
              <Image fluid={"images." + language + ".childImageSharp.fluid"} />
            </a>
          ))
        }
      </IntlContextConsumer>
    </div>
  );
};

export default Language;
