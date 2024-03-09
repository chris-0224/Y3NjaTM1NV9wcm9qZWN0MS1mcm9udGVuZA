import {useRef, useState} from "react";
import {CSSTransition} from "react-transition-group";

import placeholder from '../media/placeholder-image.png';

function Panel({text, imageURL, onClickCallBack, panelID, currActivePanel}){
    const [isActive, setIsActive] = useState(panelID === currActivePanel);
    const panelNodeRef = useRef(null);

    console.log(panelID, " ", isActive, " ", panelNodeRef);
    return (
        <CSSTransition nodeRef={panelNodeRef} in={isActive} timeout={500} classNames="panel-state">
            <div ref={panelNodeRef} className="panel" style={{backgroundImage: `url(${imageURL})`}} onClick={()=>onClickCallBack(panelID)}>
                <h3>{text}</h3>
            </div>
        </CSSTransition>
    )
}
export default function ExpandingCards({panels}){
    const [activePanel, setActivePanel] = useState(null);
    const testRef = useRef(null);

    function onClick(panelID){
        setActivePanel(panelID);
    }

    let panelIDCounter = 1;
    return (
        <div className="expanding-cards-container">
            {/*<CSSTransition nodeRef={testRef} in={activePanel} timeout={500} classNames="panel-state">
                <div ref={testRef} className="panel" style={{backgroundImage: `url(${placeholder})`}} onClick={()=>onClick(1)}>
                    <h3>{"test"}</h3>
                </div>
            </CSSTransition>*/}

            {panels.map((panelIn)=>{
                return (
                    <Panel key={crypto.randomUUID()} panelID={panelIDCounter++} text={panelIn.text} imageURL={panelIn.imageURL}
                           onClickCallBack={onClick} currActivePanel={activePanel}/>
                )
            })}
        </div>
    )
}