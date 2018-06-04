import React, { Component } from 'react';
import Header from '../header/header';

class CreateAccount extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section>
                <Header history={this.props.history} />
                <div className="myAccountDivSize">
                    Saved Products
                </div>
                <div className="myAccountDivSize">
                    My Reviews
                </div>
                <div className="myAccountDivSize">
                    My Submissions
                </div>
            </section>
        )
    }
}
export default CreateAccount;