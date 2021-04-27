import PropTypes from 'prop-types';
import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ReactSVG } from 'react-svg';

import { getDiscountPrice } from '../../helpers/product';
import { addToWishlistDispatch } from '../../redux/actions/wishlistActions';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class ShopProducts extends Component {
	constructor(props) {
		super(props);
		this.state = {
			gridActivate: true,
			listActivate: false,
		};

		this.setGridActive = this.setGridActive.bind(this);
		this.setListActive = this.setListActive.bind(this);
	}

	setGridActive() {
		this.setState({
			gridActivate: true,
			listActivate: false,
		});
	}

	setListActive() {
		this.setState({
			gridActivate: false,
			listActivate: true,
		});
	}

	render() {
		const {
			products,
			//wishlistItems, addToWishlist
		} = this.props;
		const { gridActivate, listActivate } = this.state;
		const { setGridActive, setListActive } = this;
		return (
			<div className='shop-products-area'>
				{/* shop layout switcher */}
				<div className='shop-layout-switcher text-right space-mt--15 space-mb--15'>
					<div className='container'>
						<button
							className={`${gridActivate ? 'active' : ''}`}
							onClick={() => setGridActive()}
						>
							<ReactSVG
								src={process.env.PUBLIC_URL + '/assets/img/icons/grid.svg'}
							/>
						</button>
						<button
							className={`${listActivate ? 'active' : ''}`}
							onClick={() => setListActive()}
						>
							<ReactSVG
								src={process.env.PUBLIC_URL + '/assets/img/icons/list.svg'}
							/>
						</button>
					</div>
				</div>

				{/* shop grid products */}
				<div
					className={`shop-grid-products-wrapper space-mb-m--20 ${
						gridActivate ? 'd-block' : 'd-none'
					}`}
				>
					<div className='container'>
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
													to={process.env.PUBLIC_URL + `/product/${single.id}`}
												>
													<Card.Img
														variant='top'
														src={process.env.PUBLIC_URL + single.image[0]}
													/>
												</Link>

												{/* <div className='grid-product__image'>
													<Link
														to={
															process.env.PUBLIC_URL + `/product/${single.id}`
														}
													>
														<img
															src={process.env.PUBLIC_URL + single.image[0]}
															className='img-fluid'
															alt=''
														/>
													</Link>
												</div> */}
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
												{/* <div className='grid-product__content'>
													<h3 className='title'>
														<Link
															to={
																process.env.PUBLIC_URL + `/product/${single.id}`
															}
														>
															{single.name}
														</Link>
													</h3>
													<span className='category'>
														{single.category.map((item, index, arr) => {
															return (
																item + (index !== arr.length - 1 ? ', ' : '')
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
												</div> */}
											</Card>
										</Col>
									);
								})}
						</Row>
					</div>
				</div>

				{/* shop list products */}
				<div
					className={`shop-list-products-wrapper ${
						listActivate ? 'd-block' : 'd-none'
					}`}
				>
					{products &&
						products.map((single) => {
							// const wishlistItem = wishlistItems.filter(
							// 	(wishlistItem) => wishlistItem.id === single.id
							// )[0];
							return (
								<div
									className='list-product border-bottom--medium'
									key={single.id}
								>
									{/* <button
										className={`icon ${
											wishlistItem !== undefined ? 'active' : ''
										}`}
										disabled={wishlistItem !== undefined}
										onClick={() => addToWishlist(single)}
									>
										<ReactSVG src='assets/img/icons/heart-dark.svg' />
									</button> */}
									<div className='list-product__image'>
										<Link to={process.env.PUBLIC_URL + `/product/${single.id}`}>
											<img
												src={process.env.PUBLIC_URL + single.image[0]}
												className='img-fluid'
												alt=''
											/>
										</Link>
									</div>
									<div className='list-product__content'>
										<h3 className='title'>
											<Link
												to={process.env.PUBLIC_URL + `/product/${single.id}`}
											>
												{single.name}
											</Link>
										</h3>
										<span className='category'>
											{single.category.map((item, index, arr) => {
												return item + (index !== arr.length - 1 ? ', ' : '');
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
										<p>{single.shortDescription}</p>
									</div>
								</div>
							);
						})}
				</div>
			</div>
		);
	}
}

ShopProducts.propTypes = {
	addToWishlist: PropTypes.func,
	products: PropTypes.array,
	wishlistItems: PropTypes.array,
};

const mapStateToProps = (state) => {
	return {
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

export default connect(mapStateToProps, mapDispatchToProps)(ShopProducts);
