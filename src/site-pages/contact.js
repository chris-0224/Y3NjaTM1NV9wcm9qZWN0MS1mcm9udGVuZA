import PageHeader from "../reusuable-components/page-header";
import Footer from "../reusuable-components/page-footer";
import {useEffect, useState} from "react";

import '../stylesheets/contact-styles.css';
import {dummyText, dummyText2, dummyText3, dummyText4, dummyText5} from "../data.ts";


function QASections(){
    return (
        <div className="qa-sections-container">
            <ol className="qa-sections-list">
                <li>
                    <section id="Donec-mollis">
                        <h2>Donec mollis</h2>
                        <p>{dummyText4}</p>
                        <ul>
                            <li>
                                <h3>In rhoncus</h3>
                                <p>{dummyText}</p>
                            </li>
                            <li>
                                <h3>Cras non leo dapibus</h3>
                                <p>{dummyText2}</p>
                            </li>
                        </ul>
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
                        <ul>
                            <li>
                                <h3>Nullam elementum</h3>
                                <p>{dummyText3}</p>
                            </li>
                            <li>
                                <h3>Vestibulum ante ipsum</h3>
                                <p>{dummyText}</p>
                            </li>
                        </ul>
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
        <ol className="q-a-list">
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
                    <input type="text" id="firstName" name="firstName" required autoFocus/>
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

    useEffect(() => {

    }, []);

    // TODO: make cool changing pictures based on user input
    return (
        <div className="body-container">
            <h2 className="community-page-header">CONTACT US</h2>
            <h2 className="section-header type1">QUESTIONS / ANSWERS</h2>
            <p>{dummyText3}</p>
            <QAList/>
            <hr/>
            <QASections/>
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
                    <PageHeader/>
                    <Body/>
                </div>
                <div className="rightmost-container"></div>
            </div>
            <Footer/>
        </div>
    )
}