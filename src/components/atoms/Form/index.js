import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    console.log("this.props is?", this.props);
  }
  render() {
    return <div>this will be a form</div>;
  }
}

export default Form;
