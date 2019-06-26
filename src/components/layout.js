/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { Component } from "react"
import Header from "./header"
import "../styles/global-styles.css"
import ls from "local-storage"

// const Layout = ({ children, header = "" }) => (
//   <div className="container">
//     <Header image="https://res.cloudinary.com/lwcqviihu/image/upload/v1561038903/Question-set/Header_1.jpg" />
//     <main>
//       <h1>{header}</h1>
//       <div className="questions-wrapper">{children}</div>
//     </main>
//   </div>
// )

class Layout extends React.Component {
  constructor(props) {
    super(props)

    this.addCar = this.addCar.bind(this)
    this.reset = this.reset.bind(this)

    this.state = {
      cars: 0,
      drivers: 0,
    }
  }

  addCar() {
    console.log("Click")
    console.log("state: ", this.state.cars)
    const newCars = parseInt(this.state.cars, 10) + 1
    console.log("newCars: ", newCars)
    this.setState(
      {
        cars: newCars,
      },
      () => {
        console.log("new State: ", this.state.cars)
        localStorage.setItem("cars", this.state.cars)
      }
    )
  }

  reset() {
    this.setState({
      cars: 0,
      drivers: 0,
    })
  }

  // componentWillUnmount() {
  //   localStorage.setItem("cars", this.state.cars)
  // }

  componentWillMount() {
    const cars = localStorage.getItem("cars") || 0
    console.log("initialState: ", cars)
    this.setState({
      cars: cars,
    })
  }

  render() {
    const backGround = this.props.bg || "#eee"
    const childrenwProps = React.Children.map(this.props.children, child => {
      if (child.props.id == "addCarButton") {
        return React.cloneElement(child, { action: this.addCar })
      } else {
        return React.cloneElement(child)
      }
    })
    return (
      <div className="container" style={{ backgroundColor: backGround }}>
        <Header image={this.props.headerImage} />
        <main>
          <h1>{this.props.header}</h1>
          <div className="questions-wrapper">{childrenwProps}</div>
        </main>
      </div>
    )
  }
}

export default Layout