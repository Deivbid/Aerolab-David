import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Redux Tools
import { connect } from 'react-redux';
import { fetchProducts } from '../../store/actions/productActions';
import { addProduct } from '../../store/actions/floatCartActions';

//Inner Components
import Product from './Product';
import ShelfHeader from './ShelfHeader';
import Clearfix from '../Clearfix';

class Shelf extends Component {

	constructor(props) {
	  super(props);
	
	  this.state = {
	  	'currentPage' : [],
	  	'prev' : 0,
	  	'page': false
	  };
	}
	
	componentWillMount(){
    	this.props.fetchProducts();
  	}

  	componentWillReceiveProps(nextProps) {
	    const { filters, sort } = nextProps;
	    if (filters !== this.props.filters){
	      this.handleFilter(filters);
	    }
	    if (sort !== this.props.sort) {
	      this.handleSort(sort);
	    }
  	}

  	handleFilter(filters){
  		this.props.fetchProducts(filters)
  	}

  	handleSort(sort){
  		this.props.fetchProducts(this.props.filters, sort)
  	}

	render(){
		const {products}  = this.props;
	  	const p = products.map(p => {
	      	return (
	        	<Product
	          		product={p}
	          		addProduct={this.props.addProduct}
			  		key={p._id}
			  		user={this.props.user}
	        	/>
	      );
		});

		return(
		    <React.Fragment>
		    	{/*<Filter />*/}
		    	<div className='shelf-container'>
		    		<ShelfHeader />
		    		{p}
		    	</div>
		    	<Clearfix />
		    </React.Fragment>
		)
	}
}

Shelf.propTypes = {
  fetchProducts: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
  addProduct: PropTypes.func.isRequired,
  filters: PropTypes.array,
  sort: PropTypes.string,
}

const mapStateToProps = state => ({
  products: state.products.items,
  filters: state.filters.items,
	sort: state.sort.item,
	user: state.user.info
})

export default connect(mapStateToProps, { fetchProducts, addProduct })(Shelf);