import React from "react"
import Hotspot from "../components/hotspot"
import { Link } from "gatsby"

import Layout from "../components/layout"

const CarBuild = () => (
  <Layout headerImage="https://res.cloudinary.com/lwcqviihu/image/upload/v1562790817/Question-set/Car-build-1a-1.jpg">
    <Link to="/driver2-questions">
      <Hotspot left={31} top={676} width={178} height={39} />
    </Link>
    <Link to="/car-build-1a-1b">
      <Hotspot left={31} top={527} width={120} height={39} />
    </Link>
    

  </Layout>
)

export default CarBuild
