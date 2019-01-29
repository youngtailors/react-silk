import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Text } from 'react-silk'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Heading1>This is heading 1</Heading1>
      <Heading2>This is heading 1</Heading2>
      <Heading3>This is heading 1</Heading3>
      <Heading4>This is heading 1</Heading4>
      <Heading5>This is heading 1</Heading5>
      <Heading6>This is heading 1</Heading6>
      <Text>This is normal text</Text>
      
    </div>
  </Layout>
)

export default IndexPage
