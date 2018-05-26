import React, {Component} from 'react';
import Header from './header';
import { Link } from 'react-router-dom';
import '../assets/css/productAnalyzer.css';
import IngredientList from './ingredientList';
import axios from 'axios';

class ProductAnalyzerResult extends Component{
    constructor(props){
        super(props);
        this.state = {
            input:'',
            data: {
                data: null
            }
        }
    }
    async componentDidMount() {
        var query = this.props.match.params.search;
        await axios.post(`http://localhost:8888/get_ingredient_by_name.php`, {query}).then(response => {
            this.setState({
                data: response.data
            })
        });
    }

    async componentWillReceiveProps(nextProps){
        if (this.props.match.params.search !== nextProps.match.params.search) {
            let query = nextProps.match.params.search;
            await axios.post(`http://localhost:8888/get_ingredient_by_name.php`, {query}).then(response => {
                this.setState({
                    data: response.data
                }, () => console.log(this.state));
            });
        }
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.history.push('/product_analyzer_result/' + this.state.input)
    }

    handleInput(event){
        event.preventDefault();
        this.setState({
            input: event.target.value
        }, ()=>console.log('input:', this.state)
        );
    }
    render(){
        return (
            <section>
                <Header history={this.props.history} />
                <IngredientList info={this.state.data.ingredients}/>
                    <form className="check-product-form-field">
                        <div className="check-product-input-container">
                            <textarea autoFocus onChange={this.handleInput.bind(this)} className="check-product-input-field" type="text" placeholder="copy and paste ingredients here..."></textarea>
                        </div>
                        <div className="check-product-button-container">
                            <button className="check-product-button" onClick={this.handleSubmit.bind(this)}>Analyze</button>
                        </div>
                    </form>
            </section>
        )
    }
}
export default ProductAnalyzerResult