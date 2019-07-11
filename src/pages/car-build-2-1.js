import React from "react"
import Hotspot from "../components/hotspot"
import { Link } from "gatsby"

import Layout from "../components/layout"

const CarBuild = () => (
  <Layout headerImage="https://res.cloudinary.com/lwcqviihu/image/upload/v1562836600/Question-set/Car-build-2-1.jpg">
    <Link to="/car1-1-assign-questions">
      <Hotspot left={19} top={308} width={282} height={44} />
    </Link>
    <Link to="/driver2-questions">
      <Hotspot left={31} top={773} width={222} height={39} />
    </Link>
    {/* <Link to="/car-build-2-1">
      <Hotspot left={31} top={584} width={120} height={39} />
    </Link> */}
    <Link to="/car1-1-assign-questions">
      <Hotspot left={112} top={872} width={196} height={48} />
    </Link>
  </Layout>
)

export default CarBuild
