
import React, { Component } from 'react';
import Footer from './footer';
import Header from './header/header';

class SignIn extends Component {
    render() {
        return (
            <section className="sign_in_form">
                <Header history={this.props.history} />
                <form className="sign_in_form">
                    <div className="email">
                        <label>email</label>
                        <input name="email" type="text" />
                    </div>
                    <div className="password">
                        <label>password</label>
                        <input name="password" type="text" />
                    </div>
                    <button>Sign In</button>
                </form>
                <Footer />
            </section>
        )
    }
}

export default SignIn;