
import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import '../assets/css/productWizard.css';
import Step0 from './productWizard_step0';
import Step1 from './productWizard_step1';
import Step2 from './productWizard_step2';
import Step3 from './productWizard_step3';
import Step4 from './productWizard_step4';
import Step5 from './productWizard_step5';
import Step6 from './productWizard_step6';

class ProductFinder extends React.Component {
    constructor(props) {
        super(props);
      this.state = {
        currentStep: 0
      };
      
      this.nextStep = this.nextStep.bind(this);
      this.prevStep = this.prevStep.bind(this);
    }
    
   nextStep() {
      let currentStep = this.state.currentStep;
      // Make sure currentStep is set to something reasonable
      if (currentStep >= 5) {
        currentStep = 6;
      } else {
        currentStep = currentStep + 1;
      }
      
      this.setState({
        currentStep: currentStep
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
        currentStep: currentStep
      });
    }
    
    render() {
        const {currentStep} = this.state
      return(
          <div className="product-wizard-cont">
              <Header history={this.props.history} />
            <div>
                <Step0 currentStep={currentStep} />
                <Step1 currentStep={currentStep} />
                <Step2 currentStep={currentStep} />
                <Step3 currentStep={currentStep} />
                <Step4 currentStep={currentStep} />
                <Step5 currentStep={currentStep} />
                <Step6 currentStep={currentStep} />
                <button onClick={this.prevStep} className="btn wiz-button pink lighten-2">Prev</button>
                <button onClick={this.nextStep} className="btn wiz-button">Next</button>
            </div>
            <Footer />
        </div>
      );
    }
}

export default ProductFinder;