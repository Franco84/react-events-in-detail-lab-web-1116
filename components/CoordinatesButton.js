import React from 'react'

class CoordinatesButton extends React.Component {
  clicked(event) {
    this.props.onReceiveCoordinates([event.clientX,event.clientY])
}

  render() {
    return (
      <button onClick={this.clicked.bind(this)}>Click me!</button>
    )}}

module.exports = CoordinatesButton
