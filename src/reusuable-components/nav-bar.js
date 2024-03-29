import SearchBar from "./search-bar";
import {useEffect, useRef, useState} from "react";
import {CSSTransition} from "react-transition-group";
import {useNavigate} from "react-router-dom";

function NavButton({text, path, pageLink}){
    const navigate = useNavigate();

    function navigateToPage(){
        navigate(pageLink);
    }

    return (
        <button className="nav-button" onClick={navigateToPage}>
            <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 -960 960 960" width="2em" fill="lightgray">
                <path d={path}/>
            </svg>
            <p>{text}</p>
        </button>
    )
}

function NavbarBody() {
    return (
        <div className="navbar">
            <ul>
                <li><NavButton text="HOME" path="M138-98v-513.667L480-869l343 257v514H565v-308H395v308H138Z" pageLink="/"/></li>
                <li><NavButton text="STORE" pageLink="/store"
                               path="M230-59q-37.175 0-64.087-26.912Q139-112.825 139-150v-489q0-37.588 26.913-64.794Q192.825-731 230-731h85v-10q2-67 50.031-114t115.181-47q67.15 0 115.469 47Q644-808 646-741v10h84q37.588 0 64.794 27.206Q822-676.588 822-639v489q0 37.175-27.206 64.088Q767.588-59 730-59H230Zm177-672h147v-10q-2-28-23-48.5T480-810q-30 0-50.5 20.5T407-741v10Zm193 212q18.6 0 32.3-13.2Q646-545.4 646-565v-74h-91v74q0 19.6 13.2 32.8Q581.4-519 600-519Zm-240 0q18.6 0 32.3-13.2Q406-545.4 406-565v-74h-91v74q0 19.6 13.2 32.8Q341.4-519 360-519Z"/>
                </li>
                <li><NavButton text="COMMUNITY EVENTS" pageLink="/community"
                               path="M480.404-395q-18.822 0-32.113-13.177T435-439.877q0-18.523 13.379-31.823t32.2-13.3q18.821 0 31.621 13.177 12.8 13.177 12.8 31.7T512.112-408.3Q499.225-395 480.404-395Zm-160.281 0q-18.523 0-31.823-13.177t-13.3-31.7q0-18.523 13.177-31.823t31.7-13.3q18.523 0 31.823 13.177t13.3 31.7q0 18.523-13.177 31.823t-31.7 13.3Zm319.298 0Q622-395 608.5-408.177t-13.5-31.7q0-18.523 13.588-31.823 13.587-13.3 31.508-13.3 17.922 0 31.413 13.177t13.491 31.7q0 18.523-13.379 31.823t-32.2 13.3ZM480.404-235q-18.822 0-32.113-13.588Q435-262.175 435-280.096q0-17.922 13.379-31.413t32.2-13.491q18.821 0 31.621 13.379 12.8 13.379 12.8 32.2Q525-262 512.112-248.5 499.225-235 480.404-235Zm-160.281 0q-18.523 0-31.823-13.588-13.3-13.587-13.3-31.508 0-17.922 13.177-31.413t31.7-13.491q18.523 0 31.823 13.379t13.3 32.2Q365-262 351.823-248.5t-31.7 13.5Zm319.298 0Q622-235 608.5-248.588 595-262.175 595-280.096q0-17.922 13.588-31.413Q622.175-325 640.096-325q17.922 0 31.413 13.379t13.491 32.2Q685-262 671.621-248.5t-32.2 13.5ZM190-58q-37.175 0-64.088-27.612Q99-113.225 99-149v-601q0-37.588 26.912-64.794Q152.825-842 190-842h59v-61h79v61h304v-61h79v61h59q37.588 0 64.794 27.206Q862-787.588 862-750v601q0 35.775-27.206 63.388Q807.588-58 770-58H190Zm0-91h580v-419H190v419Z"/>
                </li>
                <li><NavButton text="CONTACT US" pageLink="/contact"
                               path="M481.93-250q17.55 0 31.31-13.43Q527-276.859 527-294.908q0-18.05-13.69-31.071Q499.621-339 481.57-339q-18.05 0-31.31 12.871-13.26 12.87-13.26 31.58Q437-277 450.32-263.5q13.319 13.5 31.61 13.5ZM440-394h72q0-23.07 6.5-44.035Q525-459 555-485q30-22 42-47.574 12-25.573 12-57.156 0-55.686-31.781-88.978Q545.438-712 488.792-712 436-712 396-684t-59 74.147L404-585q11-28 31.986-43.5T481-644q24.5 0 41.75 14.901Q540-614.197 540-589.316 540-571 528.786-552.5 517.571-534 498-518q-28 23-43 52.07T440-394Zm39.679 335q-86.319 0-163.646-32.604-77.328-32.603-134.577-89.852-57.249-57.249-89.852-134.57Q59-393.346 59-479.862q0-87.41 32.662-164.275 32.663-76.865 90.203-134.412 57.54-57.547 134.411-90.499Q393.147-902 479.336-902q87.55 0 164.885 32.858 77.334 32.858 134.56 90.257 57.225 57.399 90.222 134.514Q902-567.257 902-479.458q0 86.734-32.952 163.382-32.952 76.648-90.499 134.2-57.547 57.551-134.421 90.214Q567.255-59 479.679-59Z"/>
                </li>
            </ul>
        </div>
    )
}

export default function NavBar() {
    const [isActive, setIsActive] = useState(false);
    const navbarRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > navbarRef.current.offsetHeight + 10) {
                setIsActive(true);
            } else {
                setIsActive(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className="gen-page-header-container">
            <CSSTransition nodeRef={navbarRef} in={isActive} timeout={500} classNames="navbar-state">
                <nav ref={navbarRef} className="navbar-container">
                    <div className="navbar-start">
                        <h1>GameSpeed</h1>
                        <h2>All-things-gaming in speedy time.</h2>
                    </div>
                    <NavbarBody/>
                    <SearchBar/>
                </nav>
            </CSSTransition>
        </header>
    )
}