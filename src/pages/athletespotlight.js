import React from "react"


import Layout from "../components/layout"
import Thawk from "../components/thawk"
import SEO from "../components/seo"

const AthleteSpotLightPage = () => (
  <Layout>
    <SEO title="About" />
    <h1 style={{ color: "red"}}>Athlete Spotlight</h1>
    <p>This month's stand out athlete is Tony Hawk</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Thawk />
    </div>
  
  </Layout>
)

export default AthleteSpotLightPage
