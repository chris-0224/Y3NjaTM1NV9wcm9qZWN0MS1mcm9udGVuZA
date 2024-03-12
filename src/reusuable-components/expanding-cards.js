import {useRef, useState} from "react";
import {CSSTransition} from "react-transition-group";
import {shortDummyText} from "../data.ts";

export default function ExpandingCards({panels}){
    const [activePanel, setActivePanel] = useState(null);
    const refs = [useRef(null), useRef(null), useRef(null),
        useRef(null), useRef(null)];

    function onClick(panelID){
        setActivePanel(panelID);
    }

    return (
        <div className="expanding-cards-container">

            <CSSTransition nodeRef={refs[0]} in={activePanel === 1} timeout={500} classNames="panel-state">
                <div ref={refs[0]} className="panel" style={{backgroundImage: `url(${panels[0].imageURL})`}} onClick={()=>onClick(1)}>
                    <h3>{panels[0].text}</h3>
                    <p>{shortDummyText}</p>
                </div>
            </CSSTransition>

            <CSSTransition nodeRef={refs[1]} in={activePanel === 2} timeout={500} classNames="panel-state">
                <div ref={refs[1]} className="panel" style={{backgroundImage: `url(${panels[1].imageURL})`}}
                     onClick={() => onClick(2)}>
                    <h3>{panels[1].text}</h3>
                    <p>{shortDummyText}</p>
                </div>
            </CSSTransition>

            <CSSTransition nodeRef={refs[2]} in={activePanel === 3} timeout={500} classNames="panel-state">
                <div ref={refs[2]} className="panel" style={{backgroundImage: `url(${panels[2].imageURL})`}}
                     onClick={() => onClick(3)}>
                    <h3>{panels[2].text}</h3>
                    <p>{shortDummyText}</p>
                </div>
            </CSSTransition>

            <CSSTransition nodeRef={refs[3]} in={activePanel === 4} timeout={500} classNames="panel-state">
                <div ref={refs[3]} className="panel" style={{backgroundImage: `url(${panels[3].imageURL})`}}
                     onClick={() => onClick(4)}>
                    <h3>{panels[3].text}</h3>
                    <p>{shortDummyText}</p>
                </div>
            </CSSTransition>

            <CSSTransition nodeRef={refs[4]} in={activePanel === 5} timeout={500} classNames="panel-state">
                <div ref={refs[4]} className="panel" style={{backgroundImage: `url(${panels[4].imageURL})`}}
                     onClick={() => onClick(5)}>
                    <h3>{panels[4].text}</h3>
                    <p>{shortDummyText}</p>
                </div>
            </CSSTransition>

        </div>
    )
}