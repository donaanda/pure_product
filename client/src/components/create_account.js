import React ,{Component} from 'react';
import Header from './header/header';
import Footer from './footer';
import { Link } from 'react-router-dom';
import '../assets/css/createAccount.css';

class CreateAccount extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <section className="CreateAccount">
                <Header history={this.props.history} />
                <form className="create_account">
                    <div>
                        <h2 className="sign-up-header">Sign Up Below</h2>
                        <div><input type="text" name="fullName" /> <label>Full Name</label></div>
                        <div><input type="text" name="fullNameVerify" /> <label>Please enter your full name again</label></div>
                        <div><input type="text" name="e-mailAddress" /> <label>E-mail</label></div>
                        <div><input type="text" name="e-mailAddressVerify" /> <label>Please enter your e-mail again</label></div>
                        <button className="btn">Submit</button>
                    </div>
                </form>
                <Footer />
            </section>
        )
    }
}

export default CreateAccount;