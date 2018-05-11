
import React, { Component } from 'react';
import Footer from './footer';

class SignIn extends Component {
    render() {
        return (
            <section className="sign_in_form">
                <form className="sign_in_form">
                    <div>
                        <label>email</label>
                        <input type="text" name="email" />
                    </div>
                    <div>
                        <label>password</label>
                        <input type="text" name="email" />
                    </div>
                    <button>Sign In</button>
                </form>
                <Footer />
            </section>
        )
    }
}

export default SignIn;