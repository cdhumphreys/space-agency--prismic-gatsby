// gatsby-ssr.js and gatsby-browser.js files

import * as React from 'react'
import {
  PrismicPreviewProvider,
  componentResolverFromMap,
} from 'gatsby-plugin-prismic-previews'

// import 'gatsby-plugin-prismic-previews/dist/styles.css'

import './src/styles/reset.css'
import './src/styles/common.css'
import './src/styles/style.css'
import { linkResolver } from './src/utils/LinkResolver'

import HomeTemplate from './src/pages/index'
import PageTemplate from './src/pages/{PrismicPage.url}'
import MyAccount from './src/pages/my-account'

export const wrapRootElement = ({ element }) => (
  <PrismicPreviewProvider
    repositoryConfigs={[
      {
        repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
        linkResolver,
        componentResolver: componentResolverFromMap({
          homepage: HomeTemplate,
          page: PageTemplate,
          my_account: MyAccount,
        }),
      },
    ]}
  >
    {element}
  </PrismicPreviewProvider>
)
