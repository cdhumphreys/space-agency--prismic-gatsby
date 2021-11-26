import * as React from 'react'

import { graphql } from 'gatsby'
import { RichText } from 'prismic-reactjs'
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'

import { Layout } from '../components/Layout'
import { Seo } from '../components/Seo'
import { HomepageBanner } from '../components/HomepageBanner'
import { SliceZone } from '../components/SliceZone'
import { linkResolver } from '../utils/LinkResolver'

const Homepage = ({ data }) => {
  if (!data) return null

  const doc = data.prismicHomepage.data

  return (
    <Layout isHomepage>
      <Seo title="Home" />
      <HomepageBanner
        title={RichText.asText(doc.banner_title.richText)}
        description={RichText.asText(doc.banner_description.richText)}
        linkUrl={doc.banner_link.url}
        linkLabel={RichText.asText(doc.banner_link_label.richText)}
        backgroundUrl={doc.banner_background.url}
      />
      <SliceZone sliceZone={doc.body} />
    </Layout>
  )
}

export const query = graphql`
  query Homepage {
    prismicHomepage {
      _previewable
      data {
        banner_title {
          richText
        }
        banner_description {
          richText
        }
        banner_link {
          url
          type
          uid
        }
        banner_link_label {
          richText
        }
        banner_background {
          url
        }
        body {
          ... on PrismicSliceType {
            slice_type
          }
          ...HomepageDataBodyText
          ...HomepageDataBodyQuote
          ...HomepageDataBodyFullWidthImage
          ...HomepageDataBodyImageGallery
          ...HomepageDataBodyImageHighlight
        }
      }
    }
  }
`
export default withPrismicPreview(Homepage)
