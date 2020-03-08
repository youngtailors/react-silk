import React from 'react'
import Layout from '../../components/Layout'
import SEO from '../../components/seo'
import Anchors from '../../components/Anchors'

interface ComponentsPageProps {
  children: React.ReactNode
}
const ComponentsPage: React.FunctionComponent<ComponentsPageProps> = ({
  children,
}: ComponentsPageProps) => (
  <Layout>
    <SEO title="Components" keywords={[`gatsby`, `application`, `react`]} />
    <div className="row">
      <div className="col-md-9">{children}</div>
      <div className="col-md-3">
        <Anchors />
      </div>
    </div>
  </Layout>
)

export default ComponentsPage
