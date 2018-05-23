import React, {Component} from 'react';
import Header from './header';
import Footer from './footer';
import faq_icon from '../assets/images/faq_icon.png';
import { Link } from 'react-router-dom';

class FAQ extends Component {
    render(){
        return (
            <section className="FAQ">
                <Header history={this.props.history} />
                <div className="site-about-container">
                    <h1 className="faq_title"><img className="faq_icon" src={faq_icon} />   FAQ</h1>
                    <h4>Does Pure Product Sell Products?</h4>
                    <p>No. We are a purely informational site.</p>
                    <h4>How does Pure Product analyze ingredients?</h4>
                    <p>We use credible sources like Environmental Working Group and Paula's Choice data in order to analyze ingredients in products. This methodology does have its limitations, as ingredients often are regulated based upon use and concentration in a product and different countries have different standards due to varying research and regulation. Pure Product is designed to help consumers make more informed choices about what is actually in their person care products, but is by no means a perfect system due to the breadth and complexity of cosmetic chemistry and product make up. To put it simply, we estimate as accurately as possible with the available data from credible sources and, as always, it is best to listen to your doctor and your body when it comes to what goes on it.</p>
                    <h4>Does Pure Products Make Money?</h4>
                    <p>No. Pure Products came from a web development educational program final project. It is not monetized.</p>
                    <h4>Does Pure Products have a legal disclaimer?</h4>
                    <p>Yes, and here it is!</p>
                    <p><strong>Risk Warning</strong> By accessing Pure Product’s web, database, e-mail, and/or mobile application properties, you acknowledge that any reliance upon any advice, opinion, statement, reccomendation, or other information displayed or distributed through Pure Product’s web, database, e-mail, and/or mobile application properties is at your sole risk. Pure Product reserves the right, in its sole discretion and without notice, to correct any errors, omissions, or publish any update in any portion of Pure Product’s web, database, e-mail, and mobile application properties. You further acknowledge and agree that Pure Product is not responsible for any materials posted by other users of Pure Product’s web, database, and/or mobile application properties.</p>

                    <p><strong>Medical Disclaimer.</strong> Any and all information and advice that Pure Product makes available through its products and services, including through its web, database, e-mail, and mobile application properties, are for general informational purposes only and are not intended as, nor should they ever be considered a substitute for, professional medical advice. Do not use such information or advice for diagnosing or treating any medical or health condition. Always consult a physician or other qualified healthcare provider in all matters related to your health and/or the health of any family member, friend, or acquaintance, including questions about medical conditions, particularly regarding symptoms that may require diagnosis or medical care. Never disregard or delay seeking professional medical advice or care because of something you have read on any of Pure Product’s web, database, e-mail, and mobile application properties. Without limiting any other terms or conditions of this Agreement, Pure Product makes no representations or warranties with respect to any information or advice offered or provided through its products and services regarding treatment, action, or application of medication or medical care. Neither Pure Product nor any of its affiliates, nor any of their respective officers, directors, representatives, agents, advisors, contractors, and employees, will be liable for any direct, indirect, consequential, special, or any other damages arising therefrom.</p>

                    <p><strong>Indemnification.</strong> You hereby agree to indemnify, defend, and hold harmless to the fullest extent permitted by law Pure Product, and its officers, directors, representatives, agents, advisors, contractors, and employees, from and against any and all losses, liability, damages, costs, and expenses (including reasonable attorneys’ and consultants’ fees and disbursements, costs and expenses of investigation and litigation, and costs and expenses of settlement, judgment, interest and penalties) incurred by Pure Product from any claims of any third person (including governmental agencies and authorities) arising out of, based upon, or resulting from: (1) breach or alleged breach of any of your representations, warranties, or obligations set forth in this User Agreement; (2) your reliance upon any advice, opinion, statement, recommendation, or other information displayed or distributed through Pure Product’s web, database, e-mail, and/or mobile application properties; or (3) your manufacture, sale, distribution, promotion, advertisement, or use of any products, including claims related to personal injury or property damage. You shall cooperate as fully as reasonably required in the defense of any claim.</p>
                </div>
                <Footer />
            </section>
        )
    }
}

export default FAQ;