import React from "react"
import Hotspot from "../components/hotspot"
import { Link } from "gatsby"

import Layout from "../components/layout"

const CarBuild = () => (
  <Layout headerImage="https://res.cloudinary.com/lwcqviihu/image/upload/v1562058790/Question-set/Car-build-2a-2_Copy.jpg">
    <Link to="/car1-assign">
      <Hotspot left={19} top={307} width={283} height={44} />
    </Link>
    {/* <Link to="/car-build-2-1">
      <Hotspot left={31} top={584} width={120} height={39} />
    </Link> */}
  </Layout>
)

export default CarBuild
