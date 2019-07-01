import React from "react"
import Hotspot from "../components/hotspot"
import { Link } from "gatsby"

import Layout from "../components/layout"

const CarBuild = () => (
  <Layout headerImage="https://res.cloudinary.com/lwcqviihu/image/upload/v1561460138/Question-set/Car-build-1-1.jpg">
    <Link to="/driver2-questions">
      <Hotspot left={31} top={598} width={222} height={39} />
    </Link>
    <Link to="/car-build-1-1-b">
      <Hotspot left={31} top={452} width={120} height={39} />
    </Link>
  </Layout>
)

export default CarBuild
