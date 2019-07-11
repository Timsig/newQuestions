import React from "react"
import { Link } from "gatsby"

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
import Licence from "../components/q_licence"

const firstCover = () => (
  <Layout headerImage="https://res.cloudinary.com/lwcqviihu/image/upload/v1562834009/Question-set/First-cover-head.png"
  >
    <Qdate question="When will your car insurance start" id="startDate"/>
    <Qdate question="When will your home insurance start" id="DOB"/>
    
      <Navbutton
        to="/lobChoiceSuccess"
        type="primary btn-block"
        cta="Next"
      />
   

  </Layout>
)

export default firstCover