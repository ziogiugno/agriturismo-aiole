module.exports = {
  siteMetadata: {
    site_url: "https://www.agriturismo-aiole.com",
    title: "Agriturismo Aiole",
    description: "Val D'Orcia Bed and Breakfast",
    author: "Ziogiugno"
  },
  plugins: [
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        // language JSON resource path
        path: `${__dirname}/src/intl`,
        // supported language
        languages: [`it`, `en`, `fr`, `de`],
        // language file path
        defaultLanguage: `it`,
        // option to redirect to `/ko` when connecting `/`
        redirect: true
      }
    },
    `gatsby-plugin-sass`,
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-netlify",
    "gatsby-plugin-catch-links",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["Cairo", "Roboto"]
      }
    } /*,
    {
      resolve: "gatsby-plugin-canonical-urls",
      options: {
        siteUrl: config.url
      }
    }  ,
		{
			resolve: 'gatsby-plugin-google-analytics',
			options: {
				trackingId: config.googleAnalyticsID,
				head: true,
			},
		},
		{
			resolve: 'gatsby-plugin-nprogress',
			options: {
				color: config.themeColor,
				showSpinner: false,
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'img',
				path: `${__dirname}/src/images/`
			}
		}, 
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: 'Gatsby',
				short_name: 'Gatsby',
				start_url: '/',
				background_color: config.backgroundColor,
				theme_color: config.themeColor,
				display: 'minimal-ui',
				icons: [
					{
						src: '/favicon/logo-192x192.png',
						sizes: '192x192',
						type: 'image/png',
					},
					{
						src: '/favicon/logo-512x512.png',
						sizes: '512x512',
						type: 'image/png',
					},
				],
			},
		},*/
    // 'gatsby-plugin-offline'
  ]
};
