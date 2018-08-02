
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
      selection: {
        retinol: null
      }
    };

    this.nextStep = this.nextStep.bind(this);
    this.prevStep = this.prevStep.bind(this);
    this.handleChildSubmit = this.handleChildSubmit.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  nextStep() {
    let currentStep = this.state.currentStep;
    if (currentStep >= 5) {
      currentStep = 6;
    } else {
      currentStep = currentStep + 1;
    }

    this.setState({
      currentStep
    });
  }

  prevStep() {
    let currentStep = this.state.currentStep;
    if (currentStep <= 1) {
      currentStep = 1;
    } else {
      currentStep = currentStep - 1;
    }

    this.setState({
      currentStep
    });
  }

  handleChildSubmit(event) {
    var { name, value, checked } = event.target;
    console.log('from handle child submit', name, value);
    var { selection } = this.state;
    var newSelection = {};
    for (let key in selection) {
      newSelection[key] = selection[key];
    }
    if (checked) {
      newSelection[name] = value;
    } else if (value !== isNaN) {
      newSelection[name] = value;
    } else {
      delete newSelection[name];
    }

    this.setState({
      selection: newSelection
    })
  }

  async handleFormSubmit(event) {
    event.preventDefault();
    var query = this.state.selection;
    await axios.post(`/server/api_filter_and_finder.php`, { query }).then(response => {
      this.setState({
        data: response.data
      })
    });
    this.props.history.push({
      pathname: '/product_recommendations',
      state: { selection: this.state.selection, data: this.state.data }
    });
  }


  render() {
    const { currentStep, selection } = this.state;
    console.log('from product wiz parent:', selection);
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
          {/* <button onClick={this.prevStep}
            className={currentStep === 0 || currentStep === 6 ? "display-none" : "btn wiz-button pink lighten-2"}>
            Prev
            </button> */}
          <button onClick={this.nextStep}
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