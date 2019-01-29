import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import { Heading } from 'react-silk'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Heading>Hi people</Heading>
    <p>Welcome to React Silk site.</p>
  </Layout>
)

export default IndexPage
