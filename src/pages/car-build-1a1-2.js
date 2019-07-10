import React from "react"
import Hotspot from "../components/hotspot"
import { Link } from "gatsby"

import Layout from "../components/layout"

const CarBuild = () => (
  <Layout headerImage="https://res.cloudinary.com/lwcqviihu/image/upload/v1562762944/Question-set/Car-build-1a1-2.jpg
  ">
    <Link to="/car2-assign">
      <Hotspot left={18} top={515} width={282} height={46} />
    </Link>
    <Link to="/car2-assign">
      <Hotspot left={112} top={1012} width={196} height={48} />
    </Link>
  </Layout>
)

export default CarBuild
