import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import FPOvideo from "../images/fpo.mp4"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Hi people</h1>
    <video controls autoPlay="true" playsInline muted>
      <source src={FPOvideo} type="video/mp4" />
    </video>
  </Layout>
)

export default IndexPage
