import React from "react"
import Hotspot from "../components/hotspot"
import { Link } from "gatsby"

import Layout from "../components/layout"

const CarBuild = () => (
  <Layout headerImage="https://res.cloudinary.com/lwcqviihu/image/upload/v1561460138/Question-set/Car-build-0-1.jpg">
    <Link to="/car-build-0-1-b">
      <Hotspot left={31} top={326} width={122} height={39} />
    </Link>
    <Link to="/driver2-questions">
      <Hotspot left={28} top={473} width={179} height={42} />
    </Link>
  </Layout>
)

export default CarBuild
