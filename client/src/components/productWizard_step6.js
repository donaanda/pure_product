import React, { Component } from 'react';

class Step6 extends React.Component {
    render() {
        if (this.props.currentStep !== 6) {
            return null;
        }
        return (
            <div className="wizard-div price-selector">
                <h4>Between these prices...</h4>
                <form>
                    <label>$   </label><input id="num-input" onChange={this.props.selectionCallBack} type="number" placeholder="low dollar amount" name="low-price" min="1" />
                    <h6>And</h6>
                    <label>$   </label><input id="num-input" onChange={this.props.selectionCallBack} type="number" placeholder="high dollar amount" name="high-price" min="1" />
                </form>
            </div>
        );
    }
}

export default Step6;