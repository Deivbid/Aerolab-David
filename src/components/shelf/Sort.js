import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Redux Tools
import { connect } from "react-redux";
import { updateSort } from '../../store/actions/sortActions';

//Inner Components
import Selectbox from '../SelectBox';

const sortBy = [
  { value: '', label: 'Most Recent'  },
  { value: 'lowestprice', label: 'Lowest Price' },
  { value: 'highestprice', label: 'Highest Price' },
];

class Sort extends Component{

		handleSort = (value) => {
			this.props.updateSort(value);
		}

		Sort = () => {
			return sortBy.map((item, i) => {
				return(
					<Selectbox key={i} options={item} handleOnChange={this.handleSort} />
				)
			})
		}

		render() {
				return (
						<div className="sort">
							<span>Sort by:</span> {this.Sort()}
						</div>
				);
		}
}

Sort.propTypes = {
  updateSort: PropTypes.func.isRequired,
  sort: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
  sort: state.sort.item,
})

export default connect(mapStateToProps, { updateSort })(Sort);


