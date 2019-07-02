import React from "react"
import Hotspot from "../components/hotspot"
import { Link } from "gatsby"

import Layout from "../components/layout"

const CarBuild = () => (
  <Layout headerImage="https://res.cloudinary.com/lwcqviihu/image/upload/v1562058974/Question-set/Car-build-Ba-2.jpg">
    <Link to="/quote-page">
      <Hotspot left={170} top={1106} width={138} height={48} />
    </Link>
  </Layout>
)

export default CarBuild
