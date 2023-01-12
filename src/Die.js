import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  static defaultProps = {
    numWords: ["one", "two", "three", "four", "five", "six"],
    val: 1
  }
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    var idx = this.props.idx;
    this.props.handleClick(idx);
  }

  render() {
    const {numWords, val, locked, disabled, rolling} = this.props
    let classes = `Die fas fa-dice-${numWords[val - 1 ]} `;
    if (locked) classes += "Die-locked ";
    if (rolling && !locked) classes += "Die-rolling";
    return (
      <i
        className={classes}
        onClick={this.handleClick}
        disabled={disabled}
      />
    );
  }
}

export default Die;
