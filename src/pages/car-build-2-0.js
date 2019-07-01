import React from "react"
import Hotspot from "../components/hotspot"
import { Link } from "gatsby"

import Layout from "../components/layout"

const CarBuild = () => (
  <Layout headerImage="https://res.cloudinary.com/lwcqviihu/image/upload/v1561713122/Question-set/Car-build-2-0.jpg">
    <Link to="/driver1-questions">
      <Hotspot left={31} top={667} width={222} height={39} />
    </Link>
    {/* <Link to="/car-build-2-1">
      <Hotspot left={31} top={416} width={120} height={39} />
    </Link> */}
  </Layout>
)

export default CarBuild
