

function Panel({text, imageURL}){
    return (
        <div className="panel" style={{
            backgroundImage:imageURL
        }}>
            <p>{text}</p>
        </div>
    )
}
export default function ExpandingCards({panels}){
    return (
        <div className="expanding-cards-container">
            {panels ? panels.forEach((panel)=>{
                return (
                    <Panel text={panel.text} imageURL={panel.imageURL}/>
                )
            }) : <></>}
        </div>
    )
}