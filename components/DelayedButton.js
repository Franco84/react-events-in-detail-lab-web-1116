import React from 'react'

class DelayedButton extends React.Component {
  clicked(event) {
    event.persist()
    setTimeout(()=>{this.props.onDelayedClick(event)}, this.props.delay)
}

  render() {
    return (
      <button onClick={this.clicked.bind(this)}>Click me!</button>
    )}}

module.exports = DelayedButton
