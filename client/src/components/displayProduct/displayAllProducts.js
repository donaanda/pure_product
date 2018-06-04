import React, { Component } from 'react';
import DisplayImage from './displayImage';
import { Link } from 'react-router-dom';
import Loader from '../loader';
import '../../assets/css/displayImage.css';

const styleClasses = {
    displayCont: 'product-display-container',
    imgProductPage: 'image-container',
    productImg: 'product-image',
    heartIcon: 'gentle-icon',
    crossIcon: 'safety-icon',
    gentleRating: 'gentle-rating',
    safetyRating: 'safety-rating',
    displayNone: ''
}

class DisplayAllProducts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            productsPerPage: 20
        };
        this.handlePageNumberClick = this.handlePageNumberClick.bind(this);
    }

    handlePageNumberClick(event) {
        window.scrollTo(0, 650);
        this.setState({
            currentPage: Number(event.target.id)
        });
    }

    render() {
        if (this.props.data.data === null) {
            return <Loader className="loader beaker-loader prod-pg-loader" />
        } else if (!this.props.data.success) {
            return (
                <div className="no-results-cont">
                    <h1>Can't find what you're looking for?</h1>
                    <h5>Try our Product Analyzer to find out what's in a product.</h5>
                    <div className="no-results-button">
                        <Link to="/">
                            <button className="btn return-home-btn">
                                Return Home
                            </button>
                        </Link>
                        <Link to="/product_analyzer">
                            <button className="btn purple">
                                Product Analyzer
                            </button>
                        </Link>
                    </div>
                </div>
            )
        } else {
            const { currentPage, productsPerPage } = this.state;

            const indexOfFirstProductOfNextPage = currentPage * productsPerPage;
            const indexOfFirstProductOfCurrentPage = indexOfFirstProductOfNextPage - productsPerPage;
            const currentProducts = this.props.data.data.slice(indexOfFirstProductOfCurrentPage, indexOfFirstProductOfNextPage);
            const products = currentProducts.map((item, index) => {
                return (
                    <DisplayImage key={index} product={item} className={styleClasses} />
                )
            });


            const pageNumbers = [];
            for (let index = 1; index <= Math.ceil(this.props.data.data.length / productsPerPage); index++) {
                pageNumbers.push(index);
            }

            const renderPageNumbers = pageNumbers.map((number) => {
                return (
                    <li key={number} id={number} onClick={this.handlePageNumberClick} className="page-numbers-list" style={{ fontSize: this.state.currentPage === number ? 'x-large' : 'small' }}>{number}</li>
                )
            });

            return (
                <div className="display-all-products-content">
                    {products}
                    <ul className="page-numbers">{renderPageNumbers}</ul>
                </div>
            )
        }
    }
}

export default DisplayAllProducts;
