import * as React from 'react'
import { withPrismicUnpublishedPreview } from 'gatsby-plugin-prismic-previews'

import { Layout } from '../components/Layout'
import { Seo } from '../components/Seo'

const NotFoundPage = () => (
  <Layout>
    <Seo title="Not found" />
    <div className="container">
      <h1>Oh no!</h1>
      <h3>We can't seem to find the page you're looking for.</h3>
      <br />
    </div>
  </Layout>
)

// export default withPrismicUnpublishedPreview(NotFoundPage, [
//   {
//     repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
//     linkResolver,
//     componentResolver: componentResolverFromMap({
//       homepage: HomeTemplate,
//       page: PageTemplate,
//     }),
//   },
// ])

export default withPrismicUnpublishedPreview(NotFoundPage)
