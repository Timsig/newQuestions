import React from "react"
import Hotspot from "../components/hotspot"
import { Link } from "gatsby"

import Layout from "../components/layout"

const CarBuild = () => (
  <Layout headerImage="https://res.cloudinary.com/lwcqviihu/image/upload/v1562061204/Question-set/Car-build-1a-2b.jpg">
    <Link to="/car2-questions">
      <Hotspot left={161} top={593} width={130} height={40} />
    </Link>
  </Layout>
)

export default CarBuild
