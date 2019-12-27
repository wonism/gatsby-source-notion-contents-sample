import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

const Notion = ({ data: { notion } }) => {
  const content = notion.internal.content;

  return (
    <Layout>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </Layout>
  );
};

export default Notion;

export const pageQuery = graphql`
  query NotionByPath($id: String!) {
    notion: notionContent (id: { eq: $id }) {
      id
      internal {
        content
        description
      }
    }
  }
`;
