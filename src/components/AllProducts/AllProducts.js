import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getProducts, getDiscountPrice } from '../../helpers/product';
import { addToWishlistDispatch } from '../../redux/actions/wishlistActions';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const AllProducts = ({ products, wishlistItems, addToWishlist }) => {
	return (
		<div className='products-area'>
			<div className='container'>
				<div className='row'>
					<div className='col-12'>
						{/* <h2 className='section-title space-mb--20'>All Products</h2> */}
						<div className='all-products-wrapper space-mb-m--20'>
							<Row>
								{products &&
									products.map((single) => {
										return (
											<Col xs={6} md={3} lg={3} key={single.id}>
												<Card
													style={{
														marginBottom: 20,
														backgroundColor: '#F8F9F9',
													}}
												>
													<Link
														to={
															process.env.PUBLIC_URL + `/product/${single.id}`
														}
													>
														<Card.Img
															variant='top'
															src={process.env.PUBLIC_URL + single.image[0]}
														/>
													</Link>
													<Card.Body>
														<div className='grid-product__content'>
															<Card.Text>
																<h3 className='title'>
																	<Link
																		to={
																			process.env.PUBLIC_URL +
																			`/product/${single.id}`
																		}
																	>
																		{single.name}
																	</Link>
																</h3>
																<span className='category'>
																	{single.category.map((item, index, arr) => {
																		return (
																			item +
																			(index !== arr.length - 1 ? ', ' : '')
																		);
																	})}
																</span>
																<div className='price'>
																	{single.discount && single.discount > 0 ? (
																		<Fragment>
																			<span className='main-price mr-1'>{`BDT ${single.price}`}</span>
																			<span className='discounted-price'>{`BDT ${getDiscountPrice(
																				single.price,
																				single.discount
																			)}`}</span>
																		</Fragment>
																	) : (
																		<span className='discounted-price'>{`BDT ${single.price}`}</span>
																	)}
																</div>
															</Card.Text>
														</div>
													</Card.Body>
												</Card>
											</Col>
										);
									})}
							</Row>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

AllProducts.propTypes = {
	addToWishlist: PropTypes.func,
	products: PropTypes.array,
	wishlistItems: PropTypes.array,
};

const mapStateToProps = (state, ownProps) => {
	return {
		products: getProducts(state.productData.products, ownProps.limit),
		wishlistItems: state.wishlistData,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		addToWishlist: (item) => {
			dispatch(addToWishlistDispatch(item));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts);
