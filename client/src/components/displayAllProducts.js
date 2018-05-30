import React, { Component } from 'react';
import DisplayImage from './displayImage';
import ImageData from './imageData';
import { Link } from 'react-router-dom';
import Loader from './loader';
import '../assets/css/displayImage.css';

const styleClasses = {
    displayCont: 'product-display-container',
    imgProductPage: 'image-container',
    productImg: 'product-image',
    heartIcon: 'gentle-icon',
    crossIcon: 'safety-icon',
    gentleRating: 'gentle-rating',
    safetyRating: 'safety-rating',
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
        this.setState({
            currentPage: Number(event.target.id)
        });
    }

    render() {
        if (this.props.data.data === null) {
            return <Loader />
        } else if (!this.props.data.success) {
            return (
                <section>
                    <h1>Oops! No results found...</h1>
                    <Link to="/">
                        <div className="return-home-cont">
                            <button className="btn return-home-btn">
                                Return Home
                            </button>
                        </div>
                    </Link>
                </section>
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
                    <li key={number} id={number} onClick={this.handlePageNumberClick} className="page-numbers-list">{number}</li>
                )
            });

            return (
                <div className="display-all-products-content">
                    {products}
                    <ul className="page-numbers">{renderPageNumbers}</ul>
                </div>
            )

            /*
            let products = this.props.data.data.map((item, index) => {
                return (
                    <DisplayImage key={index} product={item} className={styleClasses} />
                )
            });

            return (
                <div className="display-all-products-content">
                    {products}
                </div>
            )
            */
        }
    }
}

export default DisplayAllProducts;
