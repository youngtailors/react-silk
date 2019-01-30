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
  Text,
} from 'react-silk-ui'
import {
  Button,
} from 'react-silk-ui'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Heading1>This is heading 1</Heading1>
      <Heading2>This is heading 2</Heading2>
      <Heading3>This is heading 3</Heading3>
      <Heading4>This is heading 4</Heading4>
      <Heading5>This is heading 5</Heading5>
      <Heading6>This is heading 6</Heading6>
      <Text>This is normal text</Text>

      <Button>I am a button</Button>
      <Button variant="secondary">I am a button</Button>
      <Button variant="danger">I am a button</Button>
      <Button variant="success">I am a button</Button>
      <Button variant="warning">I am a button</Button>
      <Button variant="info">I am a button</Button>
      <Button variant="light">I am a button</Button>
      <Button variant="dark">I am a button</Button>
      <Button variant="link">I am a button</Button>
    </div>
  </Layout>
)

export default IndexPage
