import PageHeader from "../reusuable-components/page-header";
import Footer from "../reusuable-components/page-footer";
import {useEffect, useState} from "react";

import '../stylesheets/community-styles.css';
import MediaPromotion from "../reusuable-components/media-promotion";
import gamingTournament from "../media/gaming-tournament.jpg";
import {dummyText, dummyText2, eventInformation} from "../data.ts";


function InterestForm({currEvents}){
    const [formSubmitted, setFormSubmitted] = useState(false);
    const possibleRoles = ["Spectator", "Organizer", "Participant"]
    function submitForm(e){
        e.preventDefault();



        setFormSubmitted(true);
    }

    return (
        <div className="interest-form-container">
            {formSubmitted ?
                <div className="submit-alert-container">
                    <h2>Form Submitted! Thank you for your interest!</h2>
                </div>
                : <></>
            }

            <form className="interest-form" method="POST" onSubmit={submitForm}>
                <div>
                    <label htmlFor="firstName">First Name: </label>
                    <input type="text" id="firstName" name="firstName" required autoFocus/>
                </div>

                <div>
                    <label htmlFor="lastName">Last Name: </label>
                    <input type="text" id="lastName" name="lastName" required/>
                </div>

                <div>
                    <label htmlFor="event-select">Pick Event: </label>
                    <select id="event-select" name="events" required>
                        <option value={null}>=====Choose an Option=====</option>
                        {eventInformation.map((eventInfo) => {
                            return (
                                <option key={crypto.randomUUID()} value={eventInfo.eventID}>{eventInfo.dateTime}</option>
                            )
                        })}
                    </select>
                </div>

                <div>
                    <label>Roles Interested In: </label>
                    <div className="role-checkboxes-container">
                        {possibleRoles.map((role) => {
                            return (
                                <>
                                    <input type="checkbox" id={role} name={role}/>
                                    <label htmlFor={role}>{role}</label>
                                </>
                            )
                        })}
                    </div>
                </div>

                <div>
                    <label htmlFor="desc">Description: </label>
                    <br/>
                    <textarea id="desc" name="description" rows="5" cols="40"
                              placeholder="Enter any further information here..."></textarea>
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
            <h2 className="community-page-header">COMMUNITY EVENTS </h2>
            <MediaPromotion id="event-news" title="Proin Quis Tortor Non Mi" img={gamingTournament} width="700px" desc={dummyText}/>
            <h2 className="section-header type2">UPCOMING EVENTS</h2>

            <table className="events-schedule-table">
                <thead>
                <tr>
                    <th className="time-info">Date & Time</th>
                    <th className="event-name">Event Name</th>
                    <th className="event-desc">Event Description</th>
                    <th className="event-fee">Event Entrance Fee</th>
                </tr>
                {eventInformation.map((eventInfo) => {
                    return (
                        <tr key={crypto.randomUUID()}>
                            <td className="time-info">{eventInfo.dateTime}</td>
                            <td className="event-name">{eventInfo.eventName}</td>
                            <td className="event-desc">{eventInfo.description}</td>
                            <td className="event-fee">${eventInfo.entranceFee}</td>
                        </tr>
                    )
                })}
                </thead>
            </table>

            <h2 className="section-header type1">INTEREST FORM</h2>
            <p>{dummyText2}</p>
            <br/>
            <InterestForm/>

        </div>
    );
}

export default function CommunityEvents() {
    return (
        <div className="community-events-container">
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

// gaming-tournament: <a href="https://wallpapers.com/wallpapers/gaming-tournaments-2048-x-1152-wallpaper-z4iodcyes6xn0j25.html">Wallpaper by xflorax</a> on Wallpapers.com