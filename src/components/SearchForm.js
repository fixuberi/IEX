import React, { Component } from 'react';

export default class SearchForm extends Component {
    constructor(props) {
      super(props);
      this.state = {symbol: ''};
    }
  
    handleChange = (event) => {
      this.setState({symbol: event.target.value.toLowerCase().trim()});
    }
  
    handleSubmit = (event) => {
      event.preventDefault();
      this.props.onSubmit(this.state.symbol);
    }
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.symbol} onChange={this.handleChange} placeholder="Enter company symbol" />
          <input type="submit" value="Search" />
        </form>
      );
    }
  }