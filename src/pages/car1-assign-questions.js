import React from "react"
import { Link } from "gatsby"

import Header from "../components/header"
import Layout from "../components/layout"
import Qtext from "../components/q_textinput"
import Qselect from "../components/q_select"
import Qyesno from "../components/q_yesno"
import Qbuttons from "../components/q_buttons"
import Qrevealer from "../components/q_revealer"
import Qcheckbox from "../components/q_checkbox"
import Qselectclass from "../components/q_select-class"
import Qdate from "../components/q_date"
import Qprepop from "../components/q_prepop"
import Footer from "../components/footer"
import Navbutton from "../components/molecules/navbutton"
import { checkPropTypes } from "prop-types"

const Car1Assign = () => {
  var nexty
  const carsAssigned = localStorage.getItem("carsAssigned") || 0
  const cars = localStorage.getItem("cars") || 0
  if (carsAssigned == 0 && cars == 1) {
    nexty = "/car-build-1a-2"
  } else if (carsAssigned == 0 && cars == 2) {
    nexty = "/car-build-1a1-2"
  } else {
    nexty = "/car-build-Ba-2"
  }
  return (
    <Layout
      headerImage="https://res.cloudinary.com/lwcqviihu/image/upload/v1561991583/Question-set/Car1-assign-head.jpg"
      bg="#fff"
    >
      <Qselect
        id="ncd"
        question="How many years no claim discount does Tom have to use on this car"
        options={["0", "1", "2", "3", "4", "5", "6", "7", "8", "9 or more"]}
      />
      <Qselect
        id="usage"
        question="How will Tom use this car?"
        options={[
          "Social, domestic & pleasure",
          "Social, domestic & pleasure ",
          " - inc. commuting",
          "Business use,",
          " - exc.commercial travelling",
          "Business use, inc.",
          " - commercial travelling",
        ]}
      />
      <Qdate
        question="When do you want the cover for this car to start?"
        id="startDate"
      />
      <section className="prepop-questions">
        <h4>Please check the following statements</h4>
        <Qprepop
          id="regKeeper"
          options={["Tom Baggins", "Martha Baggins"]}
          textafter="is the registered keeper of this car."
        />
        <Qprepop
          id="legalOwner"
          options={["Tom Baggins", "Martha Baggins"]}
          textafter="is the legal owner of this car."
        />
        <Qprepop
          id="NCD"
          textbefore="Tom earnt this no claim discount"
          options={[
            "Driving this or another car in the UK",
            "Driving this or another car overseas",
          ]}
          textafter="."
        />
      </section>
      <Navbutton
        to={nexty}
        type="primary btn-block"
        cta="Add drivers to this car"
        id="carAssignedButton"
      />
    </Layout>
  )
}

export default Car1Assign
