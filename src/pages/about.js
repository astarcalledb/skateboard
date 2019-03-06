import React from "react"


import Layout from "../components/layout"
import Skateboard from "../components/image"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <h1 style={{ color: "red"}}>About Me</h1>
    <p>My philosophy on life is YOLO</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Skateboard />
    </div>
  
  </Layout>
)

export default AboutPage
