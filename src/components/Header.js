import * as React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { RichText } from 'prismic-reactjs'

export const Header = ({ isHomepage }) => {
  const query = useStaticQuery(graphql`
    {
      prismicNavigation {
        data {
          top_navigation {
            link {
              url
            }
            link_label {
              richText
            }
          }
        }
      }
    }
  `)
  const queryData = query.prismicNavigation.data
  const navs = queryData.top_navigation || []
  const homepageClass = isHomepage ? 'homepage-header' : ''
  return (
    <header className={`site-header ${homepageClass}`}>
      <Link to="/">
        <div className="logo">Example Site</div>
      </Link>
      <nav>
        <ul>
          {navs.map((nav, idx) => {
            const { link, link_label } = nav
            return (
              <li key={`link-${idx}`}>
                <Link to={link.url}>
                  {RichText.asText(link_label.richText)}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}
