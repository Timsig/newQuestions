import React from "react"
import Hotspot from "../components/hotspot"
import { Link } from "gatsby"

import Layout from "../components/layout"

const CarBuild = () => (
  <Layout headerImage="https://res.cloudinary.com/lwcqviihu/image/upload/v1562762947/Question-set/Car-build-2a-2.jpg">
    <Link to="/car1-assign">
      <Hotspot left={19} top={307} width={283} height={44} />
    </Link>
    {/* <Link to="/car-build-2-1">
      <Hotspot left={31} top={584} width={120} height={39} />
    </Link> */}
    <Link to="/car1-assign">
      <Hotspot left={112} top={1054} width={196} height={48} />
    </Link>
  </Layout>
)

export default CarBuild
