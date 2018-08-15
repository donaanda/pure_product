
import React, { Component } from 'react';
import axios from 'axios';
import Header from '../header/header';
import Footer from '../footer/footer';
import '../../assets/css/productWizard.css';
import Step0 from './productWizard_step0';
import Step1 from './productWizard_step1';
import Step2 from './productWizard_step2';
import Step3 from './productWizard_step3';
import Step4 from './productWizard_step4';
import Step5 from './productWizard_step5';
import Step6 from './productWizard_step6';

class ProductFinder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      currentStep: 0,
      nextValid: true,
      selection: {
        retinol: null
      }
    };

    this.nextStep = this.nextStep.bind(this);
    this.handleChildSubmit = this.handleChildSubmit.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  nextStep() {
    let { currentStep, selection } = this.state;
    if (currentStep === 4) {
      this.setState({ nextValid: false })
    }
    if (currentStep === 5 &&
      selection['safety-high'] >= selection['safety-low'] &&
      selection['gentle-high'] >= selection['gentle-low'] &&
      selection['safety-high'] <= 10 && selection['safety-high'] >= 1 &&
      selection['safety-low'] <= 10 && selection['safety-low'] >= 1 &&
      selection['gentle-high'] <= 10 && selection['gentle-high'] >= 1 &&
      selection['gentle-low'] <= 10 && selection['gentle-low'] >= 1) {
      this.setState({
        nextValid: true,
        currentStep: currentStep + 1
      });
      return;
    }
    if (currentStep >= 5) {
      currentStep = 6;
    } else {
      currentStep = currentStep + 1;
    }
    this.setState({
      currentStep
    });
  }

  handleChildSubmit(event) {
    var { name, value, checked } = event.target;
    var { selection, currentStep } = this.state;
    var newSelection = {};
    for (let key in selection) {
      newSelection[key] = selection[key];
    }
    if (checked) {
      newSelection[name] = value;
    } else {
      delete newSelection[name];
    }
    if (!isNaN(value)) {
      newSelection[name] = value;
    }

    this.setState({
      selection: newSelection
    })
    if (currentStep === 5) { //validation for safety and gentle numbers
      var values = [
        selection['safety-low'],
        selection['safety-high'],
        selection['gentle-low'],
        selection['gentle-high']
      ];
      var validCount = null
      for (let i = 0; i < values.length; i++) {
        if (values[i] !== undefined) {
          validCount++;
        }
      }
      if (validCount === 3) {
        this.setState({ nextValid: true })
      }
    }
  }

  async handleFormSubmit(event) {
    event.preventDefault();
    var query = this.state.selection;
    // console.log('from submit: ', query);
    await axios.post(`/server/api_filter_and_finder.php`, { query }).then(response => {
      this.setState({
        data: response.data
      })//, console.log('from prod wiz, filter and find: ', response.data);
    });
    this.props.history.push({
      pathname: '/product_recommendations',
      state: { selection: this.state.selection, data: this.state.data }
    });
  }


  render() {
    // console.log('from render: ', this.state.selection);
    const { currentStep, selection, nextValid } = this.state;
    return (
      <div className="product-wizard-cont">
        <Header history={this.props.history} />
        <div className="product-wizard-inner">
          <Step0 currentStep={currentStep} />
          <Step1 selectionCallBack={this.handleChildSubmit} currentStep={currentStep} />
          <Step2 selectionCallBack={this.handleChildSubmit} currentStep={currentStep} />
          <Step3 selectionCallBack={this.handleChildSubmit} retinolVal={selection.retinol} currentStep={currentStep} />
          <Step4 selectionCallBack={this.handleChildSubmit} retinolVal={selection.retinol} currentStep={currentStep} />
          <Step5 selectionCallBack={this.handleChildSubmit} currentStep={currentStep} />
          <Step6 selectionCallBack={this.handleChildSubmit} currentStep={currentStep} />
          {nextValid ? null : <div className="options">Please choose options.</div>}
          <button onClick={nextValid ? this.nextStep : null}
            className={currentStep === 6 ? "display-none" : "btn wiz-button"}>
            Next
            </button>
          <button onClick={this.handleFormSubmit}
            className={currentStep === 6 ? "btn wiz-button" : "display-none"}>
            Submit
          </button>
        </div>
        <Footer />
      </div>
    );
  }
}

export default ProductFinder;