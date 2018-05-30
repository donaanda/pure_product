import React, { Component } from 'react';

class Step3 extends React.Component {
    render() {
        if (this.props.currentStep !== 3) {
            return null;
        }
        return (
            <div className="wizard-div products-avoid">
                <h4>I want something that does NOT contain...</h4>
                <form>
                    <div className="wiz-ingredient-cont">
                        <div><input id="wizard-input" onChange={this.props.selectionCallBack} type="checkbox" value="exclude" name="parabens" /> <label id="wiz-label-ingredients">parabens</label></div>
                        <div><input id="wizard-input" onChange={this.props.selectionCallBack} type="checkbox" value="exclude" name="phthalates" /> <label id="wiz-label-ingredients">phthalates</label></div>
                        <div><input id="wizard-input" onChange={this.props.selectionCallBack} type="checkbox" value="exclude" name="triclosan" /> <label id="wiz-label-ingredients">triclosan</label></div>
                        <div><input id="wizard-input" onChange={this.props.selectionCallBack} type="checkbox" value="exclude" name="sodium lauryl sulfate" /> <label id="wiz-label-ingredients">sodium lauryl sulfate</label></div>
                        <div><input id="wizard-input" onChange={this.props.selectionCallBack} type="checkbox" value="exclude" name="aminophenol" /> <label id="wiz-label-ingredients">aminophenol</label></div>
                        <div><input id="wizard-input" onChange={this.props.selectionCallBack} type="checkbox" value="exclude" name="diaminobenzene" /> <label id="wiz-label-ingredients">diaminobenzene</label></div>
                        <div><input id="wizard-input" onChange={this.props.selectionCallBack} type="checkbox" value="exclude" name="phenylenediamine" /> <label id="wiz-label-ingredients">phenylenediamine</label></div>
                    </div>
                    <div className="wiz-ingredient-cont">
                        <div><input id="wizard-input" onChange={this.props.selectionCallBack} type="checkbox" value="exclude" name="polyethylene" /> <label id="wiz-label-ingredients">polyethylene</label></div>
                        <div><input id="wizard-input" onChange={this.props.selectionCallBack} type="checkbox" value="exclude" name="PEGs" /> <label id="wiz-label-ingredients">PEGs</label></div>
                        <div><input id="wizard-input" onChange={this.props.selectionCallBack} type="checkbox" value="exclude" name="coconut" /> <label id="wiz-label-ingredients">coconut and coconut dervived</label></div>
                        <div><input id="wizard-input" onChange={this.props.selectionCallBack} type="checkbox" value="exclude" name="retinol" /> <label id="wiz-label-ingredients">retinol</label></div>

                        <div><input id="wizard-input" onChange={this.props.selectionCallBack} type="checkbox" value="exclude" name="banned" /> <label id="wiz-label-ingredients">Anything banned by the EU</label></div>
                        <div><input id="wizard-input" onChange={this.props.selectionCallBack} type="checkbox" value="exclude" name="restricted" /> <label id="wiz-label-ingredients">Anything restricted by the EU</label></div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Step3;