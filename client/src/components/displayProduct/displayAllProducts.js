import React, { Component } from 'react';
import DisplayImage from './displayImage';
import { Link } from 'react-router-dom';
import Loader from '../loader';
import SortProduct from '../sortProduct';
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
            productsPerPage: 20,
            sortCategoryClicked: true
        };
        this.handlePageNumberClick = this.handlePageNumberClick.bind(this);
        this.selectedCategory = this.selectedCategory.bind(this);
    }

    handlePageNumberClick(event) {
        window.scrollTo(0, 650);
        this.setState({
            currentPage: Number(event.target.id)
        });
    }

    selectedCategory(event) {
        this.setState({
            sortCategoryClicked: true
        });

        if (this.state.sortCategoryClicked) {
            if (event.target.innerText === 'Price') {
                this.props.data.data.sort(this.comparePrice);
                //console.log(this.props.data.data);
            } else if (event.target.innerText === 'Gentle Rating') {
                this.props.data.data.sort(this.compareGentleRating);
            } else if (event.target.innerText === 'Safety Rating') {
                this.props.data.data.sort(this.compareSafetyRating);
            }
        }
    }

    comparePrice(currentProduct, nextProduct) {
        if (currentProduct.price < nextProduct.price)
            return -1;
        else if (currentProduct.price > nextProduct.price)
            return 1;
        return 0;
    }

    compareGentleRating(currentProduct, nextProduct) {

        if ((currentProduct.gentle_avg_rating === '0' || currentProduct.gentle_avg_rating === '1') && nextProduct.gentle_avg_rating !== '0') {
            return 1;
        } else if (currentProduct.gentle_avg_rating !== '0' && (nextProduct.gentle_avg_rating === '0' || nextProduct.gentle_avg_rating === '1')) {
            return -1;
        }

        if (currentProduct.gentle_avg_rating === 'Best')
            return -1;
        else if (currentProduct.gentle_avg_rating === 'Good') {
            if (nextProduct.gentle_avg_rating === 'Best') {
                return 1;
            }
            return -1;
        }
        else if (currentProduct.gentle_avg_rating === 'Average'){
            if (nextProduct.gentle_avg_rating === 'Best' || nextProduct.gentle_avg_rating === 'Good') {
                return 1;
            }
            return -1;
        } else if (currentProduct.gentle_avg_rating === 'Poor') {
            if (nextProduct.gentle_avg_rating === 'Best' || nextProduct.gentle_avg_rating === 'Good' || nextProduct.gentle_avg_rating === 'Average') {
                return 1;
            }
            return -1;
        }
        return 0;
    }

    compareSafetyRating(currentProduct, nextProduct) {
        if (currentProduct.safety_avg_rating === '0' && nextProduct.safety_avg_rating !== '0') {
            return 1;
        } else if (currentProduct.safety_avg_rating !== '0' && nextProduct.safety_avg_rating === '0') {
            return -1;
        }

        if (currentProduct.safety_avg_rating > nextProduct.safety_avg_rating)
            return 1;
        else if (currentProduct.safety_avg_rating < nextProduct.safety_avg_rating)
            return -1;
        return 0;
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
                    <SortProduct selectedCategory={this.selectedCategory}/>
                    {products}
                    <ul className="page-numbers">{renderPageNumbers}</ul>
                </div>
            )
        }
    }
}

export default DisplayAllProducts;
