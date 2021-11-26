import * as React from 'react'
import { graphql } from 'gatsby'
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'

import { Layout } from '../components/Layout'
import { Seo } from '../components/Seo'
import { RichText } from 'prismic-reactjs'
import { CustomLink } from '../utils/CustomLink'

const MyAccountPage = ({ data }) => {
  if (!data) return null
  const doc = data.prismicMyAccount.data

  return (
    <Layout>
      <Seo title="My Account" />
      <RichText render={doc.title.richText} serializeHyperlink={CustomLink} />
      <RichText
        render={doc.description.richText}
        serializeHyperlink={CustomLink}
      />
      <form action="?" method="post">
        <div className="field-container">
          <label htmlFor="first-name">First Name</label>
          <input type="text" name="first-name" id="first-name" />
        </div>
        <div className="field-container">
          <label htmlFor="first-name">Last Name</label>
          <input type="text" name="last-name" id="last-name" />
        </div>
      </form>
    </Layout>
  )
}

export const query = graphql`
  query MyAccountPage {
    prismicMyAccount {
      id
      data {
        description {
          richText
        }
        title {
          richText
        }
      }
    }
  }
`

export default withPrismicPreview(MyAccountPage)
