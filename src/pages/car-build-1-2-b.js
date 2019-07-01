import React from "react"
import Hotspot from "../components/hotspot"
import { Link } from "gatsby"

import Layout from "../components/layout"

const CarBuild = () => (
  <Layout headerImage="https://res.cloudinary.com/lwcqviihu/image/upload/v1561548533/Question-set/Car-build-1-2-b.jpg">
    {/* <Link to="car-build-1-2-b">
      <Hotspot left={31} top={400} width={222} height={39} />
    </Link> */}
    <Link to="/car1-assign">
      <Hotspot left={18} top={307} width={284} height={44} />
    </Link>
    <Link to="/car2-questions">
      <Hotspot left={160} top={556} width={130} height={39} />
    </Link>
  </Layout>
)

export default CarBuild
