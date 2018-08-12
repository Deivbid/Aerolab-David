import React from 'react';
import PropTypes from "prop-types";

//iNNER coMPONENTS
import Thumb from '../Thumb';
import Coin from './../../static/coin.svg';
import BuyWhite from './../../static/buy-white.svg';
import BuyBlue from './../../static/buy-blue.svg';

//Buy Product
import swal from "sweetalert";
import axios from "axios";

const Product = ({product, addProduct, user}) => {

  let buyTagNotHover = (product, points) => {
    if(product.cost > points)
    {
      let need = product.cost - points
      return <div className="no-money no-hover"> <h4>You need {need}</h4> <img src={Coin} className='coin-no-money' ariaLabel='logo' /></div>
    }
    else
      return <img src={BuyBlue} className='buy-logo' ariaLabel='logo' />
  }

  let buyTagHover = (product, points) =>{
    if(product.cost > points)
    {
      let need = product.cost - points
      return <div className="no-money"> <h4>You need {need}</h4> <img src={Coin} className='coin-no-money' ariaLabel='logo' /></div>      
    }
    else
    {
      return <img src={BuyWhite} className='buy-logo-hover' ariaLabel='logo' />
    }
  }
	
  let proceedToCheckout = (item) =>{
    const productsAPI = "https://aerolab-challenge.now.sh/redeem";
    const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YjQyNjUyOTRiYzk1YzAwNThkMWJhMjYiLCJpYXQiOjE1MzEwNzc5MzB9.973QYrXVp38QXdAjXMdxByR5JkA7cC059JchMpa9lXI";
    let body = {
      "productId": item._id
    }
    console.log(item)
    axios.post(productsAPI, body, { headers: {"Authorization" : `Bearer ${TOKEN}`, 'Content-Type': 'application/json', 'Accept': 'application/json'}})
    .then( res => {   
       swal("Good job!", "Thanks for purchase in Aerolab :D", "success");             
    })
    .catch( err => {
      swal("Error", "You don't have money :(", "error");
    })


  }
	
	// An input component can change the quantity in the future
	let points 
	product.quantity = 1;
	if(user)
	{
		points = user.points
	}
	else
	{
		points = 100000;
	}

  	return( 
  		<div className='shelf-item' >

  			{buyTagNotHover(product, points)}     

  			<Thumb 
  				classes='shelf-item__thumb'
  				src={product.img.url}
  				alt={product.name}
  			/>
        <div class="info">
          {buyTagHover(product, points)}
          <div className="price">
            <h1 className="cost">{product.cost}</h1>
            <img src={Coin} className="coin" />
          </div>
          
          <button onClick={() => proceedToCheckout(product)} className="buy-btn">Redeeem Now</button>
        </div>

        <hr className="clearfix-line" />
        <div className="shelf-item__info">
          <p className="category">{product.category}</p>
          <p className="title">{product.name}</p>
        </div>
  			{/*<div onClick={() => addProduct(product)} className="shelf-item__buy-btn">Add to cart</div>*/}
  		</div>
  	 )
}

Product.propTypes = {
  product: PropTypes.object.isRequired,
  addProduct: PropTypes.func.isRequired,
  user:PropTypes.object.isRequired
};

export default Product;