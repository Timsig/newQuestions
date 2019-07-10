import React from "react"
import Hotspot from "../components/hotspot"
import { Link } from "gatsby"

import Layout from "../components/layout"

const CarBuild = () => (
  <Layout headerImage="https://res.cloudinary.com/lwcqviihu/image/upload/v1562762942/Question-set/Car-build-1-2.jpg">
    {/* <Link to="/car-build-1-2">
      <Hotspot left={31} top={704} width={222} height={39} />
    </Link> */}
    <Link to="/car1-assign">
      <Hotspot left={18} top={307} width={284} height={44} />
    </Link>
    <Link to="/car-build-1-2-b">
      <Hotspot left={31} top={556} width={120} height={39} />
    </Link>
    <Link to="/car1-assign">
      <Hotspot left={112} top={820} width={196} height={48} />
    </Link>
  </Layout>
)

export default CarBuild
