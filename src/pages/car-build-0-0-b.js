import React from "react"
import Hotspot from "../components/hotspot"
import { Link } from "gatsby"

import Layout from "../components/layout"

const CarBuild1 = () => {
  return (
    <Layout headerImage="https://res.cloudinary.com/lwcqviihu/image/upload/v1561641885/Question-set/Car-build-0-0-b.jpg">
      <Link to="/car1-questions">
        <Hotspot left={161} top={253} width={130} height={39} />
      </Link>
    </Layout>
  )
}

export default CarBuild1
