import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Skateboard from "../components/image"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>About Me</h1>
    <p>My philosophy on life is YOLO</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Skateboard />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default AboutPage
