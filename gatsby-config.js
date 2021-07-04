module.exports = {
  siteMetadata: {
    title: "sahilpurav",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-emotion",
    "gatsby-plugin-react-helmet",
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
