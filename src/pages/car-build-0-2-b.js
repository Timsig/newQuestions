import React from "react"
import Hotspot from "../components/hotspot"
import { Link } from "gatsby"

import Layout from "../components/layout"

const CarBuild = () => (
  <Layout headerImage="https://res.cloudinary.com/lwcqviihu/image/upload/v1561460138/Question-set/Car-build-0-2-b.jpg">
    {/* <Link to="/driver1-questions">
    <Hotspot left={31} top={538} width={222} height={39} />
    </Link> */}
    <Link to="/car1-questions">
      <Hotspot left={161} top={391} width={130} height={39} />
    </Link>
  </Layout>
)

export default CarBuild
