import React from "react"
import Hotspot from "../components/hotspot"
import { Link } from "gatsby"

import Layout from "../components/layout"

const CarBuild = () => (
  <Layout headerImage="https://res.cloudinary.com/lwcqviihu/image/upload/v1562058790/Question-set/Car-build-1a-2.jpg">
    <Link to="/car-build-1a-2b">
      <Hotspot left={32} top={593} width={119} height={40} />
    </Link>
  </Layout>
)

export default CarBuild
