import NavBar from "../reusuable-components/nav-bar";
import Footer from "../reusuable-components/page-footer";
import {useState} from "react";

import '../stylesheets/contact-styles.css';
import icon_close from '../icons/icon-close.svg';
import icon_expand from '../icons/icon-expand.svg';

import {dummyText, dummyText2, dummyText3, dummyText4, dummyText5} from "../data.ts";


function QABox({questionTxt, answerTxt}){
    const [isActive, setIsActive] = useState(false);

    function toggleActive(){
        setIsActive(!isActive);
    }

    return (
        <div className="qa-box-container">
            <div className="flex-container">
                <h3>{questionTxt}</h3>
                <button className="toggle-button" onClick={toggleActive}>
                    <img src={isActive ? icon_close : icon_expand} alt={isActive ? "expand" : "close"}/>
                </button>
            </div>
            <div className="answer-box-container" style={{display: isActive ? "block" : "none"}}>
                <hr/>
                <p>{answerTxt}</p>
            </div>
        </div>
    )
}
function FAQSections(){
    return (
        <div className="faq-sections-container">
            <ol className="faq-sections-list">
                <li>
                    <section id="Donec-mollis">
                        <h2>Donec mollis</h2>
                        <p>{dummyText4}</p>
                        <br/>
                        <QABox questionTxt="In rhoncus?" answerTxt={dummyText}/>
                        <QABox questionTxt="Cras non leo dapibus?" answerTxt={dummyText2}/>
                    </section>
                </li>

                <li>
                    <section id="Aliquam-placerat">
                        <h2>Aliquam placerat</h2>
                        <p>{dummyText3}</p>
                    </section>
                </li>

                <li>
                    <section id="Morbi-tempor">
                        <h2>Morbi tempor</h2>
                        <p>{dummyText5}</p>
                        <br/>
                        <QABox questionTxt="Nullam elementum?" answerTxt={dummyText3}/>
                        <QABox questionTxt="Vestibulum ante ipsum?" answerTxt={dummyText}/>

                    </section>
                </li>

                <li>
                    <section id="Proin-ac-fermentum">
                        <h2>Proin ac fermentum</h2>
                        <p>{dummyText2}</p>
                    </section>
                </li>
            </ol>
        </div>
    )
}

function QAList() {
    return (
        <ol className="faq-list">
            <li>
                <a href="#Donec-mollis">Donec mollis</a>
                <ul>
                    <li>In rhoncus</li>
                    <li>Cras non leo dapibus</li>
                </ul>
            </li>
            <li><a href="#Aliquam-placerat">Aliquam placerat</a></li>
            <li>
                <a href="#Morbi-tempor">Morbi tempor</a>
                <ul>
                    <li>Nullam elementum</li>
                    <li>Vestibulum ante ipsum</li>
                </ul>
            </li>
            <li><a href="#Proin-ac-fermentum">Proin ac fermentum</a></li>
        </ol>
    )
}

function ContactUsForm(){
    const [formSubmitted, setFormSubmitted] = useState(false);
    const generalQuestions = ["Vivamus erat tortor", "Nam ligula nibh", "Praesent sollicitudin"];
    const eventQuestions = ["Cras ex diam", "Phasellus at quam", "Duis faucibus"];
    const billingQuestions = ["Nunc mollis", "Aliquam pulvinar", "Sed egestas suscipit"];

    function submitForm(e){
        e.preventDefault();

        setFormSubmitted(true);
    }

    return (
        <div className="contact-us-form-container">
            {formSubmitted ?
                <div className="submit-alert-container">
                    <h2>Form Submitted! We'll contact you back within 7 business days!</h2>
                </div>
                : <></>
            }

            <form className="contact-us-form" method="POST" onSubmit={submitForm}>
                <div>
                    <label htmlFor="firstName">First Name: </label>
                    <input type="text" id="firstName" name="firstName" required/>
                </div>

                <div>
                    <label htmlFor="lastName">Last Name: </label>
                    <input type="text" id="lastName" name="lastName" required/>
                </div>

                <div>
                    <label htmlFor="question-select">Question Type: </label>
                    <select id="question-select" name="questions" required>
                        <option value={null}>=====Choose an Option=====</option>
                        <hr/>
                        <optgroup label="General">
                            {generalQuestions.map((q) => {
                                return (
                                    <option key={crypto.randomUUID()} value={q}>{q}</option>
                                )
                            })}
                        </optgroup>
                        <hr/>
                        <optgroup label="Event">
                            {eventQuestions.map((q) => {
                                return (
                                    <option key={crypto.randomUUID()} value={q}>{q}</option>
                                )
                            })}
                        </optgroup>
                        <hr/>
                        <optgroup label="Billing">
                            {billingQuestions.map((q) => {
                                return (
                                    <option key={crypto.randomUUID()} value={q}>{q}</option>
                                )
                            })}
                        </optgroup>
                    </select>
                </div>

                <div>
                    <label htmlFor="desc">Description: </label>
                    <br/>
                    <textarea id="desc" name="description" rows="5" cols="40" required
                              placeholder="Enter an explanation for your question..."></textarea>
                </div>

                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="email" id="email" name="email" required/>
                </div>

                <div>
                    <label htmlFor="tel">Telephone: </label>
                    <input type="tel" id="tel" name="telephone" required/>
                </div>

                <div className="contact-method-container">
                    <label>Preferred Contact Method: </label>
                    <br/>
                    <input type="radio" id="preferEmail" name="preferred_contact" required/>
                    <label htmlFor="preferEmail">Email</label>
                    <br/>

                    <input type="radio" id="preferTel" name="preferred_contact"/>
                    <label htmlFor="preferTel">Telephone</label>
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

function Body() {
    return (
        <div className="body-container">
            <h2 className="community-page-header">CONTACT US</h2>
            <h2 className="section-header type1">FREQUENTLY ASKED QUESTIONS</h2>
            <p>{dummyText3}</p>
            <QAList/>
            <hr/>
            <FAQSections/>
            <hr/>
            <h2 className="section-header type1">STILL NEED HELP? CONTACT US!</h2>
            <ContactUsForm/>
        </div>
    );
}

export default function ContactUs() {
    return (
        <div className="contact-us-page-container">
            <div className="grid-container">
                <div className="leftmost-container"></div>
                <div className="middle-container">
                    <NavBar/>
                    <Body/>
                </div>
                <div className="rightmost-container"></div>
                <Footer/>
            </div>
        </div>
    )
}