import React, { Component } from 'react';
import PropTypes from "prop-types";

class FilterOptions extends Component {
  constructor(props){
    super(props)
    
    this.state = {
      selected: '',
    }

  }
  
  createOptions = (options) => options.map( o => {
      return  <option value={o} key={o}>{o}</option>
  } );

  onChange = (e) => {
    this.props.handleOnChange(e.target.value);
  }

  render() {
    const { classes, options } = this.props;

    return (
      <select onChange={ (e) => this.onChange(e) } className={classes}>
        {this.createOptions(options)}
      </select>
    );
  }
}

FilterOptions.propTypes = {
  options: PropTypes.array.isRequired,
  classes: PropTypes.string,
  handleOnChange: PropTypes.func.isRequired,
};

export default FilterOptions;