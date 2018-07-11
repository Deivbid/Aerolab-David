import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Redux Tools
import { connect } from "react-redux";
import { updateFilters } from '../../store/actions/filterActions';
//Buttons
import FilterOptions from '../FilterOptions';


const categories = [
	'All',
  'Phones',
  'Gaming',
  'Laptops',
  'Tablets & E-readers',
  'Cameras',
  'Audio',
  'Monitors & TV',
  'Drones',
  'Phone Accessories',
  'Smart Home',
  'PC Accessories'
];

class Filter extends Component {
	componentWillMount(){
		this.selectedCheckboxes = new Set();
	}

	handleFilter = (label) => {
		this.props.updateFilters(Array.from(label));
	}

	render(){
		return(
			<div className="filter-sort">
				Order by <FilterOptions options={categories} handleOnChange={this.handleFilter} />
		  	</div>
		)
	}
}

Filter.propTypes = {
	updateFilters: PropTypes.func.isRequired,
  	filters: PropTypes.array,
}

const mapStateToProps = state => ({
  filters: state.filters.items,
})

export default connect(mapStateToProps, {updateFilters})(Filter);