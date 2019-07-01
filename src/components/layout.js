/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { Component } from "react"
import Header from "./header"
import "../styles/global-styles.css"

class Layout extends React.Component {
  constructor(props) {
    super(props)

    this.addCar = this.addCar.bind(this)
    this.addDriver = this.addDriver.bind(this)
    this.reset = this.reset.bind(this)

    this.state = {
      cars: 0,
      drivers: 0,
      car1Tom: false,
      car1Martha: false,
      car2Tom: false,
      car2Martha: false,
    }
  }

  updateCar1(value) {}

  addCar() {
    const newCars = parseInt(this.state.cars, 10) + 1
    console.log("newCars: ", newCars)
    this.setState(
      {
        cars: newCars,
      },
      () => {
        localStorage.setItem("cars", this.state.cars)
      }
    )
  }

  addDriver() {
    console.log("Click driver")
    console.log("state: ", this.state.drivers)
    const newDrivers = parseInt(this.state.drivers, 10) + 1
    console.log("newDrivers: ", newDrivers)
    this.setState(
      {
        drivers: newDrivers,
      },
      () => {
        console.log("new State drivers: ", this.state.drivers)
        localStorage.setItem("drivers", this.state.drivers)
      }
    )
  }

  reset() {
    this.setState({
      cars: 0,
      drivers: 0,
    })
  }

  componentWillMount() {
    const cars = localStorage.getItem("cars") || 0
    const drivers = localStorage.getItem("drivers") || 0
    console.log("initialState: ", cars)
    this.setState({
      cars: cars,
      drivers: drivers,
    })
  }

  render() {
    const backGround = this.props.bg || "#eee"
    const childrenwProps = React.Children.map(this.props.children, child => {
      if (child.props.id == "addCarButton") {
        return React.cloneElement(child, {
          action: this.addCar,
          cars: this.state.cars,
          drivers: this.state.drivers,
        })
      } else if (child.props.id == "addDriverButton") {
        return React.cloneElement(child, {
          action: this.addDriver,
          cars: this.state.cars,
          drivers: this.state.drivers,
        })
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
