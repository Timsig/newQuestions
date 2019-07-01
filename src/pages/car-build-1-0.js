import React from "react"
import Hotspot from "../components/hotspot"
import { Link } from "gatsby"

import Layout from "../components/layout"

const CarBuild = () => (
  <Layout headerImage="https://res.cloudinary.com/lwcqviihu/image/upload/v1561460138/Question-set/Car-build-1-0.jpg">
    <Link to="//driver1-questions">
      <Hotspot left={29} top={534} width={224} height={40} />
    </Link>
    <Link to="/car-build-1-0-b">
      <Hotspot left={31} top={387} width={120} height={39} />
    </Link>
  </Layout>
)

export default CarBuild
