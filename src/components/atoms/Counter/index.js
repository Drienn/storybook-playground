import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button'

class Counter extends Component {
  static defaultProps = {
      btnName: 'Increase',
      initialValue: 0
    }
  constructor() {
    super();


    this.state = {
      counter: 0
    }
  }

  render () {
      let { counter } = this.state
      let { btnName, initialValue } = this.props
    return (
      <div>
        <input value={initialValue + this.state.counter} disabled/>
        <Button onClick={() => this.setState({counter: counter+= 1})}>{btnName}</Button>
      </div>
    )
  }
}

Counter.propTypes = {
  btnName: PropTypes.string.isRequired,
  initialValue: PropTypes.number
};

export default Counter;
