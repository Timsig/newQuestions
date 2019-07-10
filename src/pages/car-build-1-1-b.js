import React from "react"
import Hotspot from "../components/hotspot"
import { Link } from "gatsby"

import Layout from "../components/layout"

const CarBuild = () => (
  <Layout headerImage="https://res.cloudinary.com/lwcqviihu/image/upload/v1562762940/Question-set/Car-build-1-1-b.jpg">
    <Link to="/driver2-questions">
      <Hotspot left={31} top={641} width={178} height={39} />
    </Link>
    <Link to="/car-build-1-1-b">
      <Hotspot left={159} top={493} width={131} height={39} />
    </Link>
    <Link to="/car1-assign">
      <Hotspot left={112} top={740} width={196} height={48} />
    </Link>
  </Layout>
)

export default CarBuild
