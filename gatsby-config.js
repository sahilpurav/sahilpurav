module.exports = {
  siteMetadata: {
    title: "sahilpurav",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-SJ3187ZZJ0"],
        pluginConfig: {
          head: true,
        },
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-emotion",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-fontawesome-css",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sahil Purav - Associate Director, Programmer, Leader, Mentor, Open Source Contributor`,
        short_name: `Sahil`,
        start_url: `/`,
        background_color: `#D1D5DB`,
        theme_color: `#E5E7EB`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
