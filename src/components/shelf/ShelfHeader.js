import React from 'react';

//Inner Components
import Sort from './Sort';
import Clearfix from '../Clearfix';
import Filter from './Filter';

const ShelfHeader = () => {

	return( 
		<div className='shelf-container-header'>      		
      		<Sort />
      		<Clearfix />
		</div>
	)
}

export default ShelfHeader;