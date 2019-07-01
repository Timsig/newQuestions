import React from "react"
import Hotspot from "../components/hotspot"
import { Link } from "gatsby"

import Layout from "../components/layout"

const CarBuild = () => (
  <Layout headerImage="https://res.cloudinary.com/lwcqviihu/image/upload/v1561460138/Question-set/Car-build-1-1-b.jpg">
    <Link to="/driver2-questions">
      <Hotspot left={29} top={598} width={224} height={40} />
    </Link>
    <Link to="/car2-questions">
      <Hotspot left={160} top={452} width={130} height={39} />
    </Link>
  </Layout>
)

export default CarBuild
