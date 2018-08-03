import React, { Component } from 'react';

class Step5 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            safetyLowError: 'display-none',
            safetyHighError: 'display-none',
            gentleLowError: 'display-none',
            gentleHighError: 'display-none'
        }

    }

    numberValidation(event) {
        var { value, name } = event.target;
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
        var {safetyLowError, safetyHighError, gentleLowError, gentleHighError} = this.state;
        console.log(safetyLowError);
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
                        <input id="num-input" onChange={(e) => this.numberValidation(e) ? this.props.selectionCallBack(e) : null} type="number" placeholder="safest is 1" name="safety-low" min="1" max="10" />
                        <div className={safetyLowError}>Please choose a number between 1 and 10.</div>
                        <p>And</p>
                        <input id="num-input" onChange={(e) => this.numberValidation(e) ? this.props.selectionCallBack(e) : null} type="number" placeholder="worst is 10" name="safety-high" min="1" max="10" />
                        <div className={safetyHighError}>Please choose a number between 1 and 10.</div>
                    </div>
                    <div className="wiz-safe-gen-cont">
                        <h5>Gentle:</h5>
                        <p>Between</p>
                        <input id="num-input" onChange={(e) => this.numberValidation(e) ? this.props.selectionCallBack(e) : null} type="number" placeholder="safest is 1" name="gentle-low" min="1" max="10" />
                        <div className={gentleLowError}>Please choose a number between 1 and 4.</div>
                        <p>And</p>
                        <input id="num-input" onChange={(e) => this.numberValidation(e) ? this.props.selectionCallBack(e) : null} type="number" placeholder="worst is 4" name="gentle-high" min="1" max="10" />
                        <div className={gentleHighError}>Please choose a number between 1 and 4.</div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Step5;