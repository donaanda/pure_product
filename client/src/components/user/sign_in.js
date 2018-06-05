import React, { Component } from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import axios from 'axios';

class SignIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.handleSignIn = this.handleSignIn.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    async handleSignIn(event) {
        event.preventDefault();
        let loginInfo = this.state;
        await axios.post(`/server/api_userAuthTest.php`, {loginInfo}).then(response => {
            console.log(response);
            this.setState({
                email: '',
                password:''
            });
        });
    }

    handleInputChange(event) {
        event.preventDefault();
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    }

    render() {
        const {email, password} = this.state;

        return (
            <section className="sign_in_form">
                <Header history={this.props.history} />
                <form className="sign_in_form" onSubmit={this.handleSignIn}>
                    <div className="email">
                        <label>email</label>
                        <input name="email" type="text" value={email} onChange={this.handleInputChange}/>
                    </div>
                    <div className="password">
                        <label>password</label>
                        <input name="password" type="text" value={password} onChange={this.handleInputChange}/>
                    </div>
                    <button>Sign In</button>
                </form>
                <Footer />
            </section>
        )
    }
}

export default SignIn;