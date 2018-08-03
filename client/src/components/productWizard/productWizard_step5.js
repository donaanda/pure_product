import React, { Component } from 'react';

class Step5 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            safetyLowError: 'display-none',
            safetyHighError: 'display-none',
            gentleLowError: 'display-none',
            gentleHighError: 'display-none',
            incorrectRangeErrorSafety: 'display-none',
            incorrectRangeErrorGentle: 'display-none'
        }

    }

    numberValidation(event) {
        var { value, name } = event.target;
        var safetyLow = document.getElementById('safety-low').value;
        var safetyHigh = document.getElementById('safety-high').value;
        var gentleLow = document.getElementById('gentle-low').value;
        var gentleHigh = document.getElementById('gentle-high').value;
        if (safetyLow > safetyHigh &&
            safetyLow !== "" && safetyHigh !== "") {
            this.setState({ incorrectRangeErrorSafety: 'prod-wiz-error' });
        } else {
            this.setState({ incorrectRangeErrorSafety: 'display-none' });
        }
        if (gentleLow > gentleHigh &&
            gentleLow !== "" && gentleHigh !== "") {
            this.setState({ incorrectRangeErrorGentle: 'prod-wiz-error' });
        } else {
            this.setState({ incorrectRangeErrorGentle: 'display-none' });
        }
        switch (name) {
            case 'safety-low':
                if (value < 1 || value > 10) {
                    this.setState({
                        safetyLowError: 'prod-wiz-error'
                    })
                    return false;
                } else {
                    this.setState({
                        safetyLowError: 'display-none'
                    })
                    return true;
                }
                break;
            case 'safety-high':
                if (value < 1 || value > 10) {
                    this.setState({
                        safetyHighError: 'prod-wiz-error'
                    })
                    return false;
                } else {
                    this.setState({
                        safetyHighError: 'display-none'
                    })
                    return true;
                }
                break;
            case 'gentle-low':
                if (value < 1 || value > 4) {
                    this.setState({
                        gentleLowError: 'prod-wiz-error'
                    })
                    return false;
                } else {
                    this.setState({
                        gentleLowError: 'display-none'
                    })
                    return true;
                }
                break;
            case 'gentle-high':
                if (value < 1 || value > 4) {
                    this.setState({
                        gentleHighError: 'prod-wiz-error'
                    })
                    return false;
                } else {
                    this.setState({
                        gentleHighError: 'display-none'
                    })
                    return true;
                }
                break;
            default:
                return true;
        }
    }

    render() {
        var { safetyLowError, safetyHighError, gentleLowError, gentleHighError, incorrectRangeErrorSafety, incorrectRangeErrorGentle } = this.state;
        if (this.props.currentStep !== 5) {
            return null;
        }
        return (
            <div className="wizard-div rating-selector">
                <h4>With these ratings...</h4>
                <form>
                    <div className="wiz-safe-gen-cont wiz-right">
                        <h5>Safety:</h5>
                        <p>Between</p>
                        <input id="safety-low" onChange={(e) => this.numberValidation(e) ? this.props.selectionCallBack(e) : null} type="number" placeholder="safest is 1" name="safety-low" min="1" max="10" />
                        <div className={safetyLowError}>low: choose 1 - 10.</div>
                        <div className={incorrectRangeErrorSafety}>must be less than high</div>
                        <p>And</p>
                        <input id="safety-high" onChange={(e) => this.numberValidation(e) ? this.props.selectionCallBack(e) : null} type="number" placeholder="worst is 10" name="safety-high" min="1" max="10" />
                        <div className={safetyHighError}>high: choose 1 - 10.</div>
                        <div className={incorrectRangeErrorSafety}>must more than low</div>
                    </div>
                    <div className="wiz-safe-gen-cont">
                        <h5>Gentle:</h5>
                        <p>Between</p>
                        <input id="gentle-low" onChange={(e) => this.numberValidation(e) ? this.props.selectionCallBack(e) : null} type="number" placeholder="safest is 1" name="gentle-low" min="1" max="10" />
                        <div className={gentleLowError}>low: choose 1 - 4.</div>
                        <div className={incorrectRangeErrorGentle}>must be less than high</div>
                        <p>And</p>
                        <input id="gentle-high" onChange={(e) => this.numberValidation(e) ? this.props.selectionCallBack(e) : null} type="number" placeholder="worst is 4" name="gentle-high" min="1" max="10" />
                        <div className={gentleHighError}>high: choose 1 - 4.</div>
                        <div className={incorrectRangeErrorGentle}>must be more than low</div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Step5;