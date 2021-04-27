import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ReactSVG } from 'react-svg';

import { getProducts, getDiscountPrice } from '../../helpers/product';
import { addToWishlistDispatch } from '../../redux/actions/wishlistActions';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const BestSellerProduct = ({ products, wishlistItems, addToWishlist }) => {
	return (
		<div className='featured-product-area space-mb--25'>
			<div className='container'>
				<div className='row'>
					<div className='col-12'>
						<h2 className='section-title space-mb--20'>
							Best Sale
							<Link to={process.env.PUBLIC_URL + '/shop'}>
								VIEW ALL
								<span>
									<ReactSVG
										src={
											process.env.PUBLIC_URL +
											'/assets/img/icons/arrow-right.svg'
										}
									/>
								</span>
							</Link>
						</h2>
						<Row>
							{products &&
								products.map((single) => {
									return (
										<Col xs={6} md={3} lg={3} key={single.id}>
											<Card
												style={{
													backgroundColor: '#F8F9F9',
												}}
											>
												<Link
													to={process.env.PUBLIC_URL + `/product/${single.id}`}
												>
													<Card.Img
														variant='top'
														src={process.env.PUBLIC_URL + single.image[0]}
													/>
												</Link>
												<Card.Body>
													<Card.Text>
														<div className='featured-product__content'>
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
														</div>
													</Card.Text>
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
	);
};

BestSellerProduct.propTypes = {
	addToWishlist: PropTypes.func,
	products: PropTypes.array,
	wishlistItems: PropTypes.array,
};
const mapStateToProps = (state, ownProps) => {
	return {
		products: getProducts(
			state.productData.products,
			ownProps.limit,
			ownProps.type
		),
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

export default connect(mapStateToProps, mapDispatchToProps)(BestSellerProduct);
