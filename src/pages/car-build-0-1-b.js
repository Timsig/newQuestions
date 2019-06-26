import React from "react"
import Hotspot from "../components/hotspot"
import { Link } from "gatsby"

import Layout from "../components/layout"

const CarBuild = () => (
  <Layout headerImage="https://res.cloudinary.com/lwcqviihu/image/upload/v1561460138/Question-set/Car-build-0-1-b.jpg">
    <Link to="/car-questions">
      <Hotspot left={160} top={326} width={131} height={42} />
    </Link>
    <Link to="/policy-holder">
      <Hotspot left={28} top={473} width={179} height={42} />
    </Link>
  </Layout>
)

export default CarBuild
