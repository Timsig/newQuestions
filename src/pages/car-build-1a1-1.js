import React from "react"
import Hotspot from "../components/hotspot"
import { Link } from "gatsby"

import Layout from "../components/layout"

const CarBuild = () => (
  <Layout headerImage="https://res.cloudinary.com/lwcqviihu/image/upload/v1562789625/Question-set/Car-build-1a1-1.jpg">
    <Link to="/driver2-questions">
      <Hotspot left={31} top={850} width={178} height={40} />
    </Link>
    


  </Layout>
)

export default CarBuild