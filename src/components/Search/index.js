import React, { Component } from 'react';

class Search extends Component {
  componentDidMount() {
    if(this.input) {
      this.input.focus();
    }
  }

  render() {
    const {
      value,
      onChange,
      onSubmit,
      children,
    } = this.props;

    let input;
    return (
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={value}
          onChange={onChange}
          ref={(node) => input = node}
        />
        <button type="submit">
          {children}
        </button>
      </form>
    )
  }
}

  export default Search;