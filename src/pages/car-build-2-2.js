import React from "react"
import Hotspot from "../components/hotspot"
import { Link } from "gatsby"

import Layout from "../components/layout"

const CarBuild = () => (
  <Layout headerImage="https://res.cloudinary.com/lwcqviihu/image/upload/v1562762946/Question-set/Car-build-2-2.jpg">
    <Link to="/car1-assign">
      <Hotspot left={18} top={307} width={284} height={44} />
    </Link>
    <Link to="/car2-assign">
      <Hotspot left={18} top={481} width={284} height={44} />
    </Link>
    <Link to="/car1-assign">
      <Hotspot left={112} top={992} width={196} height={48} />
    </Link>
  </Layout>
)

export default CarBuild
