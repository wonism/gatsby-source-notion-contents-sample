module.exports = {
  siteMetadata: {
    title: `Gatsby Source Notion`,
    description: `Get source from notion.`,
    author: `@wonism`,
  },
  plugins: [
    {
      resolve: 'gatsby-source-notion-contents',
      options: {
        token: process.env.NOTION_TOKEN,
      }
    }
  ],
}
