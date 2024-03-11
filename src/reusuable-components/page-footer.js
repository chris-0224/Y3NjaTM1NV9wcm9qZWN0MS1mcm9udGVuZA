

function FooterSection({header, itemsList}){

    return (
        <div className="footer-section-container">
            <h3>{header}</h3>
            <ul>
                {itemsList.map((item)=>{
                    return (
                        <li key={crypto.randomUUID()}>
                            <a href="https://example.com/">{item}</a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default function Footer(){

    const gethelpLinkNames = ["Contact Us", "Frequency Asked Questions","Order Status","Returns","Feedback","Morbi sem nunc"];
    const legalprivacyLinkNames = ["Privacy Policy","Terms of Service","Nam aliquet","Class aptent","Vivamus eget","Your Privacy Choices"];
    const aboutus_LinkNames = ["Accessibility", "Careers", "Nunc venenatis","Aenean pharetra","Fusce pharetra","Who We Are"];
    return (
        <div className="page-footer-container">
            <hr/>
            <div className="flex-container">
                <div className="gethelp-container">
                    <FooterSection header="GET HELP" itemsList={gethelpLinkNames}/>
                </div>
                <div className="legalprivacy-container">
                    <FooterSection header="LEGAL & PRIVACY" itemsList={legalprivacyLinkNames}/>
                </div>
                <div className="aboutus-container">
                    <FooterSection header="ABOUT US" itemsList={aboutus_LinkNames}/>
                </div>
            </div>
        </div>
    )
}