import React, { Component } from 'react';

class Step1 extends React.Component {
    render() {
        if (this.props.currentStep !== 1) {
            return null;
        }
        return (
            <div className="wizard-div skintype-questions">
                <h3>My skintype is...</h3>
                <form>
                    <div className="wiz-input-cont">
                        <div><input id="wizard-input" value="yes" onChange={this.props.selectionCallBack} type="checkbox" name="oily" /> <label id="wiz-label">oily</label></div>
                        <div><input id="wizard-input" value="yes" onChange={this.props.selectionCallBack} type="checkbox" name="sensitive" /> <label id="wiz-label">sensitive</label></div>
                        <div><input id="wizard-input" value="yes" onChange={this.props.selectionCallBack} type="checkbox" name="dry" /> <label id="wiz-label">dry</label></div>
                        <div><input id="wizard-input" value="yes" onChange={this.props.selectionCallBack} type="checkbox" name="normal" /> <label id="wiz-label">normal</label></div>
                        <div><input id="wizard-input" value="yes" onChange={this.props.selectionCallBack} type="checkbox" name="combination" /> <label id="wiz-label">combination</label></div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Step1;