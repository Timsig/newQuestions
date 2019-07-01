import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Qcheckbox from "../components/q_checkbox"
import Navbutton from "../components/molecules/navbutton"

const Car1assign = () => {
  return (
    <Layout
      headerImage="https://res.cloudinary.com/lwcqviihu/image/upload/v1561973285/Question-set/assign-drivers-head1.jpg"
      bg="#fff"
    >
      <Qcheckbox
        id="drivers1"
        question="Who will drive this car?"
        options={["Tom Baggins", "Martha Baggins"]}
      />

      <Navbutton
        to="/car-assign-questions"
        type="primary btn-block"
        cta="Next"
        id="car1AssignNext"
      />
    </Layout>
  )
}

export default Car1assign
