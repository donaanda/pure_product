import React, { Component } from 'react';

class Step4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      retinolClicked: null,
      errorLabel: 'wiz-label',
      errorInput: ''
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.retinolVal === 'exclude') {
      this.setState({
        retinolClicked: true,
        errorClassName: 'retinol-error',
        errorInput: 'error-input'
      });
    } else {
      this.setState({
        retinolClicked: false,
        errorClassName: 'wiz-label',
        errorInput: 'wizard-input'
      });
    }
  }
  render() {
    if (this.props.currentStep !== 4) {
      return null;
    }

    return (
      <div className="wizard-div products-want">
        <h4>I want something that DOES have...</h4>
        <form>
          <div><input id="wizard-input" value="yes" onChange={this.props.selectionCallBack} type="checkbox" name="alpha-hydroxy-acid" /> <label id="wiz-label">alpha-hydroxy acid</label></div>
          <div><input id="wizard-input" value="yes" onChange={this.props.selectionCallBack} type="checkbox" name="beta-hydroxy-acid" /> <label id="wiz-label">beta-hydroxy acid</label></div>
          <div><input id={this.state.errorInput} value="yes" disabled={this.state.retinolClicked} onChange={this.props.selectionCallBack} type="checkbox" name="retinol" /> <label id={this.state.errorClassName}>retinol</label></div>
          <div><input id="wizard-input" value="yes" onChange={this.props.selectionCallBack} type="checkbox" name="l-ascorbic-acid" /> <label id="wiz-label">L-Ascorbic Acid</label></div>
          <div><input id="wizard-input" value="yes" onChange={this.props.selectionCallBack} type="checkbox" name="hyaluronic-acid" /> <label id="wiz-label">Hyaluronic Acid</label></div>
        </form>
      </div>
    );
  }
}

export default Step4;