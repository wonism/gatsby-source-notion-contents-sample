import React from 'react';
import PropTypes from 'prop-types';
import { Link, useStaticQuery, graphql } from 'gatsby';

import './layout.css';

const Layout = ({ children }) => {
  const notions = useStaticQuery(graphql`
    query NotionContents {
      allNotionContent (filter: { contentType: { eq: "NotionContent" } }) {
        edges {
          node {
            id
            internal {
              description
            }
          }
        }
      }
    }
  `);

  return (
    <>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <nav>
          <ul>
            {notions.allNotionContent.edges.map(({ node: { id, internal: { description: title } } }) => (
              <li key={id}>
                <Link to={`/${id}`}>
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
