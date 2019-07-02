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
import Qlicence from "../components/q_licence"
import Qprepop from "../components/q_prepop"
import Qnumber from "../components/q_numbuttons"
import Footer from "../components/footer"
import Navbutton from "../components/molecules/navbutton"
import { checkPropTypes } from "prop-types"

const Driver2questions = () => {
  var nextDest
  const currCars = localStorage.getItem("cars") || 0

  if (currCars == 0) {
    nextDest = "/car-build-0-2"
  } else if (currCars == 1) {
    nextDest = "/car-build-1-2"
  } else {
    nextDest = "/car-build-2-2"
  }
  return (
    <Layout
      headerImage="https://res.cloudinary.com/lwcqviihu/image/upload/v1561640166/Question-set/Header_2.jpg"
      bg="#fff"
    >
      <h3>Tell us about the second driver</h3>
      <Qbuttons
        id="title"
        question="Title"
        options={["Mr", "Mrs", "Miss", "Ms", "Dr"]}
      />
      <Qtext id="firstName" question="First name" />
      <Qtext id="surName" question="Surname" />
      <Qdate id="DOB" question="Date of birth" />
      <Qselect
        id="maritalStatus"
        question="What's their marital status"
        options={[
          "Married",
          "Single",
          "Divorced",
          "Widowed",
          "Living with partner",
          "Separated",
        ]}
      />
      <Qbuttons
        id="employment"
        question="What's their employment status?"
        options={["Employed", "Self-employed", "Retired", "Other"]}
      />
      <Qselect
        id="relationshipToYou"
        question="What's their relationship to you"
        options={[
          "Brother/Sister",
          "Partner of other relative",
          "Policyholder",
          "Spouse/Civil partner",
          "Partner of brother/sister",
          "Child",
          "Common law/Partner",
          "Grandchild",
          "Grandparent",
          "No relation",
          "Other relative",
          "Parent",
          "Partner of child",
        ]}
      />
      <Qlicence
        id="driversLicence"
        question="If you know their driving licence number, please complete it, below."
      />

      <section className="prepop-questions">
        <h4>Please check the following statements</h4>
        <Qprepop
          id="claimsAccidents"
          textbefore="Martha"
          options={["has not", "has"]}
          textafter="had any claims or accidents in the last five years, including whilst insured with us."
        />
        <Qprepop
          id="UKres"
          textbefore="Martha has been a UK resident for"
          options={[
            "more than 3 years",
            "3 years",
            "2 years",
            "1 year",
            "less than a year",
          ]}
          textafter="."
        />
      </section>

      <Navbutton
        to={nextDest}
        type="primary btn-block"
        cta="Add this driver"
        id="addDriverButton"
      />
    </Layout>
  )
}

export default Driver2questions
